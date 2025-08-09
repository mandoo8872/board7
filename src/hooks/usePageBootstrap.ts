import { useEffect, useMemo, useRef, useState } from 'react';
import type { User, Auth as FirebaseAuth } from 'firebase/auth';
import type { Database } from 'firebase/database';
import { ref, get } from 'firebase/database';
import { useAdminConfigStore } from '../store';
import { useUndoRedoStore } from '../store/undoRedoStore';
import { secureAnonymousLogin } from '../config/firebase';

export type BootstrapParams = {
  boardId: string;
  auth: FirebaseAuth;
  rtdb: Database;
  onReady?: (ctx: { user: User; perms: string[] }) => void;
  onError?: (err: unknown) => void;
};

export function usePageBootstrap(params: BootstrapParams): {
  ready: boolean;
  user: User | null;
  perms: string[] | null;
  error: unknown | null;
} {
  const { boardId, auth, rtdb, onReady, onError } = params;

  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [perms, setPerms] = useState<string[] | null>(null);
  const [error, setError] = useState<unknown | null>(null);

  const didInitRef = useRef(false);

  const registry = useMemo(() => {
    const g = globalThis as unknown as { __BOARD7_REGISTRY__?: Map<string, { subscribed: boolean }> };
    if (!g.__BOARD7_REGISTRY__) g.__BOARD7_REGISTRY__ = new Map();
    return g.__BOARD7_REGISTRY__!;
  }, []);

  useEffect(() => {
    let unsubIsLoading: (() => void) | null = null;
    let unmounted = false;

    const run = async () => {
      if (didInitRef.current) return;
      didInitRef.current = true;

      // 익명 로그인(지수 백오프 최대 3회)
      const delays = [0, 300, 900];
      try {
        if (import.meta.env.DEV) console.debug('[bootstrap] login start');
        for (let i = 0; i < delays.length; i++) {
          try {
            if (delays[i] > 0) await new Promise((r) => setTimeout(r, delays[i]));
            await secureAnonymousLogin();
            if (auth.currentUser) {
              if (import.meta.env.DEV) console.debug('[bootstrap] login success');
              break;
            }
          } catch (e) {
            if (i === delays.length - 1) throw e;
          }
        }
        if (unmounted) return;
        setUser(auth.currentUser ?? null);
      } catch (err) {
        if (import.meta.env.DEV) console.debug('[bootstrap] login failed', err);
        setError(err);
        onError?.(err);
        return;
      }

      // 권한 확인 (permission_denied 시 onError로 통일)
      try {
        await get(ref(rtdb, 'settings'));
        setPerms([]);
      } catch (err) {
        if (import.meta.env.DEV) console.debug('[bootstrap] permission_denied or read error', err);
        setError(err);
        onError?.(err);
        // 계속 진행하여 기존 동작 유지
      }

      const store = useAdminConfigStore.getState();
      const undo = useUndoRedoStore.getState();

      // 초기 동기화는 히스토리 오염 방지
      undo.setRestoring(true);

      const entry = registry.get(boardId);
      if (!entry?.subscribed) {
        if (import.meta.env.DEV) console.debug('[bootstrap] subscribe', boardId);
        store.initializeFirebaseListeners();
        registry.set(boardId, { subscribed: true });
      } else if (import.meta.env.DEV) {
        console.debug('[bootstrap] already subscribed', boardId);
      }

      // isLoading 변화를 구독하여 준비 완료 감지 (Zustand subscribe with selector)
      // @ts-expect-error Zustand subscribe overload differences
      unsubIsLoading = useAdminConfigStore.subscribe((s) => s.isLoading, (isLoading: boolean) => {
        if (!isLoading) {
          if (unmounted) return;
          if (import.meta.env.DEV) console.debug('[bootstrap] ready');
          undo.setRestoring(false);
          setReady(true);
          if (auth.currentUser) onReady?.({ user: auth.currentUser, perms: perms ?? [] });
        }
      });
    };

    run();

    return () => {
      unmounted = true;
      try {
        if (import.meta.env.DEV) console.debug('[bootstrap] cleanup', boardId);
        if (unsubIsLoading) {
          unsubIsLoading();
          unsubIsLoading = null;
        }
        const store = useAdminConfigStore.getState();
        store.cleanupFirebaseListeners();
        registry.delete(boardId);
      } catch {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardId, auth, rtdb]);

  return { ready, user, perms, error };
}


