import "../styles/board.css";
import { setActive } from "../util/SetActive.js";

// 공지 게시판 data
const noticeBoardItems = [
  {
    img: "src/image/hospital.jpg",
    title: "리모델링 공지",
    content: "신년맞이 병원 리모델링을 진행합니다.",
  },
  {
    img: "src/image/hospital.jpg",
    title: "대체 휴일 공지",
    content: "1월 27일 대체 휴일 관련 공지입니다.",
  },
  {
    img: "src/image/hospital.jpg",
    title: "설 연휴 영업 공지",
    content: "1/28~1/30 휴무입니다.",
  },
  {
    img: "src/image/hospital.jpg",
    title: "안전 점검 공지",
    content: "1분기 안전 점검 실시 예정입니다.",
  },
  {
    img: "src/image/hospital.jpg",
    title: "신규 의료진 합류 공지",
    content: "2025년 신규 의료진이 합류합니다.",
  },
  {
    img: "src/image/hospital.jpg",
    title: "원장 휴무일 변경 공지",
    content: "격주 목요일 휴무로 변경 예정입니다.",
  },
  {
    img: "src/image/hospital.jpg",
    title: "근무진 건강 검진 공지",
    content: "근무 의료진의 검강 검진 일정입니다.",
  },
];

// 자료 게시판 data
const dataBoardItems = [
  {
    no: 7,
    title: "상반기 보수 교육 일정",
    writer: "원장 우미연",
    date: "2025-01-01",
  },
  {
    no: 6,
    title: "직원 복지 안내의 건",
    writer: "원장 우미연",
    date: "2025-01-02",
  },
  {
    no: 5,
    title: "감염 관리 교육 자료",
    writer: "원장 우미연",
    date: "2025-01-03",
  },
  {
    no: 4,
    title: "2024 학술 자료 모음",
    writer: "원장 우미연",
    date: "2025-01-04",
  },
  {
    no: 3,
    title: "의료기기 사용 메뉴얼 모음",
    writer: "원장 우미연",
    date: "2025-01-05",
  },
  {
    no: 2,
    title: "CPR 및 응급처치 교육 일정",
    writer: "원장 우미연",
    date: "2025-01-06",
  },
  {
    no: 1,
    title: "CPR 및 응급처치 교육 일정",
    writer: "원장 우미연",
    date: "2025-01-06",
  },
];

export default function board() {
  const urlParams = new URLSearchParams(window.location.search);
  let currentTab = urlParams.get("tab") || "공지게시판"; // 기본값은 '공지게시판'

  let currentPage = 1; // 자료게시판의 초기 페이지는 1로 설정
  const itemsPerPage = 6; // 자료게시판의 한 페이지당 항목 수

  const renderTabs = () => `
    <div class="tabs">
      <div class="tab-buttons">
        <button class="tab-button ${currentTab === "공지게시판" ? "active" : ""}" data-tab="공지게시판">공지게시판</button>
        <button class="tab-button ${currentTab === "자료게시판" ? "active" : ""}" data-tab="자료게시판">자료게시판</button>
      </div>
    </div>
  `;

  const renderNoticeBoard = () => `
    <div class="notice-board">
      <div class="scrollable-gallery-container">
        <div class="gallery-board">
          ${noticeBoardItems
            .map(
              (item) => `
              <div class="gallery-card">
                <img src="${item.img}" alt="${item.title}" />
                <div class="card-content">
                  <h3 class="card-title">${item.title}</h3>
                  <p class="card-text">${item.content}</p>
                </div>
              </div>
            `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  const renderDataBoard = () => {
    const totalPages = Math.ceil(dataBoardItems.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = currentPage * itemsPerPage;

    return `
      <div class="data-board-container">
        <table class="data-board">
          <thead>
            <tr><th>No.</th><th>제목</th><th>작성자</th><th>작성일자</th></tr>
          </thead>
          <tbody>
            ${dataBoardItems
              .slice(startIdx, endIdx)
              .map(
                (item) => `
                <tr>
                  <td>${item.no}</td>
                  <td>${item.title}</td>
                  <td>${item.writer}</td>
                  <td>${item.date}</td>
                </tr>
              `,
              )
              .join("")}
          </tbody>
        </table>
        <div class="pagination-container">
          ${Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;
            return `<button class="pagination-button ${page === currentPage ? "active" : ""}" data-page="${page}">${page}</button>`;
          }).join("")}
        </div>
      </div>
    `;
  };

  const updateUI = () => {
    document.querySelector("#board-content").innerHTML =
      currentTab === "공지게시판" ? renderNoticeBoard() : renderDataBoard();

    if (currentTab === "자료게시판") {
      document.querySelectorAll(".pagination-button").forEach((button) => {
        button.addEventListener("click", (e) => {
          currentPage = parseInt(e.target.dataset.page, 10);
          updateUI();
        });
      });
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    const tabButtonsContainer = document.querySelector(".tab-buttons");

    // 탭 클릭 이벤트를 이벤트 위임으로 처리
    tabButtonsContainer.addEventListener("click", (e) => {
      const button = e.target;

      if (button.classList.contains("tab-button")) {
        setActive(tabButtonsContainer.querySelectorAll(".tab-button"), button); // setActive 함수 호출
        currentTab = button.dataset.tab;

        // URL에 탭 상태 반영
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("tab", currentTab); // URL에 tab 파라미터 추가
        window.history.replaceState({}, "", "?" + urlParams.toString()); // URL 업데이트

        currentPage = 1; // 자료게시판 탭 클릭 시 페이지 번호 초기화
        updateUI(); // UI 업데이트
      }
    });

    updateUI(); // 초기 UI 설정
  });

  return `
    <section>
      <h1 id="h1">게시판</h1>
      ${renderTabs()}
      <div id="board-content">${currentTab === "공지게시판" ? renderNoticeBoard() : renderDataBoard()}</div>
    </section>
  `;
}
