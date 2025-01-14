import { html } from "lit-html";

import Page from "./pages/Page";
import Support from "./pages/Support";
import download from "./pages/Download";
import pageNotFound from "./pages/PageNotFound";
import home from "./pages/Home/Home"

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
  const homePage = new Page("#app",home());
  const downloadPage = new Page("#app", download());
  const supportPage = new Support({ title: "Support" });

  switch (path) {
    case "/":
      homePage.render();
      // content.innerHTML = html`<h1>홈</h1>`.strings;
      break;
    case "/board":
      content.innerHTML = html`<h1>게시판</h1>`.strings;
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
    default:
      content.innerHTML = pageNotFound();
      break;
  }
};

document.addEventListener("DOMContentLoaded", app);
