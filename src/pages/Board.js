export default function boardPage() {
  let currentTab = "공지게시판"; // 초기 탭은 공지게시판으로 설정
  let currentPage = 1; // 자료게시판의 초기 페이지는 1로 설정
  const itemsPerPage = 6; // 자료게시판의 한 페이지당 항목 수

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

  // Tab 생성
  const renderTabs = () => `
      <div class="tabs">
        <button class="tab-button" data-tab="공지게시판">공지게시판</button>
        <button class="tab-button" data-tab="자료게시판">자료게시판</button>
      </div>
    `;

  // 자료 게시판 render
  const renderDataBoard = () => {
    const start = (currentPage - 1) * itemsPerPage; // 현재 페이지에 맞는 데이터 시작 인덱스
    const end = start + itemsPerPage; // 현재 페이지에 맞는 데이터 끝 인덱스
    const visibleItems = dataBoardItems.slice(start, end); // 현재 페이지에 해당하는 항목들만 slice()로 추출

    const rows = visibleItems
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

    const totalPages = Math.ceil(dataBoardItems.length / itemsPerPage); // 전체 페이지 수 계산

    const pagination = `
        <div class="pagination">
          ${Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1; // 각 페이지 번호를 생성
            return `
              <button class="pagination-button" data-page="${page}">
                ${page}
              </button>
            `;
          }).join("")}
        </div>
      `; // 페이지 번호 버튼을 동적으로 생성

    return `
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
        ${pagination}
      `;
  };

  // 공지 게시판 render
  const renderNoticeBoard = () => {
    const items = noticeBoardItems
      .map(
        (item) => `
          <div class="notice-item">
            <img src="${item.img}" alt="${item.title}" />
            <h3>${item.title}</h3>
            <p>${item.content}</p>
          </div>
        `,
      )
      .join("");

    return `
      <div class="notice-board">
        <div class="gallery">${items}</div>
      </div>
    `;
  };

  const renderContent = () => {
    return currentTab === "공지게시판"
      ? renderNoticeBoard()
      : renderDataBoard();
  };

  const updateUI = () => {
    document.querySelector("#board-content").innerHTML = renderContent();

    if (currentTab === "자료게시판") {
      const paginationButtons = document.querySelectorAll(".pagination-button");
      paginationButtons.forEach((button) =>
        button.addEventListener("click", (e) => {
          currentPage = parseInt(e.target.dataset.page, 10); // 클릭된 페이지 번호를 currentPage에 설정
          updateUI();
        }),
      );
    }
  };

  setTimeout(() => {
    const tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach((button) =>
      button.addEventListener("click", (e) => {
        currentTab = e.target.dataset.tab;
        currentPage = 1; // 탭 변경 시 페이지 초기화
        updateUI();
      }),
    );

    updateUI();
  });

  // html
  return `
      <h1 id="h1">게시판</h1>
      ${renderTabs()}
      <div id="board-content">${renderContent()}</div>
    `;
}
