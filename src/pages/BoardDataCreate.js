import "../styles/boardDataCreate.css";

export default function createPost() {
  // 폼 제출 처리
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 동작 방지

    // 폼 데이터 가져오기
    const title = document.getElementById("title").value;
    const writer = document.getElementById("writer").value;
    const category = document.getElementById("category").value;
    const content = document.getElementById("content").value;

    // 게시물 데이터 추가
    const newPost = {
      no: Math.floor(Math.random() * 1000), // 임시로 번호 생성
      title,
      author: writer,
      date: new Date().toLocaleDateString(),
    };

    // 로컬스토리지에서 기존 데이터를 가져와서 추가
    let dataBoardItems =
      JSON.parse(localStorage.getItem("dataBoardItems")) || [];
    let noticeBoardItems =
      JSON.parse(localStorage.getItem("noticeBoardItems")) || [];

    // 카테고리에 따라 게시판에 추가
    if (category === "2") {
      dataBoardItems.push(newPost);
      localStorage.setItem("dataBoardItems", JSON.stringify(dataBoardItems));
    } else {
      noticeBoardItems.push(newPost);
      localStorage.setItem(
        "noticeBoardItems",
        JSON.stringify(noticeBoardItems),
      );
    }

    // 게시물 작성 후 목록으로 돌아가기
    window.location.href = "/board"; // 게시물 목록 페이지로 이동
  };

  // 페이지 로드 후 이벤트 리스너 설정
  document.addEventListener("DOMContentLoaded", () => {
    // 폼에 submit 이벤트 리스너 연결
    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit); // 폼이 제출되면 handleSubmit 실행
  });

  return `
    <section class="board-data-create">
      <div class="board-data-create-header">
        <h1>게시물 작성</h1>
        <button id="createDataBoard" class="btn btn-gray" onclick="window.location.href='/board'">게시물 목록</button>
      </div>
      <form>
        <div class="form-group">
          <label for="title">제목</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div class="form-group">
          <label for="writer">작성자</label>
          <input type="text" id="writer" name="writer" required />
        </div>
        <div class="form-group">
          <label for="category">게시판</label>
          <select id="category" name="category">
            <option value="1">공지게시판</option>
            <option value="2">자료게시판</option>
          </select>
        </div>
        <div class="form-group">
          <label for="image">사진 등록</label>
          <input type="file" id="image" name="image" multiple />
        </div>
        <div class="form-group">
          <label for="content">내용</label>
          <textarea id="content" name="content" required></textarea>
        </div>
        <button type="submit" class="btn btn-blue">작성</button>
      </form>
    </section>
  `;
}
