document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro-screen");
  const logo = document.getElementById("intro-logo");

  setTimeout(() => { logo.classList.add("opacity-100"); }, 300);

  setTimeout(() => {
    intro.style.opacity = "0";
    setTimeout(() => intro.remove(), 800);
    document.body.style.overflow = "auto";
  }, 6500);
});
