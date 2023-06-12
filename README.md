# wanted-pre-onboarding-frontend

> ### 지원자 : 이도현

## 1. 배포 링크

## 2. 프로젝트 실행 방법
```
// git clone 후
npm install
npm start
```

## 3. 프로젝트 구조
```
.
├── README.md
├── node_modules/
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.jsx
    ├── api
    │   └── client.jsx
    ├── components
    │   ├── auth
    │   │   ├── SignIn.jsx
    │   │   └── SignUp.jsx
    │   └── todo
    │       ├── TodoInput.jsx
    │       ├── TodoItem.jsx
    │       ├── TodoList.jsx
    │       └── TodoReducer.jsx
    ├── hooks
    │   ├── useRedirect.jsx
    │   └── useValidation.jsx
    ├── index.js
    └── pages
        ├── Auth.jsx
        ├── Home.jsx
        └── Todo.jsx
```
## 4. 데모 영상

데모 영상은 배포 링크로 대체 가능하며, 배포가 되었고 배포된 사이트에서 기능이 모두 동작하면 가산점이 부여됩니다.
배포된 사이트에서 기능이 정상동작 하지 않는다면 배포 가산점이 부여되지 않습니다

## 5. 사용 라이브러리
- axios
- react
- react-dom
- react-router-dom
- react-scripts
- styled-components