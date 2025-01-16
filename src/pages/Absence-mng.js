import { html } from "lit-html";

import "../styles/Absence-mng.css";

export default function absenceMng() {
  let isDropClick = false;
  let isReqClick = false;

  setTimeout(() => {
    const dropDownBtn = document.getElementById("drop-down-btn");
    const dorpDownMenu = document.querySelector(".row3__drop-menu");

    const vacationReqBtn = document.getElementById("vacation-request-btn");
    const submitModal = document.getElementById("submit-continer");
    const submitModalBack = document.getElementById("submit-modal-back");

    const onClickDropBtn = () => {
      if (isDropClick) {
        isDropClick = false;
        dorpDownMenu.style.display = "none";
      } else {
        isDropClick = true;
        dorpDownMenu.style.display = "";
      }
    };

    const onClickReqBtn = () => {
      if (isReqClick) {
        isReqClick = false;
        console.log("부재신청 클릭");
        submitModal.style.display = "none";
      } else {
        isReqClick = true;
        submitModal.style.display = "";
      }
    };

    dropDownBtn.addEventListener("click", onClickDropBtn);
    vacationReqBtn.addEventListener("click", onClickReqBtn);
    submitModalBack.addEventListener("click", onClickReqBtn);
  }, 1000);

  return html`
    <div class="container">
      <h1 class="row1">부재 관리</h1>

      <div class="row2">
        <div class="row2__btns">
          <button id="vacation-request-btn">부재 신청</button>
          <button>안내 사항</button>
        </div>
        <div class="row2__remaining">
          <div class="row2__remaining__item">
            <div>잔여 연차</div>
            <div>12일</div>
          </div>
          <div class="row2__remaining__item">
            <div>잔여 반차</div>
            <div>8.5일</div>
          </div>

          <div class="row2__remaining__item">
            <div>잔여 휴가</div>
            <div>10일</div>
          </div>
        </div>
      </div>

      <div class="row3">
        <div class="row3__details">
          <div>부재 신청 내역</div>

          <table>
            <tr class="row3__title">
              <td>
                종류
                <span id="drop-down-btn">▼</span>
                <!-- 드롭다운 메뉴 -->
                <div class="row3__drop-menu" style="display : none">
                  <div>연차</div>
                  <div>반차</div>
                  <div>휴가</div>
                  <div>출산 휴가</div>
                  <div>경조사</div>
                </div>
              </td>
              <td>승인 여부</td>
              <td>발생일</td>
              <td>신청일</td>
            </tr>

            <tr class="row3__item">
              <td>연차</td>
              <td>승인대기</td>
              <td>2025.01.02</td>
              <td>2024.12.29</td>
            </tr>
            <tr class="row3__item">
              <td>휴가</td>
              <td>승인완료</td>
              <td>2025.01.02</td>
              <td>2024.12.29</td>
            </tr>
            <tr class="row3__item">
              <td>병가</td>
              <td>승인완료</td>
              <td>2025.01.02</td>
              <td>2024.12.29</td>
            </tr>
            <tr class="row3__item">
              <td>연차</td>
              <td>승인완료</td>
              <td>2025.01.02</td>
              <td>2024.12.29</td>
            </tr>
          </table>
        </div>

        <div class="row3__calendar">
          <!-- 모형으로 만들지 진짜 달력을 만들지 -->
        </div>
      </div>

      <div id="submit-continer" style="display:none">
        <div class="submit-modal">
          <h1 class="main-title">부재 신청</h1>

          <div class="type-of-vacation">
            <div class="title">휴가 종류</div>
            <div class="item">
              <select name="type-of-vacation" id="kind">
                <option class="kind__item" value="annual-leave">연차</option>
                <option value="half">반차</option>
                <option value="vacation">휴가</option>
                <option value="maternity-leave">출산휴가</option>
                <option value="family-event">경조사</option>
              </select>
            </div>
          </div>

          <div class="start-day">
            <div class="title">시작일</div>
            <div class="item">
              <input type="date" />
            </div>
          </div>

          <div class="period">
            <div class="title">사용 기간</div>
            <div class="item">
              <div>10일</div>
            </div>
          </div>

          <div class="end-day">
            <div class="title">종료일</div>
            <div class="item">
              <input type="date" />
            </div>
          </div>

          <div class="reason">
            <textarea placeholder="휴가 사유를 입력해주세요"></textarea>
          </div>

          <div class="submit-btn">
            <div class="item submit-btn__item">
              <button id="submit-modal-back">취소</button>
              <button>휴가 신청하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `.strings;
}
