const navLinks = document.getElementById("navLinks");
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector(".navbar");

  function toggleMenu() {
    navLinks.classList.toggle("active");
  }
  document.addEventListener("click", function (event) {
    const clickedInsideNavbar = navbar.contains(event.target);

    if (!clickedInsideNavbar) {
      navLinks.classList.remove("active");
    }
  });

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
