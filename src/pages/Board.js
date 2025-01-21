import "../styles/board-1.css";

// 자료게시판 데이터
// 우선은 Json 아닌 예시 데이터를 띄웠습니다. 이건 추후 수정하겠습니다.
// 내림차순으로 넘버링할지 오름차순으로 할지는 추후 결정
const dataBoardItems = [
  { no: 1, title: "A", author: "A", date: "2025-01-01" },
  { no: 2, title: "B", author: "B", date: "2025-01-02" },
  { no: 3, title: "C", author: "C", date: "2025-01-03" },
  { no: 4, title: "D", author: "D", date: "2025-01-04" },
  { no: 5, title: "E", author: "E", date: "2025-01-05" },
  { no: 6, title: "F", author: "F", date: "2025-01-06" },
  { no: 7, title: "G", author: "G", date: "2025-01-07" },
];

// 공지게시판 데이터
// 우선은 Json 아닌 예시 데이터를 띄웠습니다. 이건 추후 수정하겠습니다.
const noticeBoardItems = [
  {
    img: "",
    title: "Notice A",
    content: "Content A",
  },
  {
    img: "",
    title: "Notice B",
    content: "Content B",
  },
  {
    img: "",
    title: "Notice C",
    content: "Content C",
  },
  {
    img: "",
    title: "Notice D",
    content: "Content D",
  },
  {
    img: "",
    title: "Notice E",
    content: "Content E",
  },
  {
    img: "",
    title: "Notice F",
    content: "Content F",
  },
  {
    img: "",
    title: "Notice G",
    content: "Content G",
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
    const totalPages = Math.ceil(dataBoardItems.length / itemsPerPage); // 전체 페이지 수 계산

    // 현재 페이지 번호 그룹을 계산 (5개씩 보여주는 로직은 유지)
    const pageGroup = Math.floor((currentPage - 1) / 5); // 현재 페이지가 어느 그룹에 속하는지
    const startPage = pageGroup * 5 + 1; // 시작 페이지 번호
    const endPage = Math.min(startPage + 4, totalPages); // 끝 페이지 번호 (5개씩 표시되므로 4번까지)

    // 현재 페이지에 해당하는 데이터만 표시
    const rows = dataBoardItems
      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      .map(
        (item) => `
          <tr>
            <td>${item.no}</td>
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.date}</td>
          </tr>
        `,
      )
      .join("");

    const pagination = `
        <div class="pagination">
          <!-- 이전 페이지로 이동 -->
          <button class="pagination-button" data-page="${currentPage - 1}" ${
            currentPage === 1 ? "disabled" : ""
          }>&lt;</button>
    
          <!-- 페이지 번호 표시 -->
          ${Array.from({ length: endPage - startPage + 1 }, (_, i) => {
            const page = startPage + i; // 페이지 번호
            return `
              <button class="pagination-button" data-page="${page}" ${
                page === currentPage ? 'class="active"' : ""
              }>
                ${page}
              </button>
            `;
          }).join("")}
    
          <!-- 다음 페이지로 이동 -->
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

  // 공지 게시판 render
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

    // 첫 번째 탭에 'active' 클래스 추가 (페이지 로딩 시)
    tabs[0].classList.add("active");

    tabs.forEach((button) => {
      button.addEventListener("click", () => {
        // 모든 탭에서 'active' 클래스 제거
        tabs.forEach((btn) => btn.classList.remove("active"));

        // 클릭한 탭에만 'active' 클래스 추가
        button.classList.add("active");
      });
    });
  });

  const updateUI = () => {
    document.querySelector("#board-content").innerHTML = renderContent();

    if (currentTab === "자료게시판") {
      const paginationButtons = document.querySelectorAll(".pagination-button");

      paginationButtons.forEach((button) => {
        // 페이지 번호 클릭 시 처리
        button.addEventListener("click", (e) => {
          const page = parseInt(e.target.dataset.page, 10);
          const totalPages = Math.ceil(dataBoardItems.length / itemsPerPage);

          if (page >= 1 && page <= totalPages) {
            currentPage = page;
            updateUI(); // UI 업데이트
          }
        });

        // active 클래스 적용
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
        // 모든 탭에서 active 클래스를 제거
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        // 클릭한 버튼에만 active 클래스 추가
        e.target.classList.add("active");

        currentTab = e.target.dataset.tab;
        currentPage = 1; // 탭 변경 시 페이지 초기화
        updateUI();
      }),
    );

    updateUI();
  });

  // html
  return `
    <section>
      <h1 id="h1">게시판</h1>
      ${renderTabs()}
      <div id="board-content">${renderContent()}</div>
    </section>
    `;
}
