import { html } from "lit-html";
import "../styles/boardDataCreate.css";

export default function boardDataCreatePage() {
  // 게시물 작성 페이지
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
