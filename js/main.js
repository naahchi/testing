// ============
(function () {
  const isMobile = window._IS_MOBILE_;

  function loadComponent(storageKey, url, targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const cachedHTML = sessionStorage.getItem(storageKey);
    if (cachedHTML) {
      target.innerHTML = cachedHTML;
      return;
    }

    fetch(url)
      .then(res => res.text())
      .then(html => {
        sessionStorage.setItem(storageKey, html);
        target.innerHTML = html;
      })
      .catch(() => {
        console.warn("Component load failed:", url);
      });
  }

  function loadCSS(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  if (isMobile) {
    loadCSS("/css/mobile.css");

    loadComponent(
      "mobile-top",
      "/_includes/components/mobile-top.html",
      "mobile-top-zone"
    );

    loadComponent(
      "mobile-bottom",
      "/_includes/components/mobile-bottom.html",
      "mobile-bottom-zone"
    );
  } else {
    loadCSS("/css/desktop.css");

    loadComponent(
      "desktop-extra",
      "/_includes/components/desktop-extra.html",
      "desktop-extra-zone"
    );
  }
})();
// ============
const btn = document.getElementById("themeBtn");
const themeLink = document.getElementById("theme-style");

function setButtonText(theme) {
  btn.textContent = theme === "dark" ? "Dark" : "Light";
}

// Page load par (default dark)
let currentTheme = localStorage.getItem("theme") || "dark";
setButtonText(currentTheme);

// Toggle
btn.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  themeLink.href = currentTheme === "dark" ? "/css/dark.css" : "/css/light.css";
  localStorage.setItem("theme", currentTheme);
  setButtonText(currentTheme);
});
// ============
