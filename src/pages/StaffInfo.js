import "../styles/staffinfo-1.css";

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
  // 직원 테이블 렌더링
  const renderStaffInfoTable = () => {
    const rows = staffInfoList
      .map(
        (item) => `
        <tr data-id="${item.no}" class="staff-row">
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

    return `
      <div class="staff-container">
        <table class="staff-board">
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
      </div>
    `;
  };

  // 이벤트 연결 함수
  const bindClickEvents = () => {
    setTimeout(() => {
      // DOM 삽입 이후 이벤트 연결
      const rows = document.querySelectorAll(".staff-row");
      rows.forEach((row) => {
        row.addEventListener("click", () => {
          const staffId = row.getAttribute("data-id");
          // window.location.href = `/staff-1?id=${staffId}`;
          window.location.href = `https://www.google.com`;
        });
      });
    });
  };

  bindClickEvents(); // DOM 이벤트 연결

  return `
    <div class="container">
      <h1>직원 정보</h1>
      ${renderStaffInfoTable()}
    </div>
  `;
}
