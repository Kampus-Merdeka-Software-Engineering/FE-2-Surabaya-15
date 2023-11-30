export const navigateTo = () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      history.pushState(null, null, e.target.href);
    }
  });
};
