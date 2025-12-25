// Minimal JS: mobile nav toggle + footer year
(function () {
  const yearEls = document.querySelectorAll("#year");
  yearEls.forEach((el) => (el.textContent = new Date().getFullYear()));

  const btn = document.getElementById("navToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
})();
