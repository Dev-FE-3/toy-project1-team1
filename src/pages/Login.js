import "/src/styles/login.css";

const toggleActiveBtn = (e) => {
  document.querySelectorAll(".LoginBtnWrap span").forEach((btn) => {
    btn.classList.remove("btnActive");
  });
  e.target.classList.add("btnActive");
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

const checkUser = () => {
  if (!document.querySelector(".idText")) {
    return; // DOM이 준비되지 않았으면 함수 종료
  }

  const idInput = document.querySelector(".idText");
  const pwInput = document.querySelector(".pwText");
  const staffLoginBtn = document.querySelector(".staffLoginBtn");
  const managerLoginBtn = document.querySelector(".managerLoginBtn");
  const signUpBtn = document.querySelector(".signUpBtn");
  const closeBtn = document.querySelector(".signModalClose");
  const signUpForm = document.querySelector(".loginModalConfirm");

  const resetColor = (element) => {
    element.style.borderColor = "";
  };

  document
    .querySelector('[name="signUPid"]')
    ?.addEventListener("input", (e) => {
      if (e.target.value.length >= 4 && e.target.value.length <= 20) {
        resetColor(e.target); // 기본 테두리 색상으로 복원
      }
    });

  document
    .querySelector('[name="signUPbirthdate"]')
    ?.addEventListener("input", (e) => {
      if (e.target.value) {
        resetColor(e.target);
      }
    });

  document
    .querySelector('[name="signUPphonenumber"]')
    ?.addEventListener("input", (e) => {
      const phonePattern = /^\d{3}-\d{4}-\d{4}$/;
      if (phonePattern.test(e.target.value)) {
        resetColor(e.target);
      }
    });

  document
    .querySelector('[name="signUPaddress"]')
    ?.addEventListener("input", (e) => {
      if (e.target.value) {
        resetColor(e.target);
      }
    });

  document
    .querySelector('[name="signUPemail"]')
    ?.addEventListener("input", (e) => {
      if (e.target.value) {
        resetColor(e.target);
      }
    });

  if (idInput && pwInput) {
    idInput.value = "";
    pwInput.value = "";
  }

  staffLoginBtn?.addEventListener("click", () => {
    window.localStorage.setItem("user", "staff");
    if (idInput && pwInput) {
      idInput.value = "";
      pwInput.value = "";
    }
  });

  managerLoginBtn?.addEventListener("click", () => {
    window.localStorage.setItem("user", "manager");
    if (idInput && pwInput) {
      idInput.value = "";
      pwInput.value = "";
    }
  });

  window.addEventListener("beforeunload", () => {
    if (idInput && pwInput) {
      idInput.value = "";
      pwInput.value = "";
      localStorage.removeItem("loginId");
      localStorage.removeItem("loginPw");
    }
  });

  const resetSignUpForm = () => {
    const inputs = document.querySelectorAll(".login-modal-box input");
    inputs.forEach((item) => {
      item.value = "";
      item.style.borderColor = "";
    });
  };
  signUpBtn?.addEventListener("click", () => {
    document.getElementById("login-bg-modal").style.display = "block";
    resetSignUpForm();
  });

  closeBtn?.addEventListener("click", () => {
    document.getElementById("login-bg-modal").style.display = "none";
    resetSignUpForm();
  });

  signUpForm?.addEventListener("click", () => {
    signUp();
  });
};

let isValid = false;

const signUp = () => {
  let isValid = true;

  const borderColorChange = (...elements) => {
    elements.forEach((element) => (element.style.borderColor = "red"));
  };

  // 모든 필드의 유효성 검사 실행
  const idInput = document.querySelector('[name="signUPid"]');
  if (idInput.value.length < 4 || idInput.value.length > 20) {
    idInput.style.borderColor = "red";
    isValid = false;
  }

  const password = document.querySelector('[name="signUPpassword"]');
  const passwordCheck = document.querySelector('[name="signUPpasswordck"]');
  if (
    !password.value ||
    !passwordCheck.value ||
    password.value !== passwordCheck.value ||
    password.value.length < 8
  ) {
    borderColorChange(password, passwordCheck);
    isValid = false;
  }

  const birthdate = document.querySelector('[name="signUPbirthdate"]');
  const birthdatePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!birthdatePattern.test(birthdate.value)) {
    borderColorChange(birthdate);
    isValid = false;
  }

  const phone = document.querySelector('[name="signUPphonenumber"]');
  const phonePattern = /^\d{3}-\d{4}-\d{4}$/;
  if (!phonePattern.test(phone.value)) {
    borderColorChange(phone);
    isValid = false;
  }

  const address = document.querySelector('[name="signUPaddress"]');
  if (!address.value) {
    borderColorChange(address);
    isValid = false;
  }

  const email = document.querySelector('[name="signUPemail"]');
  if (!email.value) {
    borderColorChange(email);
    isValid = false;
  }

  // 유효성 검사가 실패한 경우, input 이벤트에 대한 실시간 검사 추가
  if (!isValid) {
    // 비밀번호 실시간 검사
    [password, passwordCheck].forEach((input) => {
      input.addEventListener("input", () => {
        if (
          password.value.length >= 8 &&
          password.value === passwordCheck.value
        ) {
          password.style.borderColor = "";
          passwordCheck.style.borderColor = "";
        }
      });
    });

    alert("입력한 정보를 다시 확인해주세요");
    return;
  }

  // 모든 검증을 통과하면 모달 닫기
  document.getElementById("login-bg-modal").style.display = "none";
  resetSignUpForm();
};

window.loginValid = function () {
  const idInput = document.querySelector(".idText").value;
  const pwInput = document.querySelector(".pwText").value;

  if (!idInput || !pwInput) {
    alert("아이디와 비밀번호를 모두 입력해주세요");
    return;
  }

  const isIdValid = idInput.length >= 4 && idInput.length <= 20;
  const isPwValid = pwInput.length >= 8;

  if (!isIdValid || !isPwValid) {
    alert(
      "아이디 혹은 비밀번호를 확인해주세요. 아이디는 4자 이상 20자 이하, 비밀번호는 최소 8글자 이상이어야 합니다",
    );
    return;
  }

  const staffLoginBtn = document.querySelector(".staffLoginBtn");
  const managerLoginBtn = document.querySelector(".managerLoginBtn");

  if (staffLoginBtn && staffLoginBtn.style.display !== "none") {
    window.location.href = "/home";
  } else if (managerLoginBtn && managerLoginBtn.style.display !== "none") {
    window.location.href = "/staff-info";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === "/") setTimeout(init, 0);
  setTimeout(checkUser, 0);
});

export default function login() {
  return `
<div id="login-bg-modal">
  <div class="login-modal">
    <form class="signUp" onsubmit="return false;">
      <!-- form 태그 추가 -->
      <div class="login-modal-box">
        <div class="login-modal-system_msg">회원가입</div>

        <label for="signUPid">
          아이디
          <input
            type="text"
            id="signUPid"
            name="signUPid"
            required
            minlength="4"
            maxlength="20"
            placeholder="4자 이상 20자 이하여야 합니다"
          />
        </label>
        <label for="signUPpassword">
          비밀번호
          <input
            type="password"
            id="signUPpassword"
            name="signUPpassword"
            required
            minlength="8"
            placeholder="최소 8글자 이상이어야 합니다"
          />
        </label>
        <label for="signUPpasswordck">
          비밀번호 확인
          <input
            type="password"
            id="signUPpasswordck"
            name="signUPpasswordck"
            required
            minlength="8"
            placeholder="비밀번호가 일치해야 합니다"
          />
        </label>
        <label for="signUPbirthdate">
          생년월일
          <input
            type="text"
            id="signUPbirthdate"
            name="signUPbirthdate"
            placeholder="YYYY-MM-DD"
            required
          />
        </label>
        <label for="signUPphonenumber">
          전화번호
          <input
            type="tel"
            id="signUPphonenumber"
            name="signUPphonenumber"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            placeholder="000-0000-0000"
            required
          />
        </label>
        <label for="signUPaddress">
          주소
          <input type="text" id="signUPaddress" name="signUPaddress" required />
        </label>
        <label for="signUPemail">
          이메일
          <input
            type="text"
            id="signUPemail"
            name="signUPemail"
            placeholder="bonecut@hello.com"
            required
          />
        </label>
      </div>

      <div class="signUpBtnWrap">
        <button type="button" class="loginModalConfirm">회원가입</button> 
        <button type="closeBtn" class="signModalClose">닫기</button>
      </div>
    </form>
  </div>
</div>


<div class="container">
  <!-- left side -->
  <div class="leftSide">
    <img src="src/image/hospital-main.jpg" alt="병원이미지" />
  </div>

  <div class="loginWrap">
    <header>
      <div class="HospitalTitle">코드깎는 정형외과</div>
    </header>

    <!-- staff, manager login -->

    <div class="LoginBtnWrap">
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
      <button class="staffLoginBtn" onclick="loginValid()">
        직원으로 로그인
      </button>
        <button
        class="managerLoginBtn"
        onclick="loginValid()"
      >
        관리자로 로그인
      </button>
    </div>

    <!-- sign up -->
    <button class="signUpBtn">회원가입</button>
  </div>
</div>

  `;
}
