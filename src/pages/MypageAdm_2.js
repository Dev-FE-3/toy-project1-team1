import "../styles/mypageAdm.css";

export default function myPageAdm_2() {
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
          // 수정모드가 꺼져 있을때 실행
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
          // 수정모드가 켜져 있을때 실행
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
         <img src="/src/image/staff-2.jpg"  id="preview-image" alt="프로필 이미지" class="profile-image"/>
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
      <li class="nurseName">차주현</li>
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

  <div class="infoContainer">
  <div class="info">
    <ul class="firstDate">
      <li class="dataOfJoining">
        <div class="infoWrap">
          입사일
          <span class="dot">
            <input class="detailInfoEdit" id="employee2_dataOfJoining" type="text" disabled value="2025.01.01">
          </span>
        </div>
      </li>
      <li class="rank">
        <div class="infoWrap">
          직급
          <span class="dot">
            <input class="detailInfoEdit" id="employee2_rank" type="text" disabled value="간호사">
          </span>
        </div>
      </li>
      <li class="email">
        <div class="infoWrap">
          이메일
          <span class="dot">
            <input class="detailInfoEdit" id="employee2_email" type="text" disabled value="chajuhyun@naver.com">
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
              <input class="detailInfoEdit" id="employee2_phoneNumber" type="text" disabled value="010-2721-9932">
            </span>
          </div>
        </div>
      </li>
      <li class="HomeAddress">
        <div class="infoUnderline">
          자택주소
          <div class="infoWrap">
            <span class="dot">
              <input class="detailInfoEdit" id="employee2_HomeAddress" type="text" disabled value="부산광역시 해운대구 우동 23번길">
            </span>
          </div>
        </div>
      </li>
      <li class="birthDate">
        <div class="infoUnderline">
          생년월일
          <div class="infoWrap">
            <span class="dot">
              <input class="detailInfoEdit" id="employee2_birthDate" type="text" disabled value="2000.01.01">
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
