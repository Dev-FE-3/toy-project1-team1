import "../styles/mypage.css";
import { localStorageUtil } from "../util/LocalStorageUtil.js";
import { STORAGE_KEYS, WORK_STATE } from "../constants/storageConstants.js";

function initializePage() {
  const detailInfoedits = document.querySelectorAll(".detailInfoEdit");
  const disablededitbtn = document.querySelector(".disabledEditBtn");

  detailInfoedits.forEach((input) => {
    const savedValue = localStorageUtil.get(input.id);
    if (savedValue) {
      input.value = savedValue;
    }
  });
  let isEditing = false;
  if (detailInfoedits && disablededitbtn) {
    disablededitbtn.addEventListener("click", function () {
      isEditing = !isEditing;
      if (!isEditing) {
        detailInfoedits.forEach((input) => {
          input.disabled = false;
          input.readOnly = false;
          input.style.color = "#666";
          input.style.borderColor = "#3A8C8C";
          input.style.backgroundColor = "#E9F5F5";
        });
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot) => {
          dot.style.visibility = "hidden";
        });
        disablededitbtn.value = "저장";
        disablededitbtn.style.width = "80px";
        disablededitbtn.style.transition = "0.6s";
      } else {
        detailInfoedits.forEach((input) => {
          input.readOnly = true;
          input.disabled = true;
          input.style.borderColor = "transparent";
          input.style.backgroundColor = "#fff";
          localStorageUtil.set(input.id, input.value);
        });
        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot) => {
          dot.style.visibility = "visible";
        });
        disablededitbtn.value = "개인정보 수정";
        disablededitbtn.style.width = "8vw";
        disablededitbtn.style.backgroundColor = "#fff";
        disablededitbtn.onmouseenter = () => {
          disablededitbtn.style.backgroundColor = "#E9F5F5";
        };
        disablededitbtn.onmouseleave = () => {
          disablededitbtn.style.backgroundColor = "#fff";
        };
      }
    });
  }
  isEditing = !isEditing;
}
export default function myPage() {
  window.goBack = function () {
    window.history.go(-1);
  };
  // localStorge를 활용한 근무 시간 변경
  const isWorking =
    localStorageUtil.get(STORAGE_KEYS.WORK_STATE) === WORK_STATE.WORKING;
  const updateState = () => {
    if (window.location.pathname === "/my-page") {
      const startTime = localStorageUtil.get(STORAGE_KEYS.START_TIME);
      const endTime = localStorageUtil.get(STORAGE_KEYS.END_TIME);
      document.getElementById("startWork").textContent = startTime;
      document.getElementById("finishWork").textContent = endTime;
      document.querySelector(".nurseWorking").textContent = isWorking
        ? "근무 중"
        : "근무 전";
      document.querySelector(".state-icon").style.backgroundColor = isWorking
        ? "#3a8c8c"
        : "#d2e7e7";
    }
  };
  // * 이미지 업로드 버튼 클릭 시 실행되는 함수
  // * 파일 선택을 위한 input 요소를 동적으로 생성하고 클릭 이벤트를 발생시킴
  window.onUploadButtonClick = function () {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = window.handleFileSelect;
    input.click();
  };
  window.handleFileSelect = function (event) {
    const files = event.target.files;
    if (!files) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const previewImage = document.getElementById("preview-image");
      const deleteBtn = document.getElementById("delete-btn");
      const placeholder = document.getElementById("placeholder");
      const uploadBtn = document.querySelector(".upload-btn");
      if (previewImage && e.target) {
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
        if (deleteBtn) deleteBtn.style.display = "block";
        if (placeholder) placeholder.style.display = "none";
        if (uploadBtn) uploadBtn.style.display = "none";
      }
    };
    reader.readAsDataURL(file);
  };
  window.deleteImage = function () {
    const previewImage = document.getElementById("preview-image");
    const deleteBtn = document.getElementById("delete-btn");
    const placeholder = document.getElementById("placeholder");
    const uploadBtn = document.querySelector(".upload-btn");
    if (previewImage) {
      previewImage.src = "";
      previewImage.style.display = "none";
    }
    if (deleteBtn) {
      deleteBtn.style.display = "none";
    }
    if (uploadBtn) {
      uploadBtn.style.display = "block";
    }
    if (placeholder) {
      placeholder.style.display = "flex";
    }
  };
  setTimeout(() => {
    updateState();
  }, 0);
  return `
  <div class="myPageContainer">
  <div class="headerWrap">
  <h1 class="myPage-title">마이페이지</h1>
  </div>
  <div class="myPageHeader">
    <div class="nurseImageIcon">
  <label for="imageUpload">
      <input type="file" id="imageUpload" accept="image/*" style="display: none" onchange="window.handleFileSelect(event)"/>
      <div class="image-preview">
        <img id="placeholder" class="placeholder" ><div class="imageNone">이미지 없음</div>
        <img src="./src/image/staff-2.jpg" id="preview-image" class="profile-image" />
      </div>
 <div class="button-container">
        <button id="uploadBtn" class="upload-btn" onclick="window.onUploadButtonClick()">
          <i class="material-icons edit">edit</i>
        </button>
        <button onclick="window.deleteImage()" id="delete-btn" class="delete-btn" style="display: none">
          <i class="material-icons">delete</i>
        </button>
      </div>
    </label>
    </div>
    <div class="nurseInfo">
      <p class="nurseName">차주현</p>
      <p class="nurseLank">간호사</p>
      <div class="nurseWorking-box"><div class="state-icon"></div><div class="nurseWorking"></div></div>
    </div>

    <div class="workTime">
      <div class="dutyStart">
        근무시작
        <div id="startWork">09 : 00</div>
      </div>
      <div class="dutyFinish">
        근무종료
        <div id="finishWork">00 : 00</div>
      </div>
    </div>
  </div>
   <div class="infoContainer">
  <div class="info">
    <ul class="firstDate">
      <li class="dataOfJoining">
        <div class="infoWrap">
          입사일
          <span class="dot">
            <input class="detailInfoEdit" id="dataOfJoining" type="text" disabled value="2025.01.01">
          </span>
        </div>
      </li>
      <li class="rank">
        <div class="infoWrap">
          직급
          <span class="dot">
            <input class="detailInfoEdit" id="rank" type="text" disabled value="간호사">
          </span>
        </div>
      </li>
      <li class="email">
        <div class="infoWrap">
          이메일
          <span class="dot">
            <input class="detailInfoEdit" id="email" type="text" disabled value="chajuhyun@naver.com">
          </span>
        </div>
      </li>
    </ul>
  </div>
  <div class="info">
    <ul class="secondDate">
      <li class="phoneNumber">
        <div class="infoUnderline">
          전화번호
          <div class="infoWrap">
            <span class="dot">
              <input class="detailInfoEdit" id="phoneNumber" type="text" disabled value="010-2721-9932">
            </span>
          </div>
        </div>
      </li>
      <li class="HomeAddress">
        <div class="infoUnderline">
          자택주소
          <div class="infoWrap">
            <span class="dot">
              <input class="detailInfoEdit" id="HomeAddress" type="text" disabled value="부산광역시 해운대구 우동 23번길">
            </span>
          </div>
        </div>
      </li>
      <li class="birthDate">
        <div class="infoUnderline">
          생년월일
          <div class="infoWrap">
            <span class="dot">
              <input class="detailInfoEdit" id="birthDate" type="text" disabled value="2000.01.01">
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
  </div>
</div>
`;
}
