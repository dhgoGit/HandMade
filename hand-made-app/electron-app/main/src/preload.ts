import { contextBridge } from 'electron';

// 렌더러 프로세스에 노출할 안전한 API 정의
contextBridge.exposeInMainWorld('electronAPI', {
  // 필요한 경우 여기에 안전한 API 메서드 추가
}); 