const themeBtn = document.getElementById("theme-toggle");

function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    themeBtn.textContent = "🌙";
  } else {
    document.documentElement.classList.remove("dark");
    themeBtn.textContent = "☀️";
  }
  localStorage.setItem("theme", theme);
}

themeBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.contains("dark");
  applyTheme(isDark ? "light" : "dark");
});

applyTheme(localStorage.getItem("theme") || "dark");
