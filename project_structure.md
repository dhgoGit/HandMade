```
my-app/
│── packages/
│   │── common/               # 공통 코드 (상태 관리, API, 공통 UI 컴포넌트)
│   │   ├── state/        # Zustand, Redux 등 상태 관리
│   │   ├── api/          # IPC를 통한 API 호출
│   │   ├── components/   # 공통 UI 컴포넌트
│   │   │   └── widgets/      # 공통 위젯
│   │   │── package.json
│   │
│   │── electron-app/         # Electron 프로젝트 (데스크톱 앱)
│   │   │── main/             # Electron 메인 프로세스 코드
│   │   │── renderer/         # React 코드 (공통 UI 사용)
│   │   │── package.json
│   │
│   │── mobile-app/           # React Native 프로젝트 (모바일 앱)
│   │   │── src/
│   │   │   ├── components/   # 모바일 전용 컴포넌트 (필요할 경우)
│   │   │   ├── screens/      # React Native 전용 스크린
│   │   │── package.json
│
│── package.json
│── yarn.lock
```