import myPage from "./pages/MyPage";
import login from "./pages/Login";
import Page from "./pages/Page";
import pageNotFound from "./pages/PageNotFound";
import absenceMng from "./pages/Absence-mng";
import Home from "./pages/Home";
import myPageAdm_1 from "./pages/MypageAdm_1";
import myPageAdm_2 from "./pages/MypageAdm_2";
import myPageAdm_3 from "./pages/MypageAdm_3";
import Navbar from "./components/Navbar";
import board from "./pages/Board";
import boardadmin from "./pages/Board-admin";
import boardDataCreatePage from "./pages/BoardDataCreate";
import staffInfo from "./pages/StaffInfo";
import { setActive, updateActiveMenu } from "./components/SetActive.js";

const app = () => {
  init();
  route();
};

const init = () => {
  window.addEventListener("popstate", route);
  document.body.addEventListener("click", navigatePage);
};

const navigatePage = (event) => {
  event.preventDefault();

  const anchor = event.target.closest("a");

  if (anchor && anchor.href) {
    history.pushState(null, null, anchor.href);
    route();

    const allMenuItems = document.querySelectorAll("nav ul li a");
    const currentPath = window.location.pathname;

    // 기존 방식 대신 유틸 함수 사용
    updateActiveMenu(allMenuItems, currentPath);
  }
};

const route = () => {
  const path = window.location.pathname;
  const content = document.querySelector("#app");
  const nav = document.querySelector("#nav");
  const absenceMngPage = new Page("#app", absenceMng());
  const homePage = new Home();

  const myPagePage = new Page("#app", myPage());
  const mylogin = new Page("main", login());
  const myPageAdmin_1 = new Page("#app", myPageAdm_1());
  const myPageAdmin_2 = new Page("#app", myPageAdm_2());
  const myPageAdmin_3 = new Page("#app", myPageAdm_3());
  const boardPage = new Page("#app", board());
  const boardAdminPage = new Page("#app", boardadmin());
  const staffInfoPage = new Page("#app", staffInfo());
  const navBar = new Navbar({ isAdmin: false });
  const navBarMng = new Navbar({ isAdmin: true });

  if (window.localStorage.getItem("user") === "manager") {
    nav.innerHTML = navBarMng.render();
    navBarMng.initActiveMenu(); // 메뉴 활성화
  } else {
    nav.innerHTML = navBar.render();
    navBar.initActiveMenu(); // 메뉴 활성화
  }

  switch (path) {
    case "/":
      mylogin.render();
      break;
    case "/home":
      content.innerHTML = homePage.render();
      break;
    case "/board":
      boardPage.render();
      break;
    case "/absent-mng":
      absenceMngPage.render();
      break;
    case "/my-page":
      myPagePage.render();
      break;
    case "/boardAdminPage":
      boardAdminPage.render();
      break;
    case "/staff-info":
      staffInfoPage.render();
      break;
    case "/board/data/create":
      content.innerHTML = boardDataCreatePage();
      break;
    case "/staff-info/mypage_1":
      myPageAdmin_1.render();
      break;
    case "/staff-info/mypage_2":
      myPageAdmin_2.render();
      break;
    case "/staff-info/mypage_3":
      myPageAdmin_3.render();
      break;
    default:
      content.innerHTML = pageNotFound();
      break;
  }
};

document.addEventListener("DOMContentLoaded", app);
