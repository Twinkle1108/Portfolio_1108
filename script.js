
// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Toggle theme between light and dark
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const icon = document.getElementById("themeIcon");
  icon.classList.toggle("uil-moon");
  icon.classList.toggle("uil-sun");
}
