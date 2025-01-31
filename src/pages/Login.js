import "/src/styles/login.css";

// 유효성 검사 규칙 정의
const validators = {
  signUPid: (value) => {
    return value.length >= 4 && value.length <= 20;
  },
  signUPpassword: (value, form) => {
    // 비밀번호 value 를 비밀번호 확인 value 와 비교
    const passwordCheck = form.querySelector('[name="signUPpasswordck"]').value;
    return value.length >= 8 && value === passwordCheck;
  },
  signUPpasswordck: (value, form) => {
    // 비밀번호 확인 value 를 비밀번호 value 와 비교
    const password = form.querySelector('[name="signUPpassword"]').value;
    return value.length >= 8 && value === password;
  },
  signUPbirthdate: (value) => {
    const birthdatePattern = /^\d{4}-\d{2}-\d{2}$/;
    return birthdatePattern.test(value);
  },
  signUPphonenumber: (value) => {
    const phonePattern = /^\d{3}-\d{4}-\d{4}$/;
    return phonePattern.test(value);
  },
  signUPaddress: (value) => {
    return value.trim().length > 0;
  },
  signUPemail: (value) => {
    // 이메일 주소 검증
    // [^\s@]+ - 공백이나 @ 문자가 아닌 문자가 1개 이상
    // @ - @ 문자 하나
    // [^\s@]+ - 다시 공백이나 @ 문자가 아닌 문자가 1개 이상
    // . - 점(.) 문자 하나
    // [^\s@]+ - 마지막으로 공백이나 @ 문자가 아닌 문자가 1개 이상
    // $ - 문자열의 끝
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  },
};

// 필드 검증 함수
const validateField = (input, form) => {
  // validators 의 속성에 접근하기 위해 대괄호 사용
  if (!validators[input.name]) return true; // 검증 규칙이 없는 필드는 통과
  const isValid = validators[input.name](input.value, form);
  0;
  input.style.borderColor = isValid ? "" : "red"; // 유효하지 않으면 테두리 red
  return isValid;
};

const toggleActiveBtn = (e) => {
  document.querySelectorAll(".LoginBtnWrap span").forEach((btn) => {
    btn.classList.remove("btnActive");
  });
  e.target.classList.add("btnActive");
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

  const form = document.querySelector(".signUp");

  document.querySelectorAll(".login-modal-box input").forEach((input) => {
    input.addEventListener("blur", (e) => {
      validateField(e.target, form);
    });

    const passwordInput = document.querySelector('[name="signUPpassword"]');
    const passwordCheckInput = document.querySelector(
      '[name="signUPpasswordck"]',
    );

    if (passwordInput && passwordCheckInput) {
      // 공통 검증 로직을 함수로 분리
      const PasswordMatch = () => {
        const isValid =
          passwordInput.value.length >= 8 &&
          passwordCheckInput.value.length >= 8 &&
          passwordInput.value === passwordCheckInput.value;

        if (isValid) {
          resetColor(passwordInput);
          resetColor(passwordCheckInput);
        } else {
          // 비밀번호가 8자 이상이면 비밀번호 입력창은 정상 처리
          if (passwordInput.value.length >= 8) {
            resetColor(passwordInput);
          }
          // 비밀번호 확인창에 값이 있으면 유효성 검사
          if (passwordCheckInput.value) {
            validateField(passwordCheckInput, form);
          }
        }
      };

      // 두 입력 필드 모두에 같은 검증 함수 적용
      passwordInput.addEventListener("input", PasswordMatch);
      passwordCheckInput.addEventListener("input", PasswordMatch);
    }
    input.addEventListener("input", (e) => {
      e.target.style.borderColor = "";
    });
  });

  document
    .querySelector('[name="signUPid"]')
    ?.addEventListener("input", (e) => {
      if (e.target.value.length >= 4 && e.target.value.length <= 20) {
        resetColor(e.target); // 기본 테두리 색상으로 복원
      }
    });

  const handleInput = (e) => {
    if (e.target.value) {
      resetColor(e.target);
    }
  };

  document
    .querySelectorAll(
      '[name="signUPbirthdate"],[name="signUPaddress"],[name="signUPemail"]',
    )
    .forEach((element) => element.addEventListener("input", handleInput));

  document
    .querySelector('[name="signUPphonenumber"]')
    ?.addEventListener("input", (e) => {
      const phonePattern = /^\d{3}-\d{4}-\d{4}$/;
      if (phonePattern.test(e.target.value)) {
        resetColor(e.target);
      }
    });

  const resetInputValue = (idInput, pwInput) => {
    idInput.value = "";
    pwInput.value = "";
  };

  if (idInput && pwInput) {
    resetInputValue(idInput, pwInput);
  }

  staffLoginBtn?.addEventListener("click", () => {
    window.localStorage.setItem("user", "staff");
    if (idInput && pwInput) {
      resetInputValue(idInput, pwInput);
    }
  });

  managerLoginBtn?.addEventListener("click", () => {
    window.localStorage.setItem("user", "manager");
    if (idInput && pwInput) {
      resetInputValue(idInput, pwInput);
    }
  });

  window.addEventListener("beforeunload", () => {
    if (idInput && pwInput) {
      resetInputValue(idInput, pwInput);
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

  const loginBgModal = document.getElementById("login-bg-modal");

  signUpBtn?.addEventListener("click", () => {
    loginBgModal.style.display = "block";
    resetSignUpForm();
  });

  closeBtn?.addEventListener("click", () => {
    loginBgModal.style.display = "none";
    resetSignUpForm();
  });

  signUpForm?.addEventListener("click", () => {
    signUp();
  });
};

const signUp = () => {
  const form = document.querySelector(".signUp");
  if (!form) return;

  let isValid = true;

  // 모든 필드 검증
  form.querySelectorAll("input").forEach((input) => {
    if (!validateField(input, form)) {
      isValid = false;
    }
  });

  if (!isValid) {
    alert("입력한 정보를 다시 확인해주세요");
    return;
  }

  if (isValid) {
    alert("회원가입이 완료 되었습니다");
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
    alert("아이디 혹은 비밀번호를 확인해주세요");
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
