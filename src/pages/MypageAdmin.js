import "../styles/mypage.css";

function initializePage() {
  const detailInfoedits = document.querySelectorAll(".detailInfoEdit");
  const disablededitbtn = document.querySelector(".disabledEditBtn");
  const doted = document.querySelectorAll(".dot");

  let isEditing = false;

  detailInfoedits.forEach((input) => {
    const savedValue = localStorage.getItem(input.id);
    if (savedValue) {
      input.value = savedValue;
    }
  });

  if (detailInfoedits && disablededitbtn) {
    disablededitbtn.addEventListener("click", function () {
      if (!isEditing) {
        detailInfoedits.forEach((input) => {
          input.disabled = false;
          input.style.border = "2px solid orangered";
          input.style.transition = "0.6s";
          input.style.color = "black";
          doted.forEach((dot) => {
            dot.classList.add("hide-dot");
            disablededitbtn.value = "저장";
            disablededitbtn.style.transition = "0.6s";
            disablededitbtn.style.width = "5%";
          });
        });
      } else {
        detailInfoedits.forEach((input) => {
          input.disabled = true;
          input.style.border = "2px solid white";
          doted.forEach((dot) => {
            dot.classList.remove("hide-dot");
            disablededitbtn.value = "개인정보 수정";
            disablededitbtn.style.width = "8vw";

            localStorage.setItem(input.id, input.value);
          });
        });
      }

      isEditing = !isEditing;
    });
  }
}

export default function myPage() {
  window.goBack = function () {
    window.history.go(-1);
  };

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

    if (uploadBtn) uploadBtn.style.display = "block";

    if (placeholder) {
      placeholder.style.display = "flex";
    }
  };

  setTimeout(() => {
    initializePage();
  }, 100);

  return `
  <div class="ccc">
  <div class="myPageContainer">
  <div class="headerWrap">
  <h1 class="myPage-title">마이페이지</h1>
  <input class="back" type="button" value="뒤로가기" onClick="goBack()">
  <input class="disabledEditBtn" type="button" value="개인정보 수정">
  </div>
  
  <div class="myPageHeader">
    <div class="nurseImageIcon">
      <input type="file" id="imageUpload" accept="image/*" style="display: none" onchange="window.handleFileSelect(event)"/>
      
      <div class="image-preview">
        <div id="placeholder" class="placeholder">
          <span>이미지 없음</span>
        </div>
        
        <img id="preview-image" alt="프로필 이미지" class="profile-image" style="display: none"/>
      </div>
      
      <div class="button-container">
        <button id="uploadBtn" class="upload-btn" onclick="window.onUploadButtonClick()">
          <i class="material-icons edit">edit</i>
        </button>
        <button onclick="window.deleteImage()" id="delete-btn" class="delete-btn" style="display: none">
          <i class="material-icons">delete</i>
        </button>
      </div>
    </div>

    <ul class="nurseInfo">
      <li class="nurseName">코깎장</li>
      <li class="nurseLank">간호사</li>
      <li class="nurseWorking">근무중</li>
    </ul>

    <div class="workTime">
      <div class="dutyStart">
        근무시작
        <div class="startTime">09:00</div>
      </div>
      <div class="dutyFinish">
        근무종료
        <div class="finishTime">00:00</div>
      </div>
    </div>
  </div>

  <div class="info">
    <ul class="firstDate">
      <li class="dataOfJoining">
        <div class="infoWrap">
          입사일
          <span class="dot">
            <input class="detailInfoEdit" id="dataOfJoining" type="text" disabled value="2025.1.1   /  신입 간호사로 입사">
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
            <input class="detailInfoEdit" id="email" type="text" disabled value="fastcamp@kdt.com">
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
