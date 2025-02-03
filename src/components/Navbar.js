import "../styles/main.css";
import { setActive, updateActiveMenu } from "./SetActive.js";

export default class Navbar {
  constructor(options) {
    const { name = "코드깎는정형외과", isAdmin = true } = options;
    this.name = name;
    this.isAdmin = isAdmin;
  }

  render() {
    return `
        <a class="logo" href=${this.isAdmin ? "/staff-info" : "/home"}>
          <span class="material-icons"> vaccines </span>코드깎는정형외과
        </a>
        <div>
          <ul>
          ${
            (!this.isAdmin &&
              `<li>
              <a href="/home"><span class="material-icons"> home </span>홈</a>
            </li>`) ||
            ""
          }
          ${
            (this.isAdmin &&
              `<li>
              <a href="/staff-info"><span class="material-icons"> group </span>직원 정보</a>
            </li>`) ||
            ""
          }
          ${
            (this.isAdmin &&
              `<li>
              <a href="/boardAdminPage"><span class="material-icons"> notifications </span>게시판</a>
            </li>`) ||
            ""
          }
          ${
            (!this.isAdmin &&
              `<li>
              <a href="/board"><span class="material-icons"> notifications </span>게시판</a>
            </li>`) ||
            ""
          }
          ${
            (!this.isAdmin &&
              `<li>
              <a href="/absent-mng"><span class="material-icons"> event </span>부재 관리</a>
            </li>`) ||
            ""
          }
          ${
            (!this.isAdmin &&
              `<li>
              <a href="/my-page"><span class="material-icons"> account_circle </span>마이페이지</a>
            </li>`) ||
            ""
          }
          </ul>
        </div>
    `;
  }

  // 페이지 로드 시 활성화 상태 설정
  initActiveMenu() {
    const menuItems = document.querySelectorAll("nav ul li a");
    const currentPath = window.location.pathname;
    updateActiveMenu(menuItems, currentPath);
  }
}
