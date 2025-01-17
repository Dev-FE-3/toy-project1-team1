import { html } from "lit-html";

import myPage from "./pages/MyPage";
import login from "./pages/Login";
import Page from "./pages/Page";
import Support from "./pages/Support";
import download from "./pages/Download";
import pageNotFound from "./pages/PageNotFound";
import absenceMng from "./pages/Absence-mng";
import Home from "./pages/Home"

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
  const absenceMngPage = new Page("#app", absenceMng());
  const homePage = new Home();
  const downloadPage = new Page("#app", download());
  const supportPage = new Support({ title: "Support" });
  const myPagePage = new Page("#app", myPage());
  const mylogin = new Page("main", login());

  switch (path) {
    case "/":
      mylogin.render();
      break;
    case "/home":
      content.innerHTML = homePage.render();
      break;
    case "/board":
      content.innerHTML = html`<h1>게시판</h1>`.strings;
      break;
    case "/absent-mng":
      absenceMngPage.render();
      break;
    case "/my-page":
      myPagePage.render();
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
