const TemplatePage = require ( "../TemplatePage.js");

module.exports= class extends TemplatePage {
  constructor(params) {
    super(params);
    this.setTitle("Not Found");
  }

  async getHtml() {
    return `
      <div class="notFound">
      <p>Page Not Found</p>
      <hr>
      <p>404</p>
      <hr>
      </div>
    `;
  }
}
