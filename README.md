# Toy Project 1 template

이 프로젝트는 토이 프로젝트 1 을 위한 템플릿 프로젝트입니다.
템플릿에는 vite 기반 프론트앤드 프로젝트 구조와 express 기반 node 서버를 포함하고 있습니다.

## 설치

```
npm install
```

## 실행

### 서버 실행

```
npm run server
```

### 클라이언트 실행

```
npm run dev
```

# 토이프로젝트 1 : 병원 인트라넷 서비스

**코드깎는 jang 인들** 의 토이 프로젝트1 산출물 저장소입니다.

## 🙌 구성원 소개

| <img width="100px" src="https://avatars.githubusercontent.com/u/56241150?v=4" style="max-width: 100%;"> | <img width="100px" src="https://avatars.githubusercontent.com/u/175666538?v=4" style="max-width: 100%;"> | <img width="100px" src="https://avatars.githubusercontent.com/u/182174995?v=4" style="max-width: 100%;"> | <img width="100px" src="https://avatars.githubusercontent.com/u/182200395?v=4" style="max-width: 100%;"> |
| :-----------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------: |
|                                               **정지윤**                                                |                                                **박현수**                                                |                                                **조유나**                                                |                                               **이혜림림**                                               |
|                               [@KwonSeami](https://github.com/KwonSeami)                                |                                  [@vgotu99](https://github.com/vgotu99)                                  |                                 [@jurilee0](https://github.com/jurilee0)                                 |                         [@YounghoonJeon-fe](https://github.com/YounghoonJeon-fe)                         |
|                                     청렴결백한 논리주의자 **ISTJ**                                      |                                          대담한 통솔자 **ENTJ**                                          |                                          대담한 통솔자 **ENTJ**                                          |                                        용의주도한 전략가 **INTJ**                                        |

## ✨ 그라운드 룰

1. 부재 시에는 미리 공유합니다.
2. 의견이 있을 때는 확실하게 어필하며 적극적으로 커뮤니케이션 합니다.
3. 진행 중 문제가 있을 때는 먼저 공유합니다.
4. 안건에 대해 모두가 피드백하고, 회의를 통해 결정된 내용은 특정인이 아닌 구성원 전체가 함께 책임집니다.
5. 서로의 입장과 상황을 공감하기 위해 노력하며 어려움을 최소화 할 수 있도록 도와주세요.

## 💡 컨벤션

원활한 협업을 위해 코드의 일관성과 가독성을 높여 프로젝트 관리를 효율적으로 수행합니다.

(단, 작업에 지장이 없는 선에서 유연한 적용을 허용)

### 네이밍

- CSS : kebab-case
- 변수 : camelCase
- 상수 : 대문자 + 언더스코어(\_)
- 함수 : camelCase, 동사 + 명사 형태
  - 축약을 최소화 하고 직관적으로 작성
  - 필요 시 기능에 대한 주석

### 코드 스타일

ESLint, Prettier를 활용해 공통 포맷팅 규칙을 사용합니다.

### 브랜치

빠르고 효율적인 관리를 위해 Github-Flow 베이스를 따릅니다.

개발 중 `feature`, `main` 두 개의 브랜치 운용하되 branch, Commit message를 명확하게 작성하고 원격지에 수시로 push 합니다.
작업 완료 후 PR을 통해 병합하며, 병합이 완료된 브랜치는 삭제해주세요.

또한, 빌드 이후 `prod` 브랜치 도입을 검토합니다.

### 커밋 메세지

`{이모지} 커밋 제목 {이슈 번호}` 양식을 사용합니다.

- ✨ `:sparkles:` : 새로운 기능 추가
- 🐛 `:bug:` : 버그 수정
- 📚 `:books:` : 문서 관련
- 💄 `:lipstick:` : UI 작업 / 스타일 변경 (예: 포매팅 수정, 들여쓰기 추가)
- 🧑‍🎨 `:art:` : 코드 리팩토링
- ⚡ `:zap:` : 기능 개선 및 변경
- 🐎 `:racehorse:` : 성능 개선
- ✏️ `:pencil:` : 오탈자 또는 문구, 변수명 수정
- 💩 `:poop:` : 코드 또는 파일 삭제
- 🚧 `:construction:` : 진행 중인 사항에 대한 중간 커밋 (WIP)
- 🔨 `:hammer:` : 개발 스크립트를 추가하거나 업데이트
- 🗃️ `:card_file_box:` : 데이터베이스 관련 변경사항
- 🚚 `:truck:` : 리소스(파일, 경로 등)를 이동하거나 이름을 변경

## 📅 진행 일정

### 1️⃣ 기획: 2024.10.16 - 2024.10.17

요구사항을 분석하고 와이어프레임을 통해 가시화 합니다.

과정에서 담당 롤을 배정하고 공통 스타일 가이드를 확립했습니다.

### 2️⃣ 마크업: 2024.10.18 - 2024.10.23

HTML, CSS를 이용해 구조를 잡는 작업에 착수했습니다.

### 3️⃣ 기능 개발 part.1: 2024.10.24 - 2024.10.30

1차 작업 범위를 선정하고 담당 페이지 단위 기능 개발을 진행했습니다.

중간점검 및 멘토링 일정이 있었으며, **24.10.29** 통합 후 main 현행화를 통해 사이드이펙트 점검 및 진척도를 공유했습니다.

### 4️⃣ 기능 개발 part.2: 2024.10.30 - 2024.11.01

추가 제작 및 보완이 필요한 내용은 기능 단위 PR을 통해 빠르게 통합하고 테스트했습니다.

### 5️⃣ 리팩토링: 2024.11.01 - 2024.11.07

기한 내 완성되지 못한 기능 및 고도화, 피드백 사항을 반영합니다.

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

# 혹은 npm start (클라이언트, 서버 동시 실행)

```

## 🔧 활용 스택

### Front

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

### Back

<img src="https://img.shields.io/badge/node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white"><img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=nodedotjs&logoColor=white" style="max-width: 100%;"><img src="https://img.shields.io/badge/firebase-DD2C00?style=for-the-badge&logo=nodedotjs&logoColor=white" style="max-width: 100%;">

### Comm.

<img src="https://camo.githubusercontent.com/236fcd63f5c7932c0928a86fb7ebdbb5e8876cc4c03779cd1fc8aa9c0196aab2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6769746875622d3138313731373f7374796c653d666f722d7468652d6261646765266c6f676f3d676974687562266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/github-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white" style="max-width: 100%;"><img src="https://camo.githubusercontent.com/fbe73eb0c50a7d491503c4e14d0a949a96f862997da5110f7ff0b9d28ef49a37/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f736c61636b2d3441313534423f7374796c653d666f722d7468652d6261646765266c6f676f3d736c61636b266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&amp;logo=slack&amp;logoColor=white" style="max-width: 100%;"><img src="https://camo.githubusercontent.com/cfd00850da7d61d06eedd66f38d007989ed62131e6b920e99016ed95de13c9a5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f74696f6e2d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f74696f6e266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/notion-000000?style=for-the-badge&amp;logo=notion&amp;logoColor=white" style="max-width: 100%;">

## 🔨 프로젝트 구조

```
toy-project1-team1-intranet-project
├─ public
├─ server
├─ src
│  ├─ common.css
│  ├─ reset.css
│  ├─ components
│  ├─ pages
│  │  ├─ admin
│  │  └─ front
│  ├─ constants
│  ├─ main.js
│  └─ utils
...
```

## 📑 프로젝트 자료

- [와이어프레임](https://www.canva.com/design/DAGTtelpuWk/3ipJS1Jlwrlvy-WUpDmUWg/view?utm_content=DAGTtelpuWk&utm_campaign=designshare&utm_medium=link&utm_source=editor)
- [스타일가이드](https://www.figma.com/design/F6PlhpQdOE30IxWbeiMzYz/%ED%86%A0%EC%9D%B4_1%EC%A1%B0_%EC%8A%A4%ED%83%80%EC%9D%BC%EA%B0%80%EC%9D%B4%EB%93%9C?node-id=0-1&node-type=canvas&t=Go6XuTHBmLhSiplz-0)
- [회의록](https://www.notion.so/1213259dc0c2818eadb0e053ca0031d4?v=46e226797ec24187941d21537d1e280a)
- [회고](https://www.notion.so/24-11-01-3e7ea06f465941ffa8774b1d42ee3e0b)

## 🌐 페이지 별 기능

### 로그인&회원가입(승건)

- **회원가입**

  - 회원가입 폼 입력 시 실시간 유효성 검사 진행
  - 회원가입 버튼 클릭 후, 로직이 완료될 때까지 버튼은 비활성화되며 성공 또는 실패 시 다시 활성화

- **로그인**

  - 이메일과 비밀번호 입력 후 로그인 버튼 클릭 시 로직이 완료될 때까지 버튼 비활성화
  - 로그인 실패 시 점검 사항을 에러 메시지로 출력
  - 로그인 성공 시 사용자 승인 상태와 계정 권한 확인(일반 사용자: ‘/’ 경로로 리다이렉트/관리자: ‘/admin’ 경로로 리다이렉트)

### 메인+헤더(샘이)

- **헤더 컴포넌트**

  - 프로필 이미지와 이름 노출
  - 로그아웃 버튼 클릭 시 로그아웃 기능
  - 메뉴 클릭 시 페이지 라우팅
  - Admin 페이지 이동 시 헤더 메뉴 변경

- **초기화면**
  - 프로필 이미지, 이름, 팀, 직급 노출
  - 현재 시간 노출
  - 근무 시작/종료 버튼 클릭 시, 버튼명, 근무 상태, 모달 내용 리렌더링
  - 공지사항 목록 최신 10개 로드, 슬라이드 기능
  - 공지사항 클릭 시 상세 페이지 이동 기능

### 부재 내역 및 신청(주리)

- **초기화면**

  - 부재 신청 기록을 최신 순 정렬하여 표시
  - 부재 내역은 15개 기준으로 표시되며 페이지네이션 이용해 탐색 가능

- **부재 신청 과정**

  - 부재 신청 버튼 클릭 시 팝업 호출
  - 휴가 종류, 일자. 사유 입력은 필수 사항이며, 선택 사항인 증빙자료 업로드 가능
  - 날짜 선택 필드를 이용해 일정 선택 가능 (오늘 기준 과거 날짜 선택 불가 / 주말 제한)
  - 반차인 경우 단일 날짜 선택, 그 외 연차, 병가 등은 시작과 종료일 범위 선택 가능
  - 증빙자료 첨부 시 png, jpg 형식의 5mb 이하 제한되며 크기나 형식에 맞지 않는 경우 경고 메세지 출력
  - 파일이 업로드 되면 파일 첨부 버튼 비활성화 및 파일명 노출

- **부재 신청**

  - 신청 버튼 클릭 시 입력된 내용이 DB에 저장
  - 신청 성공 시 안내 메시지 표기 후 업데이트 된 부재 리스트로 이동

- **부재 신청 확인**

  - 특정 부재 항목을 클릭하는 경우, 상세 정보 팝업 노출
  - 정보에 따라 표시 정보 변경(예: 첨부 파일이 있는 경우 첨부파일/반려된 경우 반려 사유)

- **부재 내역 필터링**
  - 부재 목록 상단에 있는 셀렉트를 통해 특정 부재 유형 선택 시 해당 유형만 표시

### 공지사항(영훈)

- **초기화면**

  - 공지사항 컬렉션에 저장된 정보를 가져와서 표시

- **페이지네이션**

  - 페이지네이션을 통한 게시물 탐색 가능
  - 첫페이지 인 경우 이전 버튼 없음/마지막 페이지인 경우 다음 버튼 없음
  - 페이지 이동 시 쿼리 스트링을 통해 뒤로가기/앞으로가기 가능

- **검색 기능**

  - 검색창에 키워드 입력 시 게시물 필터링 후 검색 결과 출력
  - 일치하는 검색어가 없는 경우 없음 화면 표기 및 쿼리스트링 변경

- **공지사항 상세**
  - 클릭 시 해당하는 공지사항의 상세 페이지를 노출

### 공지사항 관리(승건)

- **초기화면**
  - 공지사항 리스트 출력
- **검색 기능**

  - 검색어 입력 시 제목, 내용, 작성자 일치 여부 확인 후 리스트 표시
  - 검색 결과 없음 시 결과 없음 페이지 표시 및 경로에 `?search=검색어` 추가

- **페이지네이션**

  - 원하는 페이지 번호 클릭 시 해당 데이터 렌더링(`?pagination=페이지번호`)

- **수정/등록/삭제**
  - 수정 할 공지사항 클릭 시 상세 정보로 이동
  - 이미지, 제목, 내용 수정 가능(이미지 미수정 시 기존 이미지로 유지)
  - 로직 진행 중인 경우 수정 및 삭제 버튼 비활성화, 완료 후 DB 업데이트
  - 공지사항 삭제 기능 제공

### 직원 관리(승건)

- **초기화면**

  - 직원 리스트를 스크롤 형태로 확인 가능
  - 상단에서 총 직원 수, 근무중인 직원 수, 승인 대기 중인 직원 수 확인 가능
  - 직원의 정렬 순서는 미승인-근무중-근무중 아님-계정삭제 직원 순이며, 이름 순 정렬

- **직원 상세**

  - 직원 목록에서 특정 직원 클릭 시 해당하는 직원의 상세 페이지 노출
  - 상세 페이지에서는 목록에 제공되는 정보 외에 주소, 연락처 등의 더 다양한 정보를 확인 가능
  - 정보 수정 버튼 클릭 시 직원 정보 수정 팝업 노출

- **직원 정보 수정**
  - 이메일을 제외한 모든 직원 정보를 수정
  - 비밀번호 재설정 메일 발송 가능
  - 계정 승인 및 삭제 가능
