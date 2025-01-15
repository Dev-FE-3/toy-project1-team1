import "../styles/mypage.css";
import { html } from "lit-html";

export default function myPage() {
  return `
  <div class="myPageContainer">
  <h1 class="myPage-title">마이페이지</h1>

  <!-- mypage info -->

  <div class="myPageHeader">
    <div class="nurseImage">
      <div class="nurseImageIcon">


      </div>
    </div>


    <ul class="nurseInfo">
      <li class="nurseName">코깎장</li>
      <li class="nurseLank">간호사</li>
      <li class="nurseWorking">근무중</li>
    </ul>

    <!-- mypage work start & finish -->

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

  <!-- mypage detail -->
  <div class="info">
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
          <div class="detailInfo">2000.01.01
        </div> 
        </div>
      </li>
    </ul>
  </div>
</div>
`;
}
