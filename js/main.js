// ============
const btn = document.getElementById("themeBtn");
const themeLink = document.getElementById("theme-style");

function setButtonText(theme) {
  // btn.textContent = theme === "dark" ? "Dark" : "Light";
  btn.textContent = theme === "light" ? "Light" : "Dark";
}

// Page load par (default dark)
// let currentTheme = localStorage.getItem("theme") || "dark";
let currentTheme = localStorage.getItem("theme") || "light";
setButtonText(currentTheme);

// Toggle
btn.addEventListener("click", () => {
  // currentTheme = currentTheme === "dark" ? "light" : "dark";
  currentTheme = currentTheme === "light" ? "dark" : "light";
  // themeLink.href = currentTheme === "dark" ? "dark.css" : "light.css";
  themeLink.href = currentTheme === "light" ? "css/light.css" : "css/dark.css";
  localStorage.setItem("theme", currentTheme);
  setButtonText(currentTheme);
});
// ============
