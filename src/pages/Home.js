import "../styles/Home.css";
import TimeUtil from "../util/TimeUtil.js";
import {localStorageUtil} from "../util/LocalStorageUtil.js"
import {STORAGE_KEYS, WORK_STATE} from "../constants/storageConstants.js"

export default class Home {
  constructor() {
    this.timeUtil = new TimeUtil();
    this.timeUtil.updateTime();
    this.isWorking =
      localStorageUtil.get(STORAGE_KEYS.WORK_STATE) === WORK_STATE.WORKING;
  }

  updateDateTime() {
    if (window.location.pathname === "/home") {
      document.querySelector(".hour-min").textContent =
        this.timeUtil.currentTime;
      document.querySelector("#date").textContent = this.timeUtil.currentDate;
    }
  }

  updateUI = () => {
    const startTime = localStorageUtil.get(STORAGE_KEYS.START_TIME) || "-";
    const endTime = localStorageUtil.get(STORAGE_KEYS.END_TIME) || "-";

    document.getElementById("startWork").textContent = startTime;
    document.getElementById("finishWork").textContent = endTime;

    const buttonBg = document.querySelector(".toggle");
    const workStateText = document.querySelector(".work-state-text");
    const buttonHead = document.querySelector(".button-head");

    workStateText.textContent = this.isWorking ? "근무 중" : "근무 전";
    workStateText.style.color = this.isWorking ? "#3a8c8c" : "#999";

    buttonBg.classList.toggle("bg-on", this.isWorking);
    buttonBg.classList.toggle("bg-off", !this.isWorking);
    buttonHead.classList.toggle("head-right", this.isWorking);
    buttonHead.classList.toggle("head-left", !this.isWorking);
  };

  updateState = (newState, currentTime) => {
    this.isWorking = newState === WORK_STATE.WORKING; // 상태를 업데이트
    localStorageUtil.set(STORAGE_KEYS.WORK_STATE, newState);
    localStorageUtil.set(
      STORAGE_KEYS.START_TIME,
      this.isWorking
        ? currentTime
        : localStorageUtil.get(STORAGE_KEYS.START_TIME) || " - ",
    );
    localStorageUtil.set(
      STORAGE_KEYS.END_TIME,
      this.isWorking ? "-" : currentTime,
    );

    this.updateUI();
  };

  modal = () => {
    const message = this.isWorking
      ? "근무를 종료하시겠습니까?"
      : "근무를 시작하시겠습니까?";
    document.querySelector(".home-modal-system_msg").textContent = message;
    document.getElementById("home-modal").style.display = "block";
  };

  changeState = () => {
    const currentTime = this.timeUtil.currentTime;
    this.updateState(
      this.isWorking ? WORK_STATE.NOT_WORKING : WORK_STATE.WORKING,
      currentTime,
    );
    document.getElementById("home-modal").style.display = "none";
  };

  homeEventHandler = () => {
    this.updateUI();

    document
      .getElementById("home-modal-confirm")
      .addEventListener("click", this.changeState);
    document.querySelector(".cancel").addEventListener("click", () => {
      document.getElementById("home-modal").style.display = "none";
    });
    document
      .querySelector(".toggle")
      .addEventListener("click", (event) => {
        this.modal();
      });
  };

  render() {
    setTimeout(() => {
      this.homeEventHandler();
    }, 0);
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
    return `
    <div id="home-modal">
      <div class="home-modal-box">
        <p class="home-modal-system_msg">근무를 시작하시겠습니까?</p>
        <div class="button-box">
          <button class="cancel">취소</button>
          <button id="home-modal-confirm">확인</button>
        </div>
      </div>
    </div>
    <div class="home-main">
      <header>
        <h1 id = "date">${this.timeUtil.currentDate}</h1>
        <div class="time">
          <div class="time-icon">
            <span class="material-icons">schedule</span>
          </div>
          <div class="hour-min">${this.timeUtil.currentTime}</div>
        </div>
      </header>
      <div class="contents">
        <div class="section-left">
          <div class="profile">
            <div class="personal-info">
              <a href="/my-page" class="profile-photo-box"></a>
              <div class="info-box">
                <p class="name">차주현</p>
                <p class="work">간호사</p>
                
              </div>
            </div>
            <div class="work-time-check">
              <div>
                근무 시작
                <p id ="startWork">-</p>
              </div>
              <div>
                근무 종료
                <p id ="finishWork">-</p>
              </div>
            </div>
            <div class="change-work_state-box">
                <div class="toggle">
                  <div class="button-head"></div>
              </div>
              <p class="work-state-text">근무 중</p>
            </div>
          </div>
          <div class="doctor-schedule">
            <h2>휴진</h2>
            <p>우미연님은<br />오늘 휴진입니다.</p>
          </div>
        </div>
        <div class="section-right">
          <div class="notice">
            <h2>공지 게시판 <a href="/board?tab=공지게시판">></a></h2>
            <div class="notice-inner">
              <div class="gallery">
                <div class="img-box"></div>
                <div class="text-box">
                  <h3>리모델링 공지</h3>
                  <p>신년맞이 병원 리모델링을 진행합니다.</p>
                </div>
              </div>
              <div class="gallery">
                <div class="img-box"></div>
                <div class="text-box">
                  <h3>대체 휴일 공지</h3>
                  <p>1월 27일 대체 휴일 관련 공지입니다.</p>
                </div>
              </div>
              <div class="gallery">
                <div class="img-box"></div>
                <div class="text-box">
                  <h3>설 연휴 영업 공지</h3>
                  <p>1/28~1/30 휴무입니다.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="file">
            <h2>자료 게시판 <a href="/board?tab=자료게시판">></a></h2>
            <ul>
              <li>
                <p class="num">1</p>
                <p class="title">상반기 보수 교육 일정</p>
                <p class="date">2025-01-01</p>
              </li>
              <li>
                <p class="num">2</p>
                <p class="title">직원 복지 안내의 건</p>
                <p class="date">2025-01-02</p>
              </li>
              <li>
                <p class="num">3</p>
                <p class="title">감염 관리 교육 자료</p>
                <p class="date">2025-01-03</p>
              </li>
              <li>
                <p class="num">4</p>
                <p class="title">2024 학술 자료 모음</p>
                <p class="date">2025-01-04</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
  }
}
