import { useCallback } from 'react';
import { ImageObject } from '../../../../types';

export const useClipboard = (
  addImageObject: (obj: Omit<ImageObject, 'id'>) => Promise<string>,
  settings?: any
) => {
  // 클립보드 이미지 붙여넣기 핸들러
  const handleClipboardPaste = useCallback(async () => {
    try {
      // 클립보드 API 지원 확인
      if (!navigator.clipboard || !navigator.clipboard.read) {
        console.warn('클립보드 API가 지원되지 않습니다.');
        return;
      }

      const clipboardItems = await navigator.clipboard.read();
      
      for (const clipboardItem of clipboardItems) {
        // 이미지 타입만 처리
        const imageTypes = clipboardItem.types.filter(type => type.startsWith('image/'));
        
        if (imageTypes.length > 0) {
          const imageType = imageTypes[0];
          const blob = await clipboardItem.getType(imageType);
          
          // Blob을 base64로 변환
          const reader = new FileReader();
          reader.onload = async (event) => {
            const src = event.target?.result as string;
            
            // 설정이 로드되지 않았을 때 기본값 제공
            const objectCreationPosition = settings?.admin?.objectCreationPosition ?? { x: 260, y: 950 };
            
            // 이미지 실제 크기 측정을 위한 임시 이미지 객체 생성
            const img = new Image();
            img.onload = async () => {
              try {
                // 가로 200px 고정, 세로는 비율에 맞춰 계산
                const targetWidth = 200;
                const aspectRatio = img.naturalHeight / img.naturalWidth;
                const targetHeight = targetWidth * aspectRatio;
                
                const newImageObject = {
                  x: objectCreationPosition.x,
                  y: objectCreationPosition.y,
                  width: targetWidth,
                  height: targetHeight,
                  src,
                  permissions: {
                    editable: true,
                    movable: true,
                    resizable: true,
                    deletable: true,
                  },
                  zIndex: Date.now(),
                  locked: false,
                  visible: true,
                  opacity: 1,
                  maintainAspectRatio: true, // 비율 유지 활성화
                  lastModified: Date.now()
                };

                await addImageObject(newImageObject);
                console.log('클립보드 이미지가 성공적으로 붙여넣어졌습니다.');
              } catch (error) {
                console.error('이미지 객체 생성 실패:', error);
              }
            };
            
            img.onerror = () => {
              console.error('클립보드 이미지 로드 실패');
            };
            
            img.src = src;
          };
          
          reader.onerror = () => {
            console.error('클립보드 이미지 읽기 실패');
          };
          
          reader.readAsDataURL(blob);
          break; // 첫 번째 이미지만 처리
        }
      }
    } catch (error) {
      // 사용자가 클립보드 접근을 거부했거나 다른 오류
      console.log('클립보드에서 이미지를 읽을 수 없습니다:', error);
    }
  }, [settings?.admin?.objectCreationPosition, addImageObject]);

  return {
    handleClipboardPaste
  };
};