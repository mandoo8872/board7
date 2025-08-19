import { useState, useCallback } from 'react';
import { TextObject } from '../../../../types';

export const useInlineEdit = (
  updateTextObject: (id: string, updates: Partial<TextObject>) => Promise<void>,
  setSelectedObjectId: (id: string | null) => void,
  isViewPage: boolean = false
) => {
  const [editingObjectId, setEditingObjectId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState<string>('');

  const startInlineEdit = useCallback((obj: TextObject) => {
    setEditingObjectId(obj.id);
    setEditingText(obj.text);
    
    // 객체를 편집 상태로 업데이트
    updateTextObject(obj.id, { isEditing: true });
    
    // 모든 페이지에서 인라인 편집기 사용 (textarea 포커스)
    setTimeout(() => {
      const textarea = document.querySelector('textarea[data-editing="true"]') as HTMLTextAreaElement;
      if (textarea) {
        const textLength = obj.text.length;
        textarea.setSelectionRange(textLength, textLength);
        textarea.focus();
      }
    }, 0);
    
    // ViewPage에서는 가상 키보드 대신 인라인 편집기 사용
    // (터치 디바이스에서도 인라인 편집기가 더 안정적)
    if (isViewPage) {
      setSelectedObjectId(obj.id);
    }
  }, [isViewPage, updateTextObject, setSelectedObjectId]);

  const finishInlineEdit = useCallback(async () => {
    if (editingObjectId && editingText !== undefined) {
      await updateTextObject(editingObjectId, { 
        text: editingText,
        isEditing: false 
      });
      setEditingObjectId(null);
      setEditingText('');
    }
  }, [editingObjectId, editingText, updateTextObject]);

  const cancelInlineEdit = useCallback(() => {
    if (editingObjectId) {
      // 편집 취소 시 원래 텍스트로 복원
      updateTextObject(editingObjectId, { isEditing: false });
    }
    setEditingObjectId(null);
    setEditingText('');
  }, [editingObjectId, updateTextObject]);

  const updateEditingText = useCallback((text: string) => {
    setEditingText(text);
  }, []);

  return {
    editingObjectId,
    editingText,
    startInlineEdit,
    finishInlineEdit,
    cancelInlineEdit,
    updateEditingText
  };
};