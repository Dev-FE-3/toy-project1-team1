export function setActive(elements, target) {
  elements.forEach((el) => el.classList.remove("active"));
  target.classList.add("active");
}

export function updateActiveMenu(menuItems, currentPath) {
  const activeMenu = Array.from(menuItems).find(
    (item) => item.getAttribute("href") === currentPath,
  );

  if (activeMenu) {
    setActive(menuItems, activeMenu);
  }
}
