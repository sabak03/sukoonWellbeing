async function loadPartial(id, file) {
  const element = document.getElementById(id);

  if (!element) return;

  const response = await fetch(file);
  const html = await response.text();

  element.innerHTML = html;
}

async function loadLayout() {
  await loadPartial("header", "/partials/header.html");
  await loadPartial("footer", "/partials/footer.html");

  if (typeof initMenu === "function") {
    initMenu();
  }
}

loadLayout();
