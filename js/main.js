document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  if (menuIcon && navLinks) {
    const toggleMenu = () => {
      const isOpen = navLinks.classList.toggle("active");
      menuIcon.setAttribute("aria-expanded", String(isOpen));
    };

    menuIcon.addEventListener("click", toggleMenu);
    menuIcon.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleMenu();
      }
    });

    // Close after clicking a link
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("active"))
    );

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
        navLinks.classList.remove("active");
        menuIcon.setAttribute("aria-expanded", "false");
      }
    });
  }
});
