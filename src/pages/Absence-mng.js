import { html } from "lit-html";

import "../styles/Absence-mng.css";

export default function absenceMng() {
  let isDropdownClick = false;
  let isModalClick = false;
  let isStartDateClick = false;
  let isEndDateClick = false;

  setTimeout(() => {
    const table = document.getElementById("row3__table");
    const dropDownBtn = document.getElementById("drop-down-btn");
    const dorpDownMenu = document.querySelector(".row3__drop-menu");

    const vacationReqBtn = document.getElementById("vacation-request-btn");
    const submitModal = document.getElementById("submit-continer");
    const submitModalBack = document.getElementById("submit-modal-back");
    const submitApplyBtn = document.getElementById("submit-modal-apply");

    const kindSelect = document.getElementById("kind");
    const startDateInput = document.querySelector('input[name="start-date"]');
    const endDateInput = document.querySelector('input[name="end-date"]');
    const reasonTextarea = document.querySelector('textarea[name="reason"]');

    const startDateBtn = document.querySelector(".start-day-input");
    const endtDateBtn = document.querySelector(".end-day-input");

    const calendar = document.querySelector(".days");

    const inputStartDateElement = document.querySelector(
      'input[name="start-date"]',
    );
    const inputEndDateElement = document.querySelector(
      'input[name="end-date"]',
    );

    // 부재 신청 내역 종류 토글 버튼
    const onClickDropBtn = () => {
      if (isDropdownClick) {
        isDropdownClick = false;
        dorpDownMenu.style.display = "none";
      } else {
        isDropdownClick = true;
        dorpDownMenu.style.display = "";
      }
    };

    // 부재 신청 내역에 대한 필터링 함수
    const onSelectVacationType = (event) => {
      const selectedType = event.target.innerText;

      const rows = document.querySelectorAll(".row3__item");

      rows.forEach((row) => {
        const vacationType = row.children[0].innerText;
        if (selectedType === "전체" || vacationType === selectedType) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
      onClickDropBtn();
    };

    // 드롭다운 메뉴 항목에 클릭 이벤트 추가(필터링 위해서)
    const dropMenuItems = document.querySelectorAll(".row3__drop-menu div");
    dropMenuItems.forEach((item) => {
      item.addEventListener("click", onSelectVacationType);
    });

    // 부재 신청 모달 ON/OFF , 버튼 활성화 style 적용
    const onClickReqBtn = () => {
      isModalClick = !isModalClick;
      submitModal.style.display = isModalClick ? "flex" : "none";
      vacationReqBtn.style.display = isModalClick
        ? vacationReqBtn.classList.add("row2__btns__active")
        : vacationReqBtn.classList.remove("row2__btns__active");
      checkFormValidity();
    };

    // 부재 신청 Submit 함수(작동이 안되서 requestSubmit()를 사용함)
    const onClickSubmitBtn = () => {
      submitModal.requestSubmit(submitApplyBtn);
    };

    // 부재 신청 함수
    const handleFormSubmit = (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const typeOfVacation = formData.get("type-of-vacation");
      const startDate = formData.get("start-date");
      const endDate = formData.get("end-date");
      const reason = formData.get("reason");

      const data = {
        typeOfVacation,
        startDate,
        endDate,
        reason,
      };

      addRowToTable(data);
      event.target.reset();
      onClickReqBtn();
    };

    // 부재 신청시 내역에 추가하는 함수
    const addRowToTable = (data) => {
      const newRow = document.createElement("tr");
      newRow.classList.add("row3__item");

      newRow.innerHTML = `
        <td>${data.typeOfVacation}</td>
        <td style="color: #666">승인대기</td>
        <td>${data.startDate}</td>
        <td>${data.endDate}</td>
      `;
      const tbody = table.querySelector("tbody");
      const secondRow = tbody.children[1];
      tbody.insertBefore(newRow, secondRow);
    };

    // Input(달력) 클릭 하기 위한 함수(Start Date)
    const onClickStartDataBtn = () => {
      if (isStartDateClick) {
        isStartDateClick = false;
      } else {
        isStartDateClick = true;
        inputStartDateElement.showPicker();
      }
    };

    // Input(달력) 클릭 하기 위한 함수(End Date)
    const onClickEndtDataBtn = () => {
      if (isEndDateClick) {
        isEndDateClick = false;
      } else {
        isEndDateClick = true;
        inputEndDateElement.showPicker();
      }
    };

    function checkFormValidity() {
      const kindValue = kindSelect.value;
      const startDateValue = startDateInput.value;
      const endDateValue = endDateInput.value;
      const reasonValue = reasonTextarea.value;

      if (kindValue && startDateValue && endDateValue && reasonValue) {
        submitApplyBtn.removeAttribute("disabled");
      } else {
        submitApplyBtn.setAttribute("disabled", "disabled");
      }
    }

    if (calendar) {
      calendar.addEventListener("click", function (event) {
        const target = event.target;
        if (target.tagName === "LI") {
          document
            .querySelectorAll(".days li")
            .forEach((li) => li.classList.remove("selected"));
          target.classList.add("selected");
        }
      });
    }

    if (dropDownBtn) {
      dropDownBtn.addEventListener("click", onClickDropBtn);
    }
    if (vacationReqBtn) {
      vacationReqBtn.addEventListener("click", onClickReqBtn);
    }
    if (submitModalBack) {
      submitModalBack.addEventListener("click", onClickReqBtn);
    }
    if (startDateBtn) {
      startDateBtn.addEventListener("click", onClickStartDataBtn);
    }
    if (endtDateBtn) {
      endtDateBtn.addEventListener("click", onClickEndtDataBtn);
    }
    if (submitApplyBtn) {
      submitApplyBtn.addEventListener("click", onClickSubmitBtn);
    }
    if (submitModal) {
      submitModal.addEventListener("submit", handleFormSubmit);
    }
    if (kindSelect) {
      kindSelect.addEventListener("change", checkFormValidity);
    }
    if (startDateInput) {
      startDateInput.addEventListener("change", checkFormValidity);
    }
    if (endDateInput) {
      endDateInput.addEventListener("change", checkFormValidity);
    }
    if (reasonTextarea) {
      reasonTextarea.addEventListener("input", checkFormValidity);
    }
  }, 1000);

  return html`
    <div class="abs-container">
      <h1 class="row1">부재 관리</h1>

      <div class="row2">
        <div class="row2__remaining"></div>

        <div class="row2__btns">
          <button id="vacation-request-btn">부재 신청</button>
         </div>
      </div>

      <div class="row3">
        
        <div class="row3__calendar">
        
        <div class="nav">
            <button class="material-icons"> chevron_left </button>
            <p class="current-date">2025.1</p>
            <button class="material-icons"> chevron_right </span>
          </div>

          <div class="calendar">
            <ul class="weeks">
              <li>일</li>
              <li>월</li>
              <li>화</li>
              <li>수</li>
              <li>목</li>
              <li>금</li>
              <li>토</li>
            </ul>
            <ul class="days">
              <li class="inactive">29</li>
              <li class="inactive">30</li>
              <li class="inactive">31</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
              <li class="inactive">1</li>
            </ul>
          </div>
        </div>

        <div class="row3__details">


          <table id="row3__table">
            <tr class="row3__title">
              <td>
                종류
                <span id="drop-down-btn">▼</span>
                <!-- 드롭다운 메뉴 -->
                <div class="row3__drop-menu" style="display : none">
                  <div>전체</div>
                  <div>연차</div>
                  <div>반차</div>
                  <div>휴가</div>
                  <div>출산휴가</div>
                  <div>경조사</div>
                </div>
              </td>
              <td>승인 여부</td>
              <td>발생일</td>
              <td>신청일</td>
            </tr>

            <tr class="row3__item">
              <td>연차</td>
              <td style="color: #666">승인대기</td>
              <td>2025.01.02</td>
              <td>2024.12.29</td>
            </tr>
            
            <tr class="row3__item">
              <td>휴가</td>
              <td>승인완료</td>
              <td>2024.11.07</td>
              <td>2024.10.13</td>
            </tr>

            <tr class="row3__item">
              <td>병가</td>
              <td>승인완료</td>
              <td>2024.06.15</td>
              <td>2024.06.15</td>
            </tr>
            
            <tr class="row3__item">
              <td>연차</td>
              <td>승인완료</td>
              <td>2024.03.18</td>
              <td>2024.02.02</td>
            </tr>
            
            <tr class="row3__item">
              <td>반차</td>
              <td>승인완료</td>
              <td>2024.02.03</td>
              <td>2024.02.03</td>
            </tr>
            
            <tr class="row3__item">
              <td>휴가</td>
              <td>승인완료</td>
              <td>2024.01.10</td>
              <td>2024.01.03</td>
            </tr> 
          
          </table>
        </div>

      </div>

      <form id="submit-continer" style="display:none">
        <div class="submit-modal">
          <h1 class="main-title">부재 신청</h1>

          <div class="type-of-vacation">
            <div class="title">휴가 종류</div>
            <div class="item">
              <select name="type-of-vacation" id="kind">
                <option class="kind__item" value="연차">연차</option>
                <option value="반차">반차</option>
                <option value="휴가">휴가</option>
                <option value="출산휴가">출산휴가</option>
                <option value="경조사">경조사</option>
              </select>
            </div>
          </div>

          <div class="start-day">
            <div class="title">시작일</div>
            <div class="item start-day-input">
              <input name="start-date" type="date" />
            </div>
          </div>

          <div class="period">
            <div class="title">사용 기간</div>
            <div class="item">
              <div>1일</div>
            </div>
          </div>

          <div class="end-day">
            <div class="title">종료일</div>
            <div class="item end-day-input">
              <input name="end-date" type="date" />
            </div>
          </div>

          <div class="reason">
            <textarea name="reason" placeholder="휴가 사유를 입력해주세요"></textarea>
          </div>

          <div class="submit-btn">
            <div class="item submit-btn__item">
              <button type="button" id="submit-modal-back">취소</button>
              <button type="submit" id="submit-modal-apply" disabled>휴가 신청하기</button>
            </div>
          </div>
        </div>
      </form>

    </div>
  `.strings;
}
