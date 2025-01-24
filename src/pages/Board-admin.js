import "../styles/board.css";

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
  let currentTab = "공지게시판"; // 초기 탭은 공지게시판으로 설정
  let currentPage = 1; // 자료게시판의 초기 페이지는 1로 설정
  const itemsPerPage = 6; // 자료게시판의 한 페이지당 항목 수

  // Tab 생성
  const renderTabs = () => `
    <div class="tabs">
      <div class="tab-buttons">
        <button class="tab-button active" data-tab="공지게시판">공지게시판</button>
        <button class="tab-button" data-tab="자료게시판">자료게시판</button>
      </div>
      <a id="btnAddDataBoard" class="create-post-button" href="/board/data/create">게시물 작성</a>
    </div>
  `;

  const renderDataBoard = () => {
    const totalPages = Math.ceil(dataBoardItems.length / itemsPerPage);

    const rows = dataBoardItems
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
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
      .join("");

    const pagination = `
        <div class="pagination">
          <button class="pagination-button" data-page="${currentPage - 1}" ${
            currentPage === 1 ? "disabled" : ""
          }>&lt;</button>
          ${Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;
            return `
              <button class="pagination-button" data-page="${page}" ${
                page === currentPage ? 'class="active"' : ""
              }>
                ${page}
              </button>
            `;
          }).join("")}
          <button class="pagination-button" data-page="${currentPage + 1}" ${
            currentPage === totalPages ? "disabled" : ""
          }>&gt;</button>
        </div>
      `;

    return `
      <div class="data-board-container">
        <table class="data-board">
          <thead>
            <tr>
              <th>No.</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일자</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <div class="pagination-container">
          ${pagination}
        </div>
      </div>
    `;
  };

  const renderNoticeBoard = () => {
    const items = noticeBoardItems
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
      .join("");

    return `
    <div class="notice-board">
      <div class="scrollable-gallery-container">
        <div class="gallery">${items}</div>
      </div>
    </div>
  `;
  };

  const renderContent = () => {
    return currentTab === "공지게시판"
      ? renderNoticeBoard()
      : renderDataBoard();
  };

  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-button");

    /* 추가 */
    const boardContent = document.querySelector("#board-content");
    if (boardContent) {
      boardContent.innerHTML = renderContent();
    }
    /* */

    tabs[0].classList.add("active");

    tabs.forEach((button) => {
      button.addEventListener("click", () => {
        tabs.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  });

  const updateUI = () => {
    document.querySelector("#board-content").innerHTML = renderContent();

    if (currentTab === "자료게시판") {
      const paginationButtons = document.querySelectorAll(".pagination-button");

      paginationButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const page = parseInt(e.target.dataset.page, 10);
          const totalPages = Math.ceil(dataBoardItems.length / itemsPerPage);

          if (page >= 1 && page <= totalPages) {
            currentPage = page;
            updateUI();
          }
        });

        if (button.dataset.page == currentPage) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }
  };

  setTimeout(() => {
    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach((button) =>
      button.addEventListener("click", (e) => {
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        e.target.classList.add("active");

        currentTab = e.target.dataset.tab;
        currentPage = 1;
        updateUI();
      }),
    );

    updateUI();
  });

  return `
    <section>
      <h1 id="h1">게시판</h1>
      ${renderTabs()}
      <div id="board-content">${renderContent()}</div>
    </section>
  `;
}
