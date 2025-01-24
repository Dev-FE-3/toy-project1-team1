import "../styles/mypageAdm.css";

// DOM이 완전히 로드된 후에 초기화
function initializePage() {
  const detailInfoedits = document.querySelectorAll(".detailInfoEdit");
  const disablededitbtn = document.querySelector(".disabledEditBtn");
  const doted = document.querySelectorAll(".dot");

  detailInfoedits.forEach((input) => {
    const savedValue = localStorage.getItem(input.id);
    if (savedValue) {
      input.value = savedValue;
    }
  });

  let isEditing = false;

  if (detailInfoedits && disablededitbtn) {
    disablededitbtn.addEventListener("click", function () {
      if (!isEditing) {
        // 수정모드가 꺼져 있을때 실행 // 이제 킬거임.
        // 각 input 의 스타일변경
        detailInfoedits.forEach((input) => {
          input.disabled = false;
          input.readOnly = false;
          input.style.color = "#666";
          input.style.borderColor = "#3a8c8c";
          input.style.backgroundColor = "#e9f5f5";
        });

        // dot 숨기기
        doted.forEach((dot) => {
          dot.classList.add("hide-dot");
        });

        // 버튼 스타일 변경

        disablededitbtn.value = "저장";
        disablededitbtn.style.color = "#3a8c8c";
        disablededitbtn.style.display = "block";
        disablededitbtn.style.transition = "0.6s";
        disablededitbtn.style.width = "5%";
      } else {
        // 수정모드가 켜져 있을때 실행 // 이제 끌거임
        detailInfoedits.forEach((input) => {
          input.readOnly = true;
          input.disabled = true;
          input.style.borderColor = "transparent";
          localStorage.setItem(input.id, input.value);
        });

        // 버튼 스타일 원복
        disablededitbtn.value = "개인정보 수정";
        disablededitbtn.style.width = "8vw";
        disablededitbtn.style.backgroundColor = "#fff";
        // disablededitbtn.style.color = "#3a8c8c";

        disablededitbtn.onmouseenter = () => {
          disablededitbtn.style.backgroundColor = "#e9f5f5";
        };
        disablededitbtn.onmouseleave = () => {
          disablededitbtn.style.backgroundColor = "#fff";
        };

        // dot 보이기
        doted.forEach((dot) => {
          dot.classList.remove("hide-dot");
        });
      }

      isEditing = !isEditing;
    });
  }
}

export default function myPageAdm_1() {
  // 전페이지로 이동
  // window.goBack = function () {
  //   window.history.go(-1);
  // };
  //   <input class="back" type="button" value="뒤로가기" onClick="goBack()">

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
  <div class="myPageContainers admin-page"> 
  <div class="myPageContainer">
  <div class="headerWrap">
  <h1 class="myPage-title">마이페이지</h1>
  <input class="disabledEditBtn" type="button" value="개인정보 수정">
  </div>

  <div class="myPageHeader">
    <div class="nurseImageIcon">
      <input type="file" id="imageUpload" accept="image/*" style="display: none" onchange="window.handleFileSelect(event)"/>

      <div class="image-preview">
        <div id="placeholder" class="placeholder">
          <span>이미지 없음</span>
        </div>
         <img src="/src/image/staff-1.jpg" id="preview-image" alt="프로필 이미지" class="profile-image"/>
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
      <li class="nurseName">우미연</li>
      <li class="nurseLank">원장</li>
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

  <div class="infoContainer">
  <div class="info">
    <ul class="firstDate">
      <li class="dataOfJoining">
        <div class="infoWrap">
          입사일
          <span class="dot">
            <input class="detailInfoEdit" id="dataOfJoining" type="text" disabled value="2021.03.21">
          </span>
        </div>
      </li>
      <li class="rank">
        <div class="infoWrap">
          직급
          <span class="dot">
            <input class="detailInfoEdit" id="rank" type="text" disabled value="원장">
          </span>
        </div>
      </li>
      <li class="email">
        <div class="infoWrap">
          이메일
          <span class="dot">
            <input class="detailInfoEdit" id="email" type="text" disabled value="woomiyeon@naver.com">
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
              <input class="detailInfoEdit" id="phoneNumber" type="text" disabled value="010-2847-9365">
            </span>
          </div>
        </div>
      </li>
      <li class="HomeAddress">
        <div class="infoUnderline">
          자택주소
          <div class="infoWrap">
            <span class="dot">
              <input class="detailInfoEdit" id="HomeAddress" type="text" disabled value="경기도 성남시 북창로 12">
            </span>
          </div>
        </div>
      </li>
      <li class="birthDate">
        <div class="infoUnderline">
          생년월일
          <div class="infoWrap">
            <span class="dot">
              <input class="detailInfoEdit" id="birthDate" type="text" disabled value="1980.01.01">
            </span>
          </div>
        </div>
      </li>
    </ul>
    </div>
  </div>
</div>
</div>
`;
}
