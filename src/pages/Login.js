import "/src/styles/login.css";

const toggleActiveBtn = (e) => {
  document.querySelectorAll(".LoginDecoration span").forEach((btn) => {
    btn.classList.remove("btnActive");
  });
  e.target.classList.add("btnActive");
};

const toggleLoginButtons = (type) => {
  const staffLoginBtn = document.querySelector(".staffLoginBtn");
  const managerLoginBtn = document.querySelector(".managerLoginBtn");

  if (type === "staff") {
    staffLoginBtn.style.display = "block";
    managerLoginBtn.style.display = "none";
  } else {
    staffLoginBtn.style.display = "none";
    managerLoginBtn.style.display = "block";
  }
};

const init = () => {
  const staffBtn = document.querySelector(".staff");
  const managerBtn = document.querySelector(".manager");

  staffBtn?.addEventListener("click", (e) => {
    toggleActiveBtn(e);
    toggleLoginButtons("staff");
  });

  managerBtn?.addEventListener("click", (e) => {
    toggleActiveBtn(e);
    toggleLoginButtons("manager");
  });

  toggleLoginButtons("staff");
};

export default function login() {
  setTimeout(init, 0);

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
       <button class="staffLoginBtn" onclick="window.location.href='/home'">직원으로 로그인</button>
       <button class="managerLoginBtn" onclick="window.location.href='/staff-info'">관리자로 로그인</button> 
       </div>
  </div>
</div>
`;
}
