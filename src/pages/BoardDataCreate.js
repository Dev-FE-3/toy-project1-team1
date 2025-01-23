import { html } from "lit-html";
import "../styles/boardDataCreate.css";

export default function boardDataCreatePage() {
  // 렌더링 할 HTML
  const template = html`
    <section class="board-data-create">
      <div class="board-data-create-header">
        <h1>게시물 작성</h1>
        <button id="createDataBoard" class="btn btn-gray">게시물 등록</button>
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
          <button id="fileButton">파일 선택</button>
        </div>
        <img id="imagePreview" />
        <div class="form-group">
          <label for="content">내용</label>
          <textarea id="content" name="content"></textarea>
        </div>
      </form>
    </section>
  `.strings;

  // DOM 렌더링 후 이벤트 리스너 추가
  setTimeout(() => {
    const createDataBoard = document.querySelector("#createDataBoard");
    const imagePreview = document.getElementById("imagePreview");
    const imageInputBtn = document.getElementById("fileButton");

    let selectedImageFile = null;

    const addImg = async () => {
      try {
        const fileHandle = await window.showOpenFilePicker({
          types: [
            {
              description: "이미지 파일",
              accept: { "image/*": [".jpg", ".png", ".gif"] },
            },
          ],
        });

        const file = await fileHandle[0].getFile();
        selectedImageFile = file; // 선택된 파일을 저장

        const reader = new FileReader();
        reader.onload = function (e) {
          // 파일을 읽고 미리보기 이미지로 표시
          imagePreview.src = e.target.result;
        };
        console.log(reader);
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("파일을 선택하는 도중 오류 발생:", error);
      }
    };

    const submitData = () => {
      const title = document.getElementById("title");
      const writer = document.getElementById("writer");
      const category = document.getElementById("category");
      const content = document.getElementById("content");

      const formData = new FormData();
      formData.append("title", title.value);
      formData.append("writer", writer.value);
      formData.append("category", category.value);
      formData.append("content", content.value);

      if (selectedImageFile) {
        console.log(selectedImageFile.file);
        formData.append("image", selectedImageFile);
      }

      const data = Object.fromEntries(formData.entries());
      console.log(data);
      localStorage.setItem(`category${data.category}`, JSON.stringify(data));

      console.log("로컬 스토리지 저장 완료");

      const storedData = JSON.parse(
        localStorage.getItem(`category${data.category}`),
      );
      console.log("데이터 확인", storedData);

      // 데이터 필드 초기화
      title.value = "";
      writer.value = "";
      category.value = "1";
      content.value = "";
      imagePreview.src = "";
      selectedImageFile = null;
    };

    if (imageInputBtn) {
      imageInputBtn.addEventListener("click", addImg);
    }

    if (createDataBoard) {
      createDataBoard.addEventListener("click", submitData);
    }
  }, 0);

  return template;
}
