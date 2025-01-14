import { html } from "lit-html";
import "../styles/boardDataCreate.css";

export default function boardDataCreatePage() {
  const firstUpdated = () => {
    const createDataBoard = this.shadowRoot.querySelector("#createDataBoard");
    createDataBoard.addEventListener("click", () => {
      const title = this.shadowRoot.getElementById("title").value;
      const writer = this.shadowRoot.getElementById("writer").value;
      const category = this.shadowRoot.getElementById("category").value;
      const content = this.shadowRoot.getElementById("content").value;
      const image = this.shadowRoot.getElementById("image").files[0];
      const formData = new FormData();
      formData.append("title", title);
      formData.append("writer", writer);
      formData.append("category", category);
      formData.append("content", content);
      formData.append("image", image);
      const data = Object.fromEntries(formData);

      fetch("http://localhost:8080/board/data/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.success) {
            alert("게시물이 성공적으로 등록되었습니다.");
            window.location.href = "/board/data/list";
          } else {
            alert("게시물 등록에 실패했습니다. 다시 시도해주세요.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("서버 오류가 발생했습니다. 나중에 다시 시도해주세요.");
        });
    });
  };

  return html`
    <div class="board-data-create">
      <div class="board-data-create-header">
        <h1>게시물 작성</h1>
        <button class="btn btn-gray">게시물 등록</button>
      </div>
      <form>
        <div class="form-group">
          <label for="title">제목</label>
          <input type="text" id="title" name="title" />
        </div>
        <div class="form-group">
          <label for="writer">작성자</label>
          <input type="text" id="writer" name="writer" />
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
          <textarea id="content" name="content"></textarea>
        </div>
        <button type="submit" class="btn btn-blue">작성</button>
      </form>
    </div>
  `.strings;
}
