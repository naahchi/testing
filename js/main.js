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
