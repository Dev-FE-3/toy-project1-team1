import { html } from "lit-html";

import Page from "./pages/Page";
import Support from "./pages/Support";
import download from "./pages/Download";
import pageNotFound from "./pages/PageNotFound";
import boardPage from "./pages/Board";
import boardDataCreatePage from "./pages/BoardDataCreate";

const app = () => {
  init();
  route();
};

const init = () => {
  // const mainMenuList = document.querySelectorAll('nav li a')

  // mainMenuList.forEach(menu => menu.addEventListener('click', navigatePage))
  window.addEventListener("popstate", route);
  document.body.addEventListener("click", navigatePage);
};

const navigatePage = (event) => {
  event.preventDefault();

  const path = event.target.getAttribute("href");
  const anchor = event.target.closest("a");

  if (anchor && anchor.href) {
    history.pushState(null, null, anchor.href);
    route();
  }
};

const route = () => {
  const path = window.location.pathname;
  const content = document.querySelector("#app");
  const downloadPage = new Page("#app", download());
  const supportPage = new Support({ title: "Support" });

  switch (path) {
    case "/":
      content.innerHTML = html`<h1>홈</h1>`.strings;
      break;
    case "/board":
      content.innerHTML = boardPage();
      break;
    case "/absent-mng":
      // downloadPage.render();
      content.innerHTML = html`<h1>부재 관리</h1>`.strings;
      break;
    case "/my-page":
      // content.innerHTML = supportPage.render();
      content.innerHTML = html`<h1>마이 페이지</h1>`.strings;
      break;
    case "/staff-info":
      // content.innerHTML = supportPage.render();
      content.innerHTML = html`<h1>직원 정보</h1>`.strings;
      break;
    case "/board/data/create":
      content.innerHTML = boardDataCreatePage();
      break;
    default:
      content.innerHTML = pageNotFound();
      break;
  }
};

document.addEventListener("DOMContentLoaded", app);
