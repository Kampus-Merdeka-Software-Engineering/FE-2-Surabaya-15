import { hamburger } from "../utils/hamburger.js";
import { navigateTo } from "../utils/navigate.js";

export default class {
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
