# font-size 정리

**24px 16px 14px 12px 안에서 사용하려 합니다 (12px은 정말 조금 사용)**

- nav (main.css 그대로 사용하시면 됩니다)
  - 회사명 : 24px
  - 메뉴명 : 16px
- 게시판
  - 타이틀(h1) : 24px (bold)
  - 탭, 버튼, 페이지네이션 버튼 : 14px
  - 갤러리 제목 / 자료게시판 표 : 16px
  - 갤러리형 글 요약 : 14px
- 직원 리스팅
  - 타이틀(h1) : 24px (bold)
  - 직원 리스팅 : 16px
- 홈
  - 날짜, 시간, 이름 : 24px (bold)
    이름 → 마이페이지 이름과 동일하게. 더 키운다면 두 페이지 동일하게 맞춰주세요.
  - 게시판 제목, 갤러리 제목 / 자료게시판 목록 : 16px
  - 갤러리형 글 요약 : 14px
  - 간호사(직책), 근무 시작 근무 종료 : 16px
  - 근무 시간 기록 : 14px
  - 근무 중 : 12px
  - 휴진 아이콘 : 14px
  - 휴진 안내 : 24px (bold) - 조절
- 부재 관리
  - 타이틀(h1) : 24px (bold)
  - 부재 신청 / 안내 사항 : 14px
  - 부재 신청 내역 : 16px
    나머지 전부 16 / 14 px 안에서 조절하시고 코멘트 달아주세요.
- 마이 페이지
  - 타이틀(h1) : 24px (bold)
  - 이름 : 24px → 홈과 이름과 동일하게. 더 키운다면 두 페이지 동일하게 맞춰주세요.
  - 근무 시작, 근무 종료, 간호사 : 14px
  - 근무 중 : 12px
  - 입사일, 직급 등의 타이틀 : 16px
  - 2025.1.1, 간호사 등 본인의 내용 : 14px (만약 너무 작으면 16px 통일)

<br/>

# color 정리

- 일반 글씨 : #333
- 옅은 색 글씨 쓸 때 : #666
  저 같은 경우는 갤러리형 게시글의 상세 글에 사용했습니다 (하단 사진 유)
- 강조 / active / 대표색 : **#3a8c8c**
- hover : **#e9f5f5**
- hover 되기 전 버튼의 테두리색 / 갤러리 게시판 테두리색 / 표의 테두리 : **#d2e7e7**

<br/>

# 이벤트 발생, 기본 디자인 틀 정리

### nav 바

- hover 한 경우 활성화된 탭의 배경색(#3a8c8c)으로 글씨색이 바뀜

- active
  ```
  nav > div:not(.logo) > ul > li > a.active {
      background-color: #3a8c8c; /* 수정: 활성화된 버튼 배경색 변경 */
      color: #ffffff; /* 수정: 활성화된 버튼 텍스트 색 변경 */
      border-radius: 6px;
  }
  ```
- hover
  ```
  nav > div:not(.logo) > ul > li > a:hover {
      color: #3a8c8c;
      border-radius: 6px;
  }
  ```

### 이벤트 발생 디자인 종류

아래 리스트에서 편하게 찾아 적용하시면 됩니다.

- tab(게시판 탭), 페이지네이션 버튼 활성화, 부재 신청 게시판의 상단 버튼  
  #333 기본 font 색상에서 active 시 color change
  ```
  .tab-button.active {
  background-color: #3a8c8c; /* 수정: 활성화된 버튼 배경색 변경 */
  color: #ffffff; /* 수정: 활성화된 버튼 텍스트 색 변경 */
  }
- button hover

  ```
  .create-post-button {
      padding: 5px 10px;
      font-size: 14px;
      cursor: pointer;
      border: 1px solid #d2e7e7; /* 수정: 테두리 색상 변경 */
      border-radius: 6px;
      color: #3a8c8c; /* 수정: 텍스트 색상 변경 */
  }

  .create-post-button:hover {
      background-color: #e9f5f5; /* 수정: 버튼 호버 시 배경색 변경 */
      color: #3a8c8c; /* 수정: 텍스트 색상 유지 */
      font-weight: bold; /* 수정 : 두꺼워지게 */
  }
  ```

- 테두리 / 가로선  
  테두리 두께는 본인 디자인 맞춰 해주시면 됩니다.
  ```
  border: 1px solid #d2e7e7;
- 갤러리 카드 디자인  
  제목 색상은 동일하게 #333 (16px bold) 상세 내용은 #666 (14px) 로 조금 옅고 작게
  ```
  /* 카드 제목 */
  .gallery-card .card-title {
    font-size: 16px;
    font-weight: bold;
    color: #333; /_ 수정: 제목 색상 변경 _/
  }

  /* 카드 내용 */
  .gallery-card .card-text {
    font-size: 14px;
    color: #666; /* 수정: 텍스트 색상 유지 */
  }
