import "/src/styles/login.css";
import { html } from "lit-html";

// 버튼 활성화 상태를 토글하는 함수
const toggleActiveBtn = (e) => {
  // 모든 버튼에서 btnActive 클래스 제거
  document.querySelectorAll(".LoginDecoration span").forEach((btn) => {
    btn.classList.remove("btnActive");
  });

  // 클릭된 버튼에 btnActive 클래스 추가
  e.target.classList.add("btnActive");
};

// 페이지가 마운트된 후 이벤트 리스너 추가
setTimeout(() => {
  // 직원으로 로그인 버튼 선택
  const staffBtn = document.querySelector(".staff");

  // 관리자로 로그인 버튼 선택
  const managerBtn = document.querySelector(".manager");

  // 직원 로그인 버튼 클릭 이벤트 추가
  staffBtn?.addEventListener("click", toggleActiveBtn);

  // 관리자 로그인 버튼 클릭 이벤트 추가
  managerBtn?.addEventListener("click", toggleActiveBtn);
}, 0);

export default function login() {
  return `

   <div class="container">
  <!-- left side -->
  <div class="leftSide"></div>

  <!-- login wrap -->
  <div class="loginWrap">
    <header>
      <div class="HospitalTitle">코드깎는 정형외과</div>
    </header>

    <!-- staff, manager login -->

    <div class="LoginDecoration">
      <span class="staff btnActive">직원으로 로그인</span>
      <span class="manager">관리자로 로그인</span>
    </div>

    <!-- id, password -->
    <div class="login">
      <div class="idContainer">
        <input class="idText" type="text" placeholder="아이디" />
      </div>
      <div class="pwContainer">
        <input class="pwText" type="password" placeholder="비밀번호" />
      </div>
    </div>

    <!-- login button -->
    <div class="loginBtnContainer">
      <button class="loginBtn" onClick="">로그인</button>
    </div>
  </div>
</div>
`;
}
