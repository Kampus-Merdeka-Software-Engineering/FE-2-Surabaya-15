import HomePage from "./views/HomePage.js";
import BookingPage from "./views/BookingPage.js";
import AboutUsPage from "./views/AboutUsPage.js";
import ContactPage from "./views/ContactPage.js";
import DetailBookingPage from "./views/DetailBookingPage.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
};

const router = async () => {
  const routes = [
    { path: "/", view: HomePage },
    { path: "/detail/:id", view: DetailBookingPage },
    { path: "/booking", view: BookingPage },
    { path: "/aboutus", view: AboutUsPage },
    { path: "/contact", view: ContactPage }
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path))
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );
  if (!match) {
    match = {
      route: routes[0],
      isMatch: [location.pathname]
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#main-content").innerHTML = await view.getHtml();
  const utils = document.querySelector("#utils");
  if (match.route.path === "/") {
    utils.setAttribute("src", `/public/script/utils/home.js`);
  }
  if (match.route.path === "/booking") {
    utils.setAttribute("src", `/public/script/utils/booking.js`);
  }
  if (match.route.path === "/detail/:id") {
    utils.setAttribute("src", `/public/script/utils/detail.js`);
  }
  if (match.route.path === "/aboutus") {
    utils.setAttribute("src", `/public/script/utils/aboutus.js`);
  }
  if (match.route.path === "/contact") {
    utils.setAttribute("src", `/public/script/utils/contact.js`);
  }
};

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      navigateTo(e.target.href);
    }
  });

  router();
});
