import { html } from "lit-html";
import Component from "./Component.js";

export default class Navbar {
  constructor(options) {
    const { name = "코드깎는정형외과", isAdmin = false } = options;
    this.name = name;
    this.isAdmin = isAdmin;
  }

  render() {
    return html`
      <section>
        <div class="logo">${this.name}</div>
        <nav>
          <ul>
            <li><a href="/">홈</a></li>
            <li><a href="/board">게시판</a></li>
            <li><a href="/absent-mng">부재 관리</a></li>
            <li><a href="/my-page">마이 페이지</a></li>
            ${this.isAdmin
              ? html`<li><a href="/staff-info">직원 정보</a></li>`
              : ""}
          </ul>
        </nav>
      </section>
    `.strings;
  }
}
