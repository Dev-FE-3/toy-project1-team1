# Toy Project 1 template

이 프로젝트는 토이 프로젝트 1 을 위한 템플릿 프로젝트입니다.  
템플릿에는 vite 기반 프론트앤드 프로젝트 구조와 express 기반 node 서버를 포함하고 있습니다.

## ✅ 설치

```
npm install
```

## ✅ 실행

### ✔️ 서버 실행

```
npm run server
```

### ✔️ 클라이언트 실행

```
npm run dev
```

# 📢 토이프로젝트 1 : 병원 인트라넷 서비스

## 👋 구성원 소개

| <img width="150px" src="https://avatars.githubusercontent.com/u/94222592?v=4" style="max-width: 100%;"> | <img width="150px" src="https://avatars.githubusercontent.com/u/103170787?v=4" style="max-width: 100%;"> | <img width="150px" src="https://avatars.githubusercontent.com/u/148299246?v=4" style="max-width: 100%;"> | <img width="150px" src="https://avatars.githubusercontent.com/u/180731689?v=4" style="max-width: 100%;"> |
| :-----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
|                                               **정지윤**                                                |                                                **박현수**                                                |                                                **조유나**                                                |                                                **이혜림**                                                |
|                                [@jiyoon04](https://github.com/jiyoon04)                                 |                            [@redbuttonking](https://github.com/redbuttonking)                            |                                   [@j0n0m2](https://github.com/j0n0m2)                                   |                                  [@qzeeee1](https://github.com/qzeeee1)                                  |
|                                            **알고보니조장**                                             |                                                **오류맨**                                                |                                                **조각가**                                                |                                                **곁들임**                                                |

## 📌 팀 규칙

1. 매일 오전 10시 데일리 스크럼으로 팀원의 작업 진행상황을 확인하고 자유롭게 의견을 공유하였습니다.
2. 주요 회의 시간은 일주일 2회 진행 하였습니다. (화, 목요일)
3. 출결이슈는 팀원에게 사전에 미리 공유 하였습니다.
4. Slack에서 새로운 글이 업로드되면 내용을 확인한 팀원은 코멘트 및 이모지를 활용하여 읽음을 표시 하였습니다.
5. 프로젝트 진행중 막히는 부분은 팀원들에게 공유하며 문제해결 과정을 거쳤습니다.

## 🤝 컨벤션

코드의 일관성을 통해 불필요한 논쟁을 줄이고 팀의 생산성을 향상 하였습니다.

### 커밋메세지

- 커밋 메세지 구조
- 각 파트 사이에 엔터 하나를 두었습니다.
- <태그>: <제목> 순서로 기입 했습니다.(”:” 뒤에만 스페이스 남깁니다.)
- 태그의 첫글자는 대문자를 사용 했습니다.
- Subject에는 마침표를 찍지 않았습니다.
- 맨 뒤 괄호에 Github Issue 번호를 기입했습니다.
- 만약에 이슈가 해당하는 없을시에는 ISSUE 번호를 기입하지 않았습니다.

- 커밋 메세지 예시

  💡 feat: 새로운 기능 추가, 기능 로직 변경  
  🐛 fix: 버그 수정  
  📚 docs: 문서 수정, 주석  
  💄 style: 코드 포맷팅, 코드 변경이 없는 경우  
  🔧 refactor: 코드 리팩토링 (기능 변화 X)  
  ✏️ chore: 빌드 업무 수정, 패키지 매니저 수정  
  ✨ merge: main 브랜치에 반영

### 코드 스타일

ESLint, Prettier를 활용해 공통 포맷팅 규칙을 사용 하였습니다.
lit-html 플러그인 설치하여 페이지를 컴포넌화 하여 관리 하였습니다다.

### 브랜치

정확하고 효율적인 브랜치 관리를 위한 네이밍을 설정 하였습니다.
브랜치를 페이지 단위로 구분하여 각 페이지를 표현 하였습니다.

- 브랜치명 예시

  🎨 design  
  🔐 feat/login-mypage  
  🏖️ feat/absence-filter  
  ⏰ feat/work-status  
  📋 feat/board

## 📅 진행 일정

### 1️⃣ 기획: 2025.01.06 - 2025.01.09

프로젝트의 첫 단계로 프로젝트트 요구사항을 면밀히 검토하고,
와이어프레임 설계를 통해 구체적인 UI/UX를 시각화 했습니다.
팀원 개개인의 역량량을 고려하여 역할을 분담 하였습니다.

### 2️⃣ 마크업: 2025.01.10 - 2025.01.13

HTML과 CSS를 활용하여 페이지의 기본 골격을 구성하기 시작하였습니다.

### 3️⃣ 페이지 개발 part.1: 2025.01.14 - 2025.01.17

01/16 프로젝트 중간 리뷰와 멘토링을 거쳤으며,
일부 코드 병합과 브랜치 업데이트를 통해 개개인의 개발 현황을 점검 하였습니다.

### 4️⃣ 페이지 개발 part.2: 2025.01.18 - 2025.01.22

신규 기능과 개선사항은 소규모 PR(Pull Request)을 통해 검증하고 통합 하였습니다.
공통 CSS 을 정리하여 각자 제작한 페이지에 적용 하였습니다.

### 5️⃣ 발표자료 점검

팀원들과 함께 발표 자료를 준비하고 리허설을 진행 하였습니다.
필수 구현 내용뿐만 아니라 문제 해결 과정과 협업 경험을 포함합니다.

### 6️⃣ 리팩토링: 2025.01.31 - 2025.02.04

미완성된 기능들을 보완하고, 수렴된 피드백을 적용하는 작업을 진행할 예정입니다.

## 📥 설치 방법

### 저장소 복제

```bash
git clone https://github.com/Dev-FE-2/toy-project1-team1-intranet-project.git
```

### 의존성 패키지 설치

```bash
npm install
```

### 로컬 실행

```bash
npm run dev
```

## 🎯 활용 스택

### Front

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

### Comm.

<img src="https://camo.githubusercontent.com/236fcd63f5c7932c0928a86fb7ebdbb5e8876cc4c03779cd1fc8aa9c0196aab2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/github-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white" style="max-width: 100%;"><img src="https://camo.githubusercontent.com/fbe73eb0c50a7d491503c4e14d0a949a96f862997da5110f7ff0b9d28ef49a37/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f736c61636b2d3441313534423f7374796c653d666f722d7468652d6261646765266c6f676f3d736c61636b266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&amp;logo=slack&amp;logoColor=white" style="max-width: 100%;"><img src="https://camo.githubusercontent.com/cfd00850da7d61d06eedd66f38d007989ed62131e6b920e99016ed95de13c9a5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f74696f6e2d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f74696f6e266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/notion-000000?style=for-the-badge&amp;logo=notion&amp;logoColor=white" style="max-width: 100%;">

## 📂 프로젝트 구조

```
toy-project1-team1-hospital-intranet-project
├─ public
├─ server
├─ src
│  ├─ common.css
│  ├─ reset.css
│  ├─ components
│  │  └─ Navbar.js
│  ├─ pages
│  │  ├─ admin
│  │  │  └─ MypageAdmin.js
│  │  └─ front
│  ├─ Download.js
│  ├─ Home.js
│  ├─ Login.js
│  │─ MyPage.js
│  │─ MyPageAdm-1.js
│  │─ MyPageAdm-2.js
│  │─ MyPageAdm-3.js
│  ├─ Page.js
│  ├─ PageNotFound.js
│  └─ Support.js
├─ constants
├─ main.js
└─ utils
...
```

## 📝 프로젝트 자료

- [와이어프레임](https://www.figma.com/design/tC7kcB0CvAaa6luIpFNvVs/%EB%B3%91%EC%9B%90-%EC%9D%B8%ED%8A%B8%EB%9D%BC%EB%84%B7-%EC%84%9C%EB%B9%84%EC%8A%A4?node-id=0-1&p=f&t=Pg6jj0v5NCZftNpW-0)
- [팀컨벤션](https://www.notion.so/I-1503259dc0c281ae998cede30c3b0a46?p=cd643144fe0b4e8cbbbc99b704bc228c&pm=s)
- [회의록](https://www.notion.so/I-1503259dc0c281ae998cede30c3b0a46?p=ee67966ea27347a5a8550e41b7ed9fb8&pm=s)

## 🔍 페이지 별 기능

![image](https://github.com/user-attachments/assets/170d96af-df09-45c2-aa22-871730204e5c)

### 로그인 (이혜림)

- 로그인 탭을 사용자용과 관리자용으로 구분했습니다.
- 시각적으로 구분할수 있게 클릭시 텍스트의 굵기가 변경됩니다.
- 관리자로 로그인 탭 클릭시 관리자 전용 페이지로 이동합니다.
- 사용자로 로그인 탭 클릭시 사용자 전용 페이지로 이동합니다.

### 사용자용 페이지 초기화면 (조유나)

- 근무 상태 변경 및 게시판, 휴진 정보를 확인할 수 있는 페이지 입니다.
- 근무 상태를 변경할 수 있는 버튼을 클릭하면 localStorage 에 저장된 근무 상태와 출근 시각, 퇴근 시각 데이터를 받습니다.
- 근무 상태 변경 버튼을 누르면 근무 상태를 근무 중 또는 근무 전으로 변경되며, 출근 시각과 퇴근 시각을 현재 시간으로 표기 합니다.
- 표기된 근무 상태와 출근 시각과 퇴근 시각을 localStorage 에 저장 합니다.

![image](https://github.com/user-attachments/assets/a30c4d03-14ed-4e8e-8707-a2d63dbdd4d3)

### 사용자용 마이페이지 (이혜림)

- 사용자의 프로필 이미지가 표시되며 이미지 파일을 등록 및 수정, 삭제 할수 있습니다.
- 등록 및 수정, 삭제 버튼은 아이콘을 사용하여 사용자에게 시각적으로 효과적으로 다가갑니다.
- 해당 버튼은 토글 기능을 구현 하였습니다.
- 사용자의 이름, 직급, 근무 상태가 표시됩니다.
- 사용자의 근무상태는 사용자용 페이지 초기화면의 근무시간 및 근무종료 토글버튼과 연결됩니다.
- 사용자의 상세 개인 정보가 표시됩니다.

### 부재 내역 및 신청 (박현수)

- 부재 신청 버튼 클릭 시 신청 화면이 나타납니다.
- 다른 페이지로 이동하는 것이 아닌 한 페이지 안에서 작업 할 수 있는 모달 창을 구현했습니다.
- 사용자 입력 값으로 휴가 종류, 시작일, 종료일, 휴가 사유가 있습니다.
- 휴가 신청하기 버튼 클릭 시 신청내역이 부재신청 항목에 업로드 됩니다.
- 토글 버튼을 통해 휴가 종류에 대한 필터링이 가능합니다.
- 잔여 휴가 확인창을 구현하여 시각적으로 현재 남은 휴가 일수를 확인 할 수 있습니다.
- 달력창을 구현하여 해당 날짜의 달력을 시각적으로 확인 할 수 있습니다.
- 추후 달력 일자 클릭 시 해당 날짜 휴가 신청 내역을 볼 수 있는 기능을 추가할 예정입니다.

### 공지사항 관리 (정지윤)

- 갤러리 형식의 공지 게시판과 페이지네이션 기능을 가진 테이블 형식의 자료 게시판을 구현 하였습니다.
- 각 게시판은 탭 선택으로 이동이 가능합니다.
- 공지 게시판은 이미지, 제목, 간단한 내용을 포함한 카드 형식의 아이템이 한 줄당 3개씩 배치되며 스크롤이 가능합니다.
- 자료 게시판은 페이지에 최대 6개의 항목을 보여주고 동적으로 생성되는 페이지네이션 버튼을 통해 페이지 이동이 가능합니다.

### 직원 관리 (정지윤)

- 직원 데이터를 스크롤 형식으로 볼 수 있는 페이지 입니다.
- 특정 직원의 행을 클릭하면 해당 직원의 상세 페이지로 이동할 수 있습니다.
- 각 행에는 직원의 프로필, 이름, 직무, 이메일, 전화번호를 표시 됩니다.

### 관리자용 직원정보 수정 (이혜림)

- 직원의 이미지와 상세정보(입사일, 직급, 이메일주소, 전화번호, 자택주소, 생년월일)이 표시됩니다.
- 상단의 개인정보 수정 버튼을 클릭하면 localstorage 통해 상세정보를 저장할 수 있습니다.
- 해당 버튼은 토글 기능을 구현 하였습니다.
