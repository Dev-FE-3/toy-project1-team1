import "../styles/Home.css";
import TimeUtil from "../components/TimeUtil.js";

export default class Home {
  constructor() {
    this.timeUtil = new TimeUtil();
    this.updateTime = this.updateTime.bind(this);
  }

  updateTime() {
    // 시간을 갱신할 때마다 시간과 날짜 부분만 업데이트
    const currentTime = this.timeUtil.currentTime;
    const currentDate = this.timeUtil.currentDate;

    // DOM에서 시간과 날짜 부분만 찾아서 업데이트
    document.querySelector(".hour-min").textContent = currentTime;
    document.querySelector("#date").textContent = currentDate;
  }

  render() {
    const currentTime = this.timeUtil.currentTime;
    const currentDate = this.timeUtil.currentDate;

    // 처음 렌더링할 때만 전체 구조를 렌더링
    setInterval(() => {
      this.updateTime();
    }, 1000); // 1초마다 시간 갱신

    return `
    <div class="home-main">
      <header>
        <h1 id = "date"></h1>
        <div class="time">
          <div class="time-icon"></div>
          <div class="hour-min"></div>
        </div>
      </header>
      <div class="contents">
        <div class="section-top">
          <div class="profile">
            <div class="personal-info">
              <a href="/my-page" class="profile-photo-box"></a>
              <div class="info-box">
                <p class="name">이름</p>
                <p class="work">직무</p>
                <div class="work-state">
                  <div class="state-icon"></div>
                  <span class="state-text">근무 중</span>
                </div>
              </div>
            </div>
            <div class="work-time-check">
              <div class="time-start">
                근무 시작
                <p>09 : 00</p>
              </div>
              <div class="time-end">
                근무 종료
                <p>09 : 00</p>
              </div>
            </div>
            <a class="work-time-button">근무 시작</a>
          </div>
          <div class="notice">
            <h2>공지 게시판 <a href="/board">></a></h2>
            <div class="notice-inner">
              <div class="gallery">
                <div class="img-box"></div>
                <div class="text-box">
                  <h3>공지 제목</h3>
                  <p>text</p>
                </div>
              </div>
              <div class="gallery">
                <div class="img-box"></div>
                <div class="text-box">
                  <h3>공지 제목</h3>
                  <p>text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-bottom">
          <div class="doctor-schedule">
            <h2>휴진</h2>
            <p>김철수님은<br />오늘 휴진입니다.</p>
          </div>
          <div class="file">
            <h2>자료 게시판 <a href="/board">></a></h2>
            <ul>
              <li>
                <p class="title">2025년 상반기 교육 일정 및 교육 자료</p>
                <p class="date">2025.01.18</p>
              </li>
              <li>
                <p class="title">2025년 상반기 교육 일정 및 교육 자료</p>
                <p class="date">2025.01.18</p>
              </li>
              <li>
                <p class="title">2025년 상반기 교육 일정 및 교육 자료</p>
                <p class="date">2025.01.18</p>
              </li>
              <li>
                <p class="title">2025년 상반기 교육 일정 및 교육 자료</p>
                <p class="date">2025.01.18</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
  }
}
