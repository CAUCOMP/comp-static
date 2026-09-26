# ☁️ COMP Client

중앙대학교 개발 동아리 **COMP**의 웹 서비스 **임시 배포용** 레포지토리입니다.  

## 👤 Front 팀원 소개

|                                   Backend                                   |                                    Backend                                    |                            Backend                            |
| :-------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :-----------------------------------------------------------: |
|          <img src="https://github.com/HeejuKo.png" width="150" />           |        <img src="https://github.com/kim-seungbeom.png" width="150" />         |   <img src="https://github.com/02junho.png" width="150" />    |       <img src="https://github.com/sooowii.png" width="150" />       |
| [강지혜](https://github.com/Jihaeee)<br/>COMP 37기<br/>COMP 38기 회장 | [김승범](https://github.com/kim-seungbeom)<br/>COMP 36기<br/>COMP 40기 멘토 | [정수영](https://github.com/sooowii)<br/>COMP 39기<br/>COMP 40기 멘토 |



## 🧰 Tech Stack

#### 🛠 Frontend & Framework

<div>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/React%2019-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/Vite%207-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 7">
  <img src="https://img.shields.io/badge/React%20Router%207-CA4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router 7">
</div>

#### 🎨 Styling & Icons

<div>
  <img src="https://img.shields.io/badge/Tailwind%20CSS%204-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/React%20Icons-E91E63?style=flat-square&logo=react&logoColor=white" alt="React Icons">
</div>

#### 📦 Package Management & Code Quality

<div>
  <img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white" alt="npm">
  <img src="https://img.shields.io/badge/ESLint%209-4B32C3?style=flat-square&logo=eslint&logoColor=white" alt="ESLint 9">
</div>

#### 🚀 Deployment & Collaboration

<div>
  <img src="https://img.shields.io/badge/Vercel-Planned-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel 배포 예정">
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub">
</div>
---


## 📋 Github Workflow

### 작업 흐름

1. 작업 시작 전 GitHub Issue 생성
2. 생성한 Issue를 GitHub Project Board에 연결
3. develop 브랜치 기준 작업 브랜치 생성
4. 작업 진행 후 Commit Convention에 맞게 커밋
5. 작업 완료 후 develop 브랜치로 Pull Request 생성
6. PR 생성 시 관련 Issue 연결 (Closes #이슈번호)
7. Merge 후 Project 상태 업데이트

#### 작업 전 규칙

- 모든 작업 시작 전, 작업 브랜치에서 최신 develop 브랜치를 pull

#### PR 전 규칙

- PR 생성 전 원격 develop 브랜치에 변경 사항이 있을 경우  
  작업 브랜치에 develop 브랜치 merge 후 PR 생성

### 브랜치 전략

```
main       -> 배포 브랜치
develop    -> 개발 통합 브랜치
feature/*  -> 기능 개발 브랜치
fix/*      -> 버그 수정 브랜치
refactor/* -> 리팩토링 브랜치
chore/*    -> 설정/환경 작업 브랜치
```

### Commit Message Convention

형식

```
type(scope): commit message (#issue-number)
```

예시

```
feat(auth): 회원가입 기능 추가 (#5)
fix(upload): 이미지 업로드 오류 수정 (#18)
```

| Type     | 의미                              |
| -------- | --------------------------------- |
| feat     | 새로운 기능 추가                  |
| fix      | 버그 수정                         |
| docs     | 문서 수정                         |
| style    | 코드 스타일 수정 (로직 변경 없음) |
| refactor | 리팩토링                          |
| test     | 테스트 코드 추가/수정             |
| chore    | 설정, 의존성, 기타 작업           |
| perf     | 성능 개선                         |
| ci       | CI/CD 설정 변경                   |
| build    | 빌드 관련 작업                    |
| revert   | 이전 커밋 되돌리기                |



### ✅ Code Style & Structure

- **Styling**: `TailwindCSS`를 사용하여 일관된 디자인 시스템 유지
- **Naming**: 컴포넌트는 `PascalCase`, 일반 함수/변수는 `camelCase` 사용
- **Structure**: 기능 단위 폴더 관리를 지향합니다.

```bash
src/
 ┣ api/             # API 인스턴스 및 호출 함수 (Axios 등)
 ┣ assets/          # 정적 파일 (Images, SVG, Icons)
 ┣ components/      # 재사용 가능한 UI 컴포넌트 (Button, Input 등)
 ┣ constants/       # 공통 상수 (API URL, 에러 메시지, 환경 변수)
 ┣ hooks/           # 커스텀 훅 (useAuth, useFetch 등)
 ┣ layouts/         # 페이지 공통 레이아웃 (Header, Footer 포함)
 ┣ pages/           # 라우팅 단위 페이지 컴포넌트
 ┣ routes/          # React Router 설정 및 경로 정의
 ┣ styles/          # Tailwind 설정 및 글로벌 CSS
 ┣ utils/           # 유틸리티 함수 (날짜 포맷팅, 데이터 가공)
 ┗ App.jsx          # 메인 엔트리 및 Provider 설정
