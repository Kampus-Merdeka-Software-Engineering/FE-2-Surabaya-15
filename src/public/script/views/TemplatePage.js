const { hamburger } = require ( "../utils/hamburger.js");
const { navigateTo }= require("../utils/navigate.js");

module.exports= class {
  constructor(params) {
    this.params = params;
    this.setHamburger = hamburger();
    this.setNavigate = navigateTo();
  }
  setTitle(title) {
    document.title = title;
  }

  setNavbar(e) {
    e.classList.add("active");
  }

  async getHtml() {
    return "";
  }
  async afterRender() {}
}
