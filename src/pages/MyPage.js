import "../styles/mypage.css";

export default function myPage() {
  window.goBack = function () {
    window.history.go(-1);
  };

  // localStorge를 활용한 근무 시간 변경
  const isWorking = window.localStorage.getItem('workState') === 'working';
  const updateState = () => {
    if (window.location.pathname === '/my-page'){
      const startTime = window.localStorage.getItem('startTime');
      const endTime = window.localStorage.getItem('endTime');
      document.getElementById("startWork").textContent = startTime;
      document.getElementById("finishWork").textContent = endTime;
      document.querySelector('.nurseWorking').textContent = isWorking ? '근무 중': '근무 전';
    }
  }
  setTimeout(() => {
    updateState();
  }, 0);

  // * 이미지 업로드 버튼 클릭 시 실행되는 함수
  // * 파일 선택을 위한 input 요소를 동적으로 생성하고 클릭 이벤트를 발생시킴

  window.onUploadButtonClick = function () {
    // 파일 선택을 위한 input 요소 생성
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*"; // 이미지 파일만 선택 가능하도록 제한
    input.onchange = window.handleFileSelect; // 파일 선택 시 이벤트 핸들러 등록
    input.click(); // 파일 선택 다이얼로그 표시
  };

  /**
   * 파일이 선택되었을 때 실행되는 함수
   * 선택된 이미지 파일을 읽어서 미리보기로 표시
   */
  window.handleFileSelect = function (event) {
    const files = event.target.files;
    if (!files) return;

    const file = files[0];
    // 선택된 파일이 이미지인지 확인
    if (!file.type.startsWith("image/")) {
      alert("이미지 파일을 선택해주세요.");
      return;
    }

    // FileReader를 사용하여 이미지 파일 읽기
    const reader = new FileReader();
    reader.onload = function (e) {
      // DOM 요소 참조 가져오기
      const previewImage = document.getElementById("preview-image");
      const deleteBtn = document.getElementById("delete-btn");
      const placeholder = document.getElementById("placeholder");
      const uploadBtn = document.querySelector(".upload-btn");

      if (previewImage && e.target) {
        // 이미지 미리보기 표시
        previewImage.src = e.target.result;
        previewImage.style.display = "block";

        // 삭제 버튼 보이기
        if (deleteBtn) deleteBtn.style.display = "block";

        // 플레이스홀더 숨기기
        if (placeholder) placeholder.style.display = "none";

        if (uploadBtn) uploadBtn.style.display = "none";
      }
    };

    // 파일 읽기 오류 처리
    // reader.onerror = function () {
    //   alert("이미지를 읽는 도중 오류가 발생했습니다.");
    // };

    // 파일을 Data URL로 읽기 시작
    reader.readAsDataURL(file);
  };

  /**
   * 이미지 삭제 버튼 클릭 시 실행되는 함수
   * 미리보기 이미지를 제거하고 초기 상태로 되돌림
   */
  window.deleteImage = function () {
    // DOM 요소 참조 가져오기
    const previewImage = document.getElementById("preview-image");
    const deleteBtn = document.getElementById("delete-btn");
    const placeholder = document.getElementById("placeholder");
    const uploadBtn = document.querySelector(".upload-btn");

    if (previewImage) {
      // 이미지 미리보기 초기화
      previewImage.src = "";
      previewImage.style.display = "none";
    }

    if (deleteBtn) {
      // 삭제 버튼 숨기기
      deleteBtn.style.display = "none";
    }

    if (uploadBtn) uploadBtn.style.display = "block";

    if (placeholder) {
      // 이미지 없음 플레이스홀더 다시 표시
      placeholder.style.display = "flex";
    }
  };
  return `
  <div class="myPageContainer">
     <!-- 페이지 타이틀 -->
     <h1 class="myPage-title">마이페이지</h1>
     <input class="back" type="button" value="뒤로가기" onClick="goBack()">
     <!-- 헤더 섹션 - 프로필 이미지와 기본 정보 포함 -->
     <div class="myPageHeader">
       <!-- 이미지 업로드 영역 - 프로필 이미지 관리 -->
       <div class="nurseImageIcon">
         <!-- 숨겨진 파일 입력 필드 -->
         <input
           type="file"
           id="imageUpload"
           accept="image/*"
           style="display: none"
           onchange="window.handleFileSelect(event)"
         />
         
         <!-- 이미지 미리보기 영역 - 업로드된 이미지 또는 플레이스홀더 표시 -->
         <div class="image-preview">
           <!-- 이미지가 없을 때 표시되는 플레이스홀더 -->
           <div id="placeholder" class="placeholder">
             <span>이미지 없음</span>
           </div>
           
           <!-- 업로드된 이미지 미리보기 -->
           <img
             id="preview-image"
             alt="프로필 이미지"
             class="profile-image"
             style="display: none"
           />
         </div>
         
         <!-- 이미지 관리 버튼 영역 -->
         <div class="button-container">
           <!-- 이미지 업로드 버튼 -->
           <button 
             id="uploadBtn" 
             class="upload-btn"
             onclick="window.onUploadButtonClick()"
           >
             <i class="material-icons edit">edit</i>
           </button>
           <!-- 이미지 삭제 버튼 - 이미지가 있을 때만 표시 -->
           <button
             onclick="window.deleteImage()"
             id="delete-btn"
             class="delete-btn"
             style="display: none"
           >
             <i class="material-icons">delete</i>
           </button>
         </div>
       </div>

       <!-- 간호사 기본 정보 표시 -->
       <ul class="nurseInfo">
         <li class="nurseName">코깎장</li>
         <li class="nurseLank">간호사</li>
         <li class="nurseWorking">근무중</li>
       </ul>

       <!-- 근무 시간 정보 표시 -->
       <div class="workTime">
         <div class="dutyStart">
           근무시작
           <div id="startWork">00 : 00</div>
         </div>
         <div class="dutyFinish">
           근무종료
           <div id="finishWork">00 : 00</div>
         </div>
       </div>
     </div>

     <!-- 상세 정보 섹션 -->
     <div class="info">
       <!-- 첫 번째 정보 그룹 - 기본 직무 정보 -->
       <ul class="firstDate">
         <li class="dataOfJoining">
           입사일
           <div class="detailInfo">
             2025.1.1 <br />
             신입 간호사로 입사
           </div>
         </li>
         <li class="rank">
           직급
           <div class="detailInfo">간호사</div>
         </li>
         <li class="email">
           이메일
           <div class="detailInfo">fastcamp@kdt.com</div>
         </li>
       </ul>

       <!-- 두 번째 정보 그룹 - 개인 정보 -->
       <ul class="secondDate">
         <li class="phoneNumber">
           <div class="infoUnderline">
             전화번호
             <div class="detailInfo">010-2721-9932</div>
           </div>
         </li>
         <li class="HomeAddress">
           <div class="infoUnderline">
             자택주소
             <div class="detailInfo">부산광역시 해운대구 우동 23번길 71-9</div>
           </div>
         </li>
         <li class="birthDate">
           <div class="infoUnderline">
             생년월일
             <div class="detailInfo">2000.01.01</div>
           </div>
         </li>
       </ul>
     </div>
   </div>
`;
}
