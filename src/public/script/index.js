import App from "./views/app.js";

const app = new App({
  content: document.querySelector("#main-content")
});

window.addEventListener("DOMContentLoaded", () => {
  app.render();
});
