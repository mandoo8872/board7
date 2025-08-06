import React, { useState } from 'react';
import type { SafeSettings } from '../types';
import { useAdminConfigStore } from '../../../store';

interface SettingsSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
  safeSettings: SafeSettings;
  updateSettings: (category: 'admin' | 'view', updates: any) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
  isExpanded,
  onToggle,
  safeSettings,
  updateSettings,
  onImageUpload
}) => {
  const { updatePassword } = useAdminConfigStore();
  const [passwordChangeMode, setPasswordChangeMode] = useState<'admin' | 'view' | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // 패스워드 변경 처리
  const handlePasswordChange = async (type: 'admin' | 'view') => {
    if (newPassword.length !== 4 || !/^\d{4}$/.test(newPassword)) {
      alert('패스워드는 4자리 숫자여야 합니다.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('패스워드 확인이 일치하지 않습니다.');
      return;
    }

    try {
      await updatePassword(type, newPassword);
      alert(`${type === 'admin' ? '관리자' : '뷰어'} 패스워드가 성공적으로 변경되었습니다.`);
      setPasswordChangeMode(null);
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      alert(`패스워드 변경 실패: ${error.message || '알 수 없는 오류'}`);
    }
  };

  // 패스워드 변경 취소
  const handlePasswordCancel = () => {
    setPasswordChangeMode(null);
    setNewPassword('');
    setConfirmPassword('');
  };
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-t-xl transition-colors"
      >
        <span className="flex items-center gap-2">
          <span>⚙️</span> 설정
        </span>
        <span className={`text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {isExpanded && (
        <div className="p-4 border-t border-slate-200 space-y-4">
          
          {/* 그리드 설정 */}
          <div className="bg-slate-50 rounded-lg p-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-600 flex items-center gap-1">
              <span>🔲</span> 그리드
            </h4>
            
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs">
                <input 
                  type="checkbox" 
                  checked={safeSettings.admin.gridVisible}
                  onChange={(e) => updateSettings('admin', { gridVisible: e.target.checked })}
                  className="rounded" 
                />
                <span>그리드 표시</span>
              </label>

              <label className="flex items-center gap-2 text-xs">
                <input 
                  type="checkbox" 
                  checked={safeSettings.admin.gridSnapEnabled}
                  onChange={(e) => updateSettings('admin', { gridSnapEnabled: e.target.checked })}
                  className="rounded" 
                />
                <span>그리드에 스냅</span>
              </label>
              
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">그리드 크기</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateSettings('admin', { 
                      gridSize: Math.max(5, safeSettings.admin.gridSize - 4) 
                    })}
                    className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                  >
                    ▼
                  </button>
                  <span className="flex-1 text-center text-sm font-mono bg-white py-1 rounded border">
                    {safeSettings.admin.gridSize}px
                  </span>
                  <button
                    onClick={() => updateSettings('admin', { 
                      gridSize: Math.min(64, safeSettings.admin.gridSize + 4) 
                    })}
                    className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                  >
                    ▲
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 객체 생성 위치 */}
          <div className="bg-slate-50 rounded-lg p-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-600 flex items-center gap-1">
              <span>📍</span> 객체 생성 위치
            </h4>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">X 좌표</label>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      const x = Math.max(0, safeSettings.admin.objectCreationPosition.x - 20);
                      updateSettings('admin', {
                        objectCreationPosition: {
                          ...safeSettings.admin.objectCreationPosition,
                          x
                        }
                      });
                    }}
                    className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                  >
                    ◀
                  </button>
                  <span className="flex-1 text-center text-xs font-mono bg-white py-1 rounded border">
                    {safeSettings.admin.objectCreationPosition.x}
                  </span>
                  <button
                    onClick={() => {
                      const x = safeSettings.admin.objectCreationPosition.x + 20;
                      updateSettings('admin', {
                        objectCreationPosition: {
                          ...safeSettings.admin.objectCreationPosition,
                          x
                        }
                      });
                    }}
                    className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                  >
                    ▶
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-600 mb-1 block">Y 좌표</label>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => {
                      const y = Math.max(0, safeSettings.admin.objectCreationPosition.y - 20);
                      updateSettings('admin', {
                        objectCreationPosition: {
                          ...safeSettings.admin.objectCreationPosition,
                          y
                        }
                      });
                    }}
                    className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                  >
                    ▲
                  </button>
                  <span className="flex-1 text-center text-xs font-mono bg-white py-1 rounded border">
                    {safeSettings.admin.objectCreationPosition.y}
                  </span>
                  <button
                    onClick={() => {
                      const y = safeSettings.admin.objectCreationPosition.y + 20;
                      updateSettings('admin', {
                        objectCreationPosition: {
                          ...safeSettings.admin.objectCreationPosition,
                          y
                        }
                      });
                    }}
                    className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                  >
                    ▼
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 배경 이미지 업로드 */}
          <div className="bg-slate-50 rounded-lg p-3">
            <h4 className="text-xs font-bold text-slate-600 mb-2 flex items-center gap-1">
              <span>🖼️</span> 배경 이미지
            </h4>
            <label className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors cursor-pointer text-sm font-medium flex items-center justify-center gap-2">
              <span>📁</span>
              <span>이미지 업로드</span>
              <input
                type="file"
                accept="image/*"
                onChange={onImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* 패스워드 변경 */}
          <div className="bg-slate-50 rounded-lg p-3">
            <h4 className="text-xs font-bold text-slate-600 mb-3 flex items-center gap-1">
              <span>🔐</span> 패스워드 변경
            </h4>
            
            {passwordChangeMode ? (
              // 패스워드 변경 모드
              <div className="space-y-3">
                <div className="text-xs text-slate-600 font-medium">
                  {passwordChangeMode === 'admin' ? '관리자' : '뷰어'} 패스워드 변경
                </div>
                
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">새 패스워드 (4자리 숫자)</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    maxLength={4}
                    pattern="\d{4}"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="새 패스워드"
                  />
                </div>
                
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">패스워드 확인</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    maxLength={4}
                    pattern="\d{4}"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="패스워드 확인"
                  />
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePasswordChange(passwordChangeMode)}
                    className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    변경
                  </button>
                  <button
                    onClick={handlePasswordCancel}
                    className="flex-1 px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    취소
                  </button>
                </div>
              </div>
            ) : (
              // 패스워드 변경 버튼들
              <div className="space-y-2">
                <button
                  onClick={() => setPasswordChangeMode('admin')}
                  className="w-full px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>👑</span>
                  <span>관리자 패스워드 변경</span>
                </button>
                
                <button
                  onClick={() => setPasswordChangeMode('view')}
                  className="w-full px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>👁️</span>
                  <span>뷰어 패스워드 변경</span>
                </button>
              </div>
            )}
          </div>

          {/* 기타 설정 */}
          <div className="bg-slate-50 rounded-lg p-3 space-y-2">
            <h4 className="text-xs font-bold text-slate-600 flex items-center gap-1">
              <span>🔧</span> 기타
            </h4>
            
            <label className="flex items-center gap-2 text-xs">
              <input 
                type="checkbox" 
                checked={safeSettings.admin.autoToolSwitch}
                onChange={(e) => updateSettings('admin', { autoToolSwitch: e.target.checked })}
                className="rounded" 
              />
              <span>객체 생성 후 자동으로 선택 도구로 전환</span>
            </label>
            
            <div>
              <label className="text-xs font-medium text-slate-600 mb-1 block">기본 폰트 크기</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateSettings('admin', { 
                    defaultFontSize: Math.max(8, safeSettings.admin.defaultFontSize - 2) 
                  })}
                  className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                >
                  ▼
                </button>
                <span className="flex-1 text-center text-sm font-mono bg-white py-1 rounded border">
                  {safeSettings.admin.defaultFontSize}px
                </span>
                <button
                  onClick={() => updateSettings('admin', { 
                    defaultFontSize: Math.min(72, safeSettings.admin.defaultFontSize + 2) 
                  })}
                  className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                >
                  ▲
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-600 mb-2 block">기본 박스 크기</label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">가로</label>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => updateSettings('admin', { 
                        defaultBoxWidth: Math.max(50, safeSettings.admin.defaultBoxWidth - 10) 
                      })}
                      className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                    >
                      ◀
                    </button>
                    <span className="flex-1 text-center text-xs font-mono bg-white py-1 rounded border">
                      {safeSettings.admin.defaultBoxWidth}px
                    </span>
                    <button
                      onClick={() => updateSettings('admin', { 
                        defaultBoxWidth: Math.min(500, safeSettings.admin.defaultBoxWidth + 10) 
                      })}
                      className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                    >
                      ▶
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">세로</label>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => updateSettings('admin', { 
                        defaultBoxHeight: Math.max(30, safeSettings.admin.defaultBoxHeight - 10) 
                      })}
                      className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                    >
                      ▲
                    </button>
                    <span className="flex-1 text-center text-xs font-mono bg-white py-1 rounded border">
                      {safeSettings.admin.defaultBoxHeight}px
                    </span>
                    <button
                      onClick={() => updateSettings('admin', { 
                        defaultBoxHeight: Math.min(200, safeSettings.admin.defaultBoxHeight + 10) 
                      })}
                      className="px-2 py-1 bg-white hover:bg-slate-100 rounded text-xs border"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsSection;