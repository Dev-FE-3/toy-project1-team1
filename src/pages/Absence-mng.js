import { html } from "lit-html";

import "../styles/Absence-mng.css";

export default function absenceMng() {
  let isDropClick = false;
  let isReqClick = false;
  let isStartDateClick = false;
  let isEndDateClick = false;

  setTimeout(() => {
    const dropDownBtn = document.getElementById("drop-down-btn");
    const dorpDownMenu = document.querySelector(".row3__drop-menu");

    const vacationReqBtn = document.getElementById("vacation-request-btn");
    const submitModal = document.getElementById("submit-continer");
    const submitModalBack = document.getElementById("submit-modal-back");

    const startDateBtn = document.querySelector(".start-day-input");
    const endtDateBtn = document.querySelector(".end-day-input");

    const inputStartDateElement = document.querySelector(
      'input[name="start-date"]',
    );
    const inputEndDateElement = document.querySelector(
      'input[name="end-date"]',
    );

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
        submitModal.style.display = "none";
      } else {
        isReqClick = true;
        submitModal.style.display = "";
      }
    };

    const onClickStartDataBtn = () => {
      if (isStartDateClick) {
        isStartDateClick = false;
      } else {
        isStartDateClick = true;
        inputStartDateElement.showPicker();
      }
    };

    const onClickEndtDataBtn = () => {
      if (isEndDateClick) {
        isEndDateClick = false;
      } else {
        isEndDateClick = true;
        inputEndDateElement.showPicker();
      }
    };

    document.querySelector(".days").addEventListener("click", function (event) {
      const target = event.target;

      if (target.tagName === "LI") {
        document
          .querySelectorAll(".days li")
          .forEach((li) => li.classList.remove("selected"));
        target.classList.add("selected");
      }
    });

    dropDownBtn.addEventListener("click", onClickDropBtn);
    vacationReqBtn.addEventListener("click", onClickReqBtn);
    submitModalBack.addEventListener("click", onClickReqBtn);
    startDateBtn.addEventListener("click", onClickStartDataBtn);
    endtDateBtn.addEventListener("click", onClickEndtDataBtn);
  }, 1000);

  return html`
    <div class="abs-container">
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
              <td>2024.11.07</td>
              <td>2024.10.13</td>
            </tr>
            <tr class="row3__item">
              <td>병가</td>
              <td>승인완료</td>
              <td>2024.07.02</td>
              <td>2024.06.15</td>
              </tr>
              <tr class="row3__item">
              <td>연차</td>
              <td>승인완료</td>
              <td>2024.03.18</td>
              <td>2024.02.02</td>
            </tr>
          </table>
        </div>


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
            <div class="item start-day-input">
              <input name="start-date" type="date" />
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
            <div class="item end-day-input">
              <input name="end-date" type="date" />
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
