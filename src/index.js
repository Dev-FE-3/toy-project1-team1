import { html } from "lit-html";

import Page from "./pages/Page";
import Support from "./pages/Support";
import download from "./pages/Download";
import pageNotFound from "./pages/PageNotFound";
import board from "./pages/Board";
import boardDataCreatePage from "./pages/BoardDataCreate";
import staffInfo from "./pages/StaffInfo";

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
    updateActiveMenu();
  }
};

const updateActiveMenu = () => {
  const allMenuItems = document.querySelectorAll("nav ul li a");
  const currentPath = window.location.pathname;

  // 모든 메뉴에서 active 클래스를 제거
  allMenuItems.forEach((item) => {
    item.classList.remove("active");
  });

  // 현재 경로에 해당하는 메뉴에 active 클래스를 추가
  const activeMenu = Array.from(allMenuItems).find(
    (item) => item.getAttribute("href") === currentPath,
  );
  if (activeMenu) {
    activeMenu.classList.add("active");
  }
};

// 역할에 따라 메뉴 표시
const updateNavMenu = () => {
  const role = sessionStorage.getItem("role"); // 'user' 또는 'admin'

  // 모든 메뉴 숨기기
  document.querySelectorAll(".user-only, .admin-only").forEach((menu) => {
    menu.style.display = "none";
  });

  // 역할에 맞는 메뉴만 표시
  if (role === "user") {
    document.querySelectorAll(".user-only").forEach((menu) => {
      menu.style.display = "block";
    });
  } else if (role === "admin") {
    document.querySelectorAll(".admin-only").forEach((menu) => {
      menu.style.display = "block";
    });
  }
};

const route = () => {
  const path = window.location.pathname;
  const content = document.querySelector("#app");
  const downloadPage = new Page("#app", download());
  const supportPage = new Support({ title: "Support" });
  const boardPage = new Page("#app", board());
  const staffInfoPage = new Page("#app", staffInfo());

  switch (path) {
    case "/":
      //mylogin.render();
      content.innerHTML = homePage.render();
      break;
    case "/home":
      content.innerHTML = homePage.render();
      break;
    case "/board":
      boardPage.render();
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
      staffInfoPage.render();
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
