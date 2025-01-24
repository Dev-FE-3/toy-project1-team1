import "../styles/staffinfo.css";

const staffInfoList = [
  {
    no: 1,
    img: "src/image/staff-1.jpg",
    page: 1,
    name: "우미연",
    position: "원장",
    email: "woomiyeon@naver.com",
    phone: "010-2847-9365",
  },
  {
    no: 2,
    img: "src/image/staff-2.jpg",
    page: 2,
    name: "차주현",
    position: "간호사",
    email: "chajuhyun@naver.com",
    phone: "010-2721-9932",
  },
  {
    no: 3,
    img: "src/image/staff-2.jpg",
    page: 3,
    name: "방소라",
    position: "원무과",
    email: "bangsora@naver.com",
    phone: "010-5734-1982",
  },
  {
    no: 4,
    img: "src/image/staff-2.jpg",
    page: 2,
    name: "정유진",
    position: "임상병리사",
    email: "jungyujin@naver.com",
    phone: "010-4827-3651",
  },
  {
    no: 5,
    img: "src/image/staff-3.jpg",
    page: 2,
    name: "최현우",
    position: "원무과",
    email: "choihw@naver.com",
    phone: "010-9245-7163",
  },
  {
    no: 6,
    img: "src/image/staff-3.jpg",
    page: 2,
    name: "강도윤",
    position: "간호사",
    email: "kangdoyun@naver.com",
    phone: "010-3467-8921",
  },
  {
    no: 7,
    img: "src/image/staff-2.jpg",
    page: 2,
    name: "윤서아",
    position: "임상병리사",
    email: "yoonseoa@naver.com",
    phone: "010-7823-4561",
  },
  {
    no: 8,
    img: "src/image/staff-3.jpg",
    page: 2,
    name: "장민재",
    position: "방사선사",
    email: "jangminjae@naver.com",
    phone: "010-2398-5647",
  },
  {
    no: 9,
    img: "src/image/staff-2.jpg",
    page: 2,
    name: "송하은",
    position: "원무과",
    email: "songhaeun@naver.com",
    phone: "010-6542-9837",
  },
  {
    no: 10,
    img: "src/image/staff-3.jpg",
    page: 2,
    name: "임지훈",
    position: "간호사",
    email: "limjihoon@naver.com",
    phone: "010-8934-2756",
  },
  {
    no: 11,
    img: "src/image/staff-3.jpg",
    page: 2,
    name: "한소율",
    position: "임상병리사",
    email: "hansoyul@naver.com",
    phone: "010-4567-8912",
  },
  {
    no: 12,
    img: "src/image/staff-3.jpg",
    page: 2,
    name: "오승현",
    position: "방사선사",
    email: "ohseunghyun@naver.com",
    phone: "010-7891-2345",
  },
  {
    no: 13,
    img: "src/image/staff-2.jpg",
    page: 2,
    name: "신예진",
    position: "간호사",
    email: "shinyejin@naver.com",
    phone: "010-3456-7891",
  },
  {
    no: 14,
    img: "src/image/staff-3.jpg",
    page: 2,
    name: "권도현",
    position: "원무과",
    email: "kwondohyun@naver.com",
    phone: "010-9876-5432",
  },
  {
    no: 15,
    img: "src/image/staff-3.jpg",
    page: 2,
    name: "백지호",
    position: "임상병리사",
    email: "baekjiho@naver.com",
    phone: "010-2345-6789",
  },
  {
    no: 16,
    img: "src/image/staff-2.jpg",
    page: 2,
    name: "서유안",
    position: "방사선사",
    email: "seoyuan@naver.com",
    phone: "010-8765-4321",
  },
  {
    no: 17,
    img: "src/image/staff-3.jpg",
    page: 2,
    name: "남동현",
    position: "간호사",
    email: "namdonghyun@naver.com",
    phone: "010-5678-9123",
  },
  {
    no: 18,
    img: "src/image/staff-3.jpg",
    page: 2,
    name: "구현서",
    position: "원무과",
    email: "koohyunseo@naver.com",
    phone: "010-4321-8765",
  },
  {
    no: 19,
    img: "src/image/staff-2.jpg",
    page: 2,
    name: "황수진",
    position: "임상병리사",
    email: "hwangsujin@naver.com",
    phone: "010-6789-1234",
  },
  {
    no: 20,
    img: "src/image/staff-3.jpg",
    page: 2,
    name: "전승우",
    position: "방사선사",
    email: "jeonseungwoo@naver.com",
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
          <td><img src="${item.img}" class="staff-img" alt="${item.name}" /></td>
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
        row.addEventListener("click", (e) => {
          const staffId = e.currentTarget.getAttribute("data-id");
          const staffPageUrl = `/staff-info/mypage_${staffId}`;
          const testPageExists = true; // 여기에 페이지 확인 로직을 추가할 수도 있음

          if (testPageExists) {
            // 해당 번호의 페이지가 존재하면 이동
            window.location.href = staffPageUrl;
          }
        });
      });
    });
  };

  bindClickEvents(); // DOM 이벤트 연결

  return `
    <div class="container-staff">
      <h1>직원 정보</h1>
      ${renderStaffInfoTable()}
    </div>
  `;
}
