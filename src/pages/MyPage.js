import "../styles/mypage.css";

function loadFile(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();

    reader.onload = function (e) {
      let previewImage = document.getElementById("preview-image");
      let deleteBtn = document.getElementById("delete-btn");
      let placeholder = document.getElementById("placeholder");

      previewImage.src = e.target.result;
      previewImage.style.display = "block";
      deleteBtn.style.display = "block";
      placeholder.style.display = "none";
    };

    reader.readAsDataURL(input.files[0]);
  }
}

function deleteImage() {
  let previewImage = document.getElementById("preview-image");
  let deleteBtn = document.getElementById("delete-btn");
  let imageUpload = document.getElementById("imageUpload");
  let placeholder = document.getElementById("placeholder");

  previewImage.src = "";
  previewImage.style.display = "none";
  deleteBtn.style.display = "none";
  placeholder.style.display = "flex";
  imageUpload.value = "";
}

export default function myPage() {
  return `
   <div class="myPageContainer">
     <!-- 타이틀 -->
     <h1 class="myPage-title">마이페이지</h1>

     <!-- 헤더 섹션 -->
     <div class="myPageHeader">
       <!-- 이미지 업로드 영역 -->
       <div class="nurseImageIcon">
         <!-- 파일 입력 필드 -->
         <input
           type="file"
           id="imageUpload"
           accept="image/*"
           style="display: none"
         />
         
         <!-- 이미지 미리보기 영역 -->
         <div class="image-preview">
           <!-- 플레이스홀더 -->
           <div id="placeholder" class="placeholder">
             <span>이미지 없음</span>
           </div>
           
           <!-- 이미지 미리보기 -->
           <img
             id="preview-image"
             alt="프로필 이미지"
             class="profile-image"
             style="display: none"
           />
         </div>
         
         <!-- 버튼 영역 -->
         <div class="button-container">
           <label for="imageUpload" class="upload-btn">이미지 관리</label>
           <button
             onclick="deleteImage()"
             id="delete-btn"
             class="delete-btn"
           >
             삭제
           </button>
         </div>
       </div>

       <!-- 간호사 정보 -->
       <ul class="nurseInfo">
         <li class="nurseName">코깎장</li>
         <li class="nurseLank">간호사</li>
         <li class="nurseWorking">근무중</li>
       </ul>

       <!-- 근무 시간 정보 -->
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

     <!-- 상세 정보 섹션 -->
     <div class="info">
       <!-- 첫 번째 정보 그룹 -->
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

       <!-- 두 번째 정보 그룹 -->
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
