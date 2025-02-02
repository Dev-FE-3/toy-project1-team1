import "../styles/mypageAdm.css";

export default function myPageAdm_1() {
  // DOM이 완전히 로드된 후에 초기화
  function initializePage() {
    const detailInfoEdit = document.querySelectorAll(".detailInfoEdit");
    const disabledEditBtn = document.querySelector(".disabledEditBtn");
    const dots = document.querySelectorAll(".dot");

    detailInfoEdit.forEach((input) => {
      const savedValue = localStorage.getItem(input.id);
      if (savedValue) {
        input.value = savedValue;
      }
    });

    let isEditing = false;

    if (detailInfoEdit && disabledEditBtn) {
      disabledEditBtn.addEventListener("click", function () {
        if (!isEditing) {
          // 수정모드가 꺼져 있을때 실행
          // 각 input 의 스타일변경
          detailInfoEdit.forEach((input) => {
            input.disabled = false;
            input.readOnly = false;
            Object.assign(input.style, {
              color: "#666",
              borderColor: "#3a8c8c",
              backgroundColor: "#e9f5f5",
            });
          });

          // dot 숨기기
          dots.forEach((dot) => {
            dot.classList.add("hide-dot");
          });

          // 버튼 스타일 변경
          Object.assign(disabledEditBtn.style, {
            color: "#3a8c8c",
            display: "block",
            width: "5%",
            transition: "0.2s",
          });
          disabledEditBtn.value = "저장";
        } else {
          // 수정모드가 켜져 있을때 실행
          detailInfoEdit.forEach((input) => {
            input.readOnly = true;
            input.disabled = true;
            Object.assign(input.style, {
              borderColor: "transparent",
              backgroundColor: "#fff",
            });
            localStorage.setItem(input.id, input.value);
          });
          // 버튼 스타일 원복
          Object.assign(disabledEditBtn.style, {
            width: "8vw",
            backgroundColor: "#fff",
          });
          disabledEditBtn.value = "개인정보 수정";
          disabledEditBtn.onmouseenter = () => {
            disabledEditBtn.style.backgroundColor = "#e9f5f5";
          };
          disabledEditBtn.onmouseleave = () => {
            disabledEditBtn.style.backgroundColor = "#fff";
          };

          // dot 보이기
          dots.forEach((dot) => {
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
        <img src="/src/image/staff-3.jpg"  id="preview-image" alt="프로필 이미지" class="profile-image"/>
      </div>
      
      
    </div>

    <ul class="nurseInfo">
      <li class="nurseName">방소라</li>
      <li class="nurseLank">원무과</li>
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
            <input class="detailInfoEdit" id="employee3_dataOfJoining" type="text" disabled value="2022.10.15">
          </span>
        </div>
      </li>
      <li class="rank">
        <div class="infoWrap">
          직급
          <span class="dot">
            <input class="detailInfoEdit" id="employee3_rank" type="text" disabled value="원무과">
          </span>
        </div>
      </li>
      <li class="email">
        <div class="infoWrap">
          이메일
          <span class="dot">
            <input class="detailInfoEdit" id="employee3_email" type="text" disabled value="bangsora@naver.com">
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
              <input class="detailInfoEdit" id="employee3_phoneNumber" type="text" disabled value="010-5734-1982">
            </span>
          </div>
        </div>
      </li>
      <li class="HomeAddress">
        <div class="infoUnderline">
          자택주소
          <div class="infoWrap">
            <span class="dot">
              <input class="detailInfoEdit" id="employee3_HomeAddress" type="text" disabled value="경기도 수원시 신미로 399">
            </span>
          </div>
        </div>
      </li>
      <li class="birthDate">
        <div class="infoUnderline">
          생년월일
          <div class="infoWrap">
            <span class="dot">
              <input class="detailInfoEdit" id="employee3_birthDate" type="text" disabled value="1990.07.03">
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
