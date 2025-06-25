import { ref, get, set as firebaseSet, update as firebaseUpdate } from 'firebase/database';
import { database } from '../config/firebase';

// 사용자 세션 ID 생성 (브라우저별 고유 식별자)
export const generateSessionId = (): string => {
  if (typeof window !== 'undefined') {
    let sessionId = localStorage.getItem('board7_session_id');
    if (!sessionId) {
      sessionId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('board7_session_id', sessionId);
    }
    return sessionId;
  }
  return `server_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// 현재 사용자 세션 ID
export const getCurrentSessionId = () => generateSessionId();

// LWW 업데이트 함수 - 텍스트 객체
export const lwwUpdateTextObject = async (
  id: string, 
  updates: Partial<any>, 
  sessionId: string = getCurrentSessionId()
): Promise<boolean> => {
  try {
    const objectRef = ref(database, `textObjects/${id}`);
    
    // 현재 서버의 객체 상태 가져오기
    const snapshot = await get(objectRef);
    const currentData = snapshot.val();
    
    if (!currentData) {
      // 객체가 존재하지 않으면 새로 생성
      const newObject = {
        ...updates,
        id,
        lastModified: Date.now(),
        modifiedBy: sessionId
      };
      await firebaseSet(objectRef, newObject);
      return true;
    }
    
    // LWW 충돌 검사
    const updateTimestamp = Date.now();
    const serverTimestamp = currentData.lastModified || 0;
    
    // 클라이언트의 마지막 수정 시간이 서버보다 오래된 경우
    if (updates.lastModified && updates.lastModified < serverTimestamp) {
      console.warn(`LWW: Update rejected for object ${id}. Server timestamp: ${serverTimestamp}, Client timestamp: ${updates.lastModified}`);
      return false; // 업데이트 거부
    }
    
    // 업데이트 실행
    const updatedObject = {
      ...updates,
      lastModified: updateTimestamp,
      modifiedBy: sessionId
    };
    
    await firebaseUpdate(objectRef, updatedObject);
    console.log(`LWW: Object ${id} updated successfully by ${sessionId}`);
    return true;
    
  } catch (error) {
    console.error('LWW update failed:', error);
    return false;
  }
};

// LWW 업데이트 함수 - 이미지 객체
export const lwwUpdateImageObject = async (
  id: string, 
  updates: Partial<any>, 
  sessionId: string = getCurrentSessionId()
): Promise<boolean> => {
  try {
    const objectRef = ref(database, `imageObjects/${id}`);
    
    // 현재 서버의 객체 상태 가져오기
    const snapshot = await get(objectRef);
    const currentData = snapshot.val();
    
    if (!currentData) {
      // 객체가 존재하지 않으면 새로 생성
      const newObject = {
        ...updates,
        id,
        lastModified: Date.now(),
        modifiedBy: sessionId
      };
      await firebaseSet(objectRef, newObject);
      return true;
    }
    
    // LWW 충돌 검사
    const updateTimestamp = Date.now();
    const serverTimestamp = currentData.lastModified || 0;
    
    // 클라이언트의 마지막 수정 시간이 서버보다 오래된 경우
    if (updates.lastModified && updates.lastModified < serverTimestamp) {
      console.warn(`LWW: Update rejected for object ${id}. Server timestamp: ${serverTimestamp}, Client timestamp: ${updates.lastModified}`);
      return false; // 업데이트 거부
    }
    
    // 업데이트 실행
    const updatedObject = {
      ...updates,
      lastModified: updateTimestamp,
      modifiedBy: sessionId
    };
    
    await firebaseUpdate(objectRef, updatedObject);
    console.log(`LWW: Object ${id} updated successfully by ${sessionId}`);
    return true;
    
  } catch (error) {
    console.error('LWW update failed:', error);
    return false;
  }
};

// LWW 생성 함수 - 필기 객체
export const lwwCreateDrawObject = async (
  drawObject: Omit<any, 'id' | 'lastModified' | 'modifiedBy'>,
  sessionId: string = getCurrentSessionId()
): Promise<string | null> => {
  try {
    const drawObjectsRef = ref(database, 'drawObjects');
    const newRef = ref(database, `drawObjects/${Date.now()}_${sessionId}`);
    
    const newObject = {
      ...drawObject,
      id: newRef.key || `${Date.now()}_${sessionId}`,
      lastModified: Date.now(),
      modifiedBy: sessionId
    };
    
    await firebaseSet(newRef, newObject);
    console.log(`LWW: Draw object created successfully by ${sessionId}`);
    return newRef.key || newObject.id;
    
  } catch (error) {
    console.error('LWW create failed:', error);
    return null;
  }
};

// 충돌 해결 함수 - 두 객체를 비교하여 최신 버전 반환
export const resolveConflict = <T extends { lastModified: number; modifiedBy?: string }>(
  local: T, 
  remote: T
): T => {
  if (local.lastModified > remote.lastModified) {
    return local;
  } else if (local.lastModified < remote.lastModified) {
    return remote;
  } else {
    // 같은 시간이면 modifiedBy로 결정 (알파벳 순서)
    if (local.modifiedBy && remote.modifiedBy) {
      return local.modifiedBy < remote.modifiedBy ? local : remote;
    }
    return local; // 기본값
  }
}; 