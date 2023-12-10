const { getParams } = require("../utils/getParams.js");
const potentialMatches =require( "../router/routes.js");

class App {
  constructor({ content }) {
    this._content = content;
  }
  view() {
    let match = potentialMatches.find(
      (potentialMatch) => potentialMatch.result !== null
    );

    if (!match) {
      match = {
        route: routes[0],
        result: [location.pathname]
      };
    }

    const view = new match.route.view(getParams(match));
    return view;
  }
  async render() {
    this._content.innerHTML = await this.view().getHtml();
    window.addEventListener("load", this.view().afterRender());
  }
}
module.exports = App;
