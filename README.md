# GymNote - Frontend Application Part
## 💪 프로젝트 소개
**세상에서 가장 쉬운 운동기록 앱 `GymNote`**

>나만의 운동 루틴을 설정해 진행한 운동을 기록해보세요.  
>지역별 운동 커뮤니티 게시판에서 서로 소통할 수 있는 운동 루틴 기록 및 커뮤니티 앱입니다.

## 🧑‍💻 개발 참여자
|lgm1007|Chiloli|
|---|---|
|[![lgm1007](https://github.com/lgm1007.png?size=200)](https://github.com/lgm1007)|[![Chiloli](https://github.com/Chiloli.png?size=200)](https://github.com/Chiloli)

## 📚 기술스택 구성
- React Native + Expo
- Nodejs v18.20.8
- pnpm v10.10.0

## 🚀 프로젝트 실행하기
```
# 프로젝트 의존성 패키지 설치
gymnote-FE > pnpm i

# 프로젝트 실행
# 옵션설명: --tunnel을 붙이면 개발 환경의 앱을 터널 URL로 실행할 수 있어, 모바일 기기가 앱 실행 PC와 동일한 네트워크가 아니어도 확인 가능하다.
gymnote-FE > pnpm expo start --tunnel
```

## 🗂️ 프로젝트 구성
```
gymnote-FE/
├── App.tsx
├── package.json
├── tsconfig.json
├── src/
│   ├── screens/     ⬅️ 화면 (ex. 홈 화면, 기록 화면)
│   ├── components/  ⬅️ 재사용 컴포넌트들 (ex. 버튼, 카드)
│   ├── navigation/  ⬅️ 화면 이동 (React Navigation 관련 코드)
│   ├── assets/      ⬅️ 이미지, 폰트, 아이콘 같은 리소스
│   └── constants/   ⬅️ 색상, 폰트, 공통 값 모음
```
