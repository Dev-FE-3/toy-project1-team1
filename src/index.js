import Page from "./pages/Page";
import Support from "./pages/Support";
import download from "./pages/Download";
import pageNotFound from "./pages/PageNotFound";

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
  const content = document.querySelector("#content");
  const downloadPage = new Page("#content", download());
  const supportPage = new Support({ title: "Support" });

  switch (path) {
    case "/":
      content.innerHTML = "<h1>Home</h1>";
      break;
    case "/about":
      content.innerHTML = "<h1>About</h1>";
      break;
    case "/download":
      downloadPage.render();
      break;
    case "/support":
      content.innerHTML = supportPage.render();
      break;
    default:
      content.innerHTML = pageNotFound();
      break;
  }
};

document.addEventListener("DOMContentLoaded", app);
