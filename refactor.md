## Refactor 내용

### NavBar

- 불필요한 삼항연산자 제거

### TimeUtil.js

- 비즈니스 로직 제거

### 변수명

- 역할에 맞게 수정
- mng, admin 혼재 ⇒ 하나로 통일

### absence mng

- 모든 엘리먼트 요소에 if문
  - 돔 요소가 없다는 오류가 뜨는 것을 해결하는 차원에서 작성
- 옵션널 체이닝 사용해보는 것은 어떨까

### BoradDataCreate.js

- early return
- 입력이 안되었을 때 submit 함수가 실행될 수 없게 disable

### active util

- active 내용이 겹치니 util화 해보기

### 불필요한 코드, 파일 삭제하기
