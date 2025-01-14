import './Home.css'

export default function home () {
  return `
    <div class="home-main">
      <header>
        <h1>2025년 1월 8일</h1>
        <div class="time">
          <div class="time-icon"></div>
          <div class="hour-min">14:21</div>
        </div>
      </header>
      <div class="contents">
        <div class="section-top">
          <div class="profile">
            <div class="personal-info">
              <a href="javascript:void(0)" class="profile-photo-box">
              </a>
              <div class="info-box">
                <p class="name">정지윤</p>
                <p class="work">간호사</p>
                <div class="work-state">
                  <div class="state-icon"></div>
                  <span class="state-text">근무 중</span>
                </div>
              </div>
            </div>
            <div class="work-time-check">
              <div class="time-start">근무 시작<p>09 : 00</p></div>
              <div class="time-end">근무 종료<p>09 : 00</p></div>
            </div>
            <a class="work-time-button">근무 시작</a>
          </div>
          <div class="notice">
            <h2>공지 게시판</h2>
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
            <p>김철수님은<br>오늘 휴진입니다.</p>
          </div>
          <div class="file">
            <h2>자료 게시판</h2>
            <ul>
              <li><p class="title">2025년 상반기 교육 일정 및 교육 자료</p><p class="date">2025.01.18</p></li>
              <li><p class="title">2025년 상반기 교육 일정 및 교육 자료</p><p class="date">2025.01.18</p></li>
              <li><p class="title">2025년 상반기 교육 일정 및 교육 자료</p><p class="date">2025.01.18</p></li>
              <li><p class="title">2025년 상반기 교육 일정 및 교육 자료</p><p class="date">2025.01.18</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
}