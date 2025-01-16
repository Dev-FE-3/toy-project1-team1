import { html } from "lit-html";

import "../styles/StaffInfo.css";

const staffInfoList = [
  {
    no: 1,
    name: "김철수",
    position: "원장",
    email: "dddd@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 2,
    name: "나진석",
    position: "간호사",
    email: "aaaa@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 3,
    name: "김희진",
    position: "원무과",
    email: "cccc@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 4,
    name: "김선희",
    position: "간호사",
    email: "dddd@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 5,
    name: "정진숙",
    position: "원무과",
    email: "eeee@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 6,
    name: "나창희",
    position: "원장",
    email: "ffff@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 7,
    name: "김정현",
    position: "원무과",
    email: "gggg@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 8,
    name: "이선영",
    position: "간호사",
    email: "hhhh@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 9,
    name: "김미영",
    position: "간호사",
    email: "iiii@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 10,
    name: "이미영",
    position: "간호사",
    email: "jjjj@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 11,
    name: "이영숙",
    position: "간호사",
    email: "kkkk@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 12,
    name: "이미정",
    position: "간호사",
    email: "llll@naver.com",
    phone: "010-1234-5678",
  },
  {
    no: 13,
    name: "정미숙",
    position: "간호사",
    email: "mmmm@naver.com",
    phone: "010-1234-5678",
  },
];

export default function staffInfo() {
  let currentPage = 1;
  const itemsPerPage = 5;

  const renderStaffInfoTable = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const visibleItems = staffInfoList.slice(start, end);

    const rows = visibleItems
      .map(
        (item) => `
        <tr>
          <td>${item.no}</td>
          <td><span class="profile-image"><span class="material-icons">person</span></span></td>
          <td>${item.name}</td>
          <td>${item.position}</td>
          <td>${item.email}</td>
          <td>${item.phone}</td>
        </tr>
      `,
      )
      .join("");

    const totalPages = Math.ceil(staffInfoList.length / itemsPerPage);

    const pagination = `
    <div class="pagination">
      ${Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        return `
          <button class="pagination-button" data-page="${page}">
            ${page}
          </button>
        `;
      }).join("")}
    </div>
  `;

    return `
      <div class="board__table-container">
        <table class="data-board">
          <thead>
            <tr>
              <th>No.</th>
              <th>사진</th>
              <th>이름</th>
              <th>직무</th>
              <th>이메일</th>
              <th>전화번호</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
        ${pagination}
      </div>
    `;
  };

  const renderContent = () => {
    return renderStaffInfoTable();
  };

  const updateUI = () => {
    document.querySelector("#staffinfo-content").innerHTML = renderContent();

    const paginationButtons = document.querySelectorAll(".pagination-button");
    paginationButtons.forEach((button) =>
      button.addEventListener("click", (e) => {
        currentPage = parseInt(e.target.dataset.page, 10);
        updateUI();
      }),
    );
  };

  setTimeout(() => {
    setupUI();
  });

  return `
    <div class="container">
      <h1 class="row1">직원 정보</h1>
      <div id="staffinfo-content">${renderContent()}</div>
    </div>
  `;
}
