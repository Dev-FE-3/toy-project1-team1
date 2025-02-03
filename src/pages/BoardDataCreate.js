import { html } from "lit-html";
import "../styles/boardDataCreate.css";

export default function boardDataCreatePage() {
  // 렌더링 할 HTML
  const template = html`
    <section class="board-data-create">
      <div class="board-data-create-header">
        <h1>게시물 작성</h1>
      </div>
      <div class="board-data-create-addboard">
        <button id="createDataBoard" class="board-data-create__btn" disabled>
          게시물 등록
        </button>
      </div>
      <form>
        <div class="form-group">
          <input type="text" id="title" name="title" placeholder="제목" />
        </div>

        <div class="form-group">
          <div class="form-group-item">
            <label for="category">게시판 : </label>
            <select id="category" name="category">
              <option value="default">선택하세요</option>
              <option value="1">공지게시판</option>
              <option value="2">자료게시판</option>
            </select>
          </div>

          <div class="form-group-item">
            <input
              type="text"
              id="writer"
              name="writer"
              placeholder="작성자"
              autocomplete="off"
            />
          </div>
          <div
            class="form-group-item"
            id="fileButtonContainer"
            style="display: none;"
          >
            <button
              id="fileButton"
              class="board-data-create__btn"
              type="button"
            >
              사진 등록
            </button>
            <img id="imagePreview" />
          </div>
        </div>
        <div class="dividingLine"></div>
        <div class="form-group">
          <textarea
            id="content"
            name="content"
            placeholder="내용을 입력해 주세요"
          ></textarea>

          <img id="imagePreview" />
        </div>
      </form>
    </section>
  `.strings;

  // DOM 렌더링 후 이벤트 리스너 추가
  setTimeout(() => {
    const createDataBoard = document.getElementById("createDataBoard");

    const title = document.getElementById("title");
    const writer = document.getElementById("writer");
    const content = document.getElementById("content");

    const imagePreview = document.getElementById("imagePreview");
    const imageInputBtn = document.getElementById("fileButton");

    const category = document.getElementById("category");
    const fileButtonContainer = document.getElementById("fileButtonContainer");

    let selectedImageFile = null;

    // form 입력 값 체크
    const checkFormValidity = () => {
      if (
        title.value.trim() !== "" &&
        writer.value.trim() !== "" &&
        category.value !== "default" &&
        content.value.trim() !== ""
      ) {
        createDataBoard.disabled = false;
      } else {
        createDataBoard.disabled = true;
      }
    };

    // 카테고리에 맞춰 img 태그 ON/DFF
    const handleCategoryBtn = () => {
      const selectedValue = category.value;

      if (selectedValue === "1") {
        fileButtonContainer.style.display = "block";
      } else {
        fileButtonContainer.style.display = "none";
        imagePreview.src = "";
      }
    };

    // img 추가 하기
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
        selectedImageFile = file;

        const reader = new FileReader();
        reader.onload = function (e) {
          imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
      } catch (error) {
        console.error("파일을 선택하는 도중 오류 발생:", error);
      }
    };

    // 입력받은 데이터 저장
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
        formData.append("image", selectedImageFile);
      } else {
        formData.append("image", null);
      }
      const data = Object.fromEntries(formData.entries());

      if (
        data.title === "" ||
        data.writer === "" ||
        data.category === "default" ||
        data.content === ""
      ) {
        alert("필드를 채워주세요.");
        return;
      }

      localStorage.setItem(`category${data.category}`, JSON.stringify(data));

      const isFinished = confirm("글을 게시 하시겠습니까?");
      if (isFinished) {
        window.location.href = "/board";
        title.value = "";
        writer.value = "";
        category.value = "default";
        content.value = "";
        imagePreview.src = "";
        selectedImageFile = null;
        checkFormValidity();
      }
    };

    if (title) {
      title.addEventListener("input", checkFormValidity);
    }
    if (writer) {
      writer.addEventListener("input", checkFormValidity);
    }
    if (category) {
      category.addEventListener("change", checkFormValidity);
    }
    if (content) {
      content.addEventListener("input", checkFormValidity);
    }
    if (imageInputBtn) {
      imageInputBtn.addEventListener("click", addImg);
    }
    if (createDataBoard) {
      createDataBoard.addEventListener("click", submitData);
    }
    if (category) {
      category.addEventListener("change", handleCategoryBtn);
    }
    checkFormValidity();
  }, 0);

  return template;
}
