export const hamburger = () => {
  document.querySelector(".btn-hamburger").addEventListener("click", () => {
    const navbar = document.querySelector("ul");
    navbar.classList.add("active");
  });
  document.querySelector("main").addEventListener("click", () => {
    const navbar = document.querySelector("ul");
    navbar.classList.remove("active");
  });
};
