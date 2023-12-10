const HomePage = require( "../views/render/HomePage.js");
const BookingPage  = require( "../views/render/BookingPage.js");
const AboutUsPage  = require( "../views/render/AboutUsPage.js");
const ContactPage  = require( "../views/render/ContactPage.js");
const DetailBookingPage  = require( "../views/render/DetailBookingPage.js");
const NotFoundPage  = require( "../views/render/NotFoundPage.js");
const { pathToRegex } = require ( "../utils/pathToRegex.js");

const routes = [
  { path: "/404", view: NotFoundPage },
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
module.exports= potentialMatches;
