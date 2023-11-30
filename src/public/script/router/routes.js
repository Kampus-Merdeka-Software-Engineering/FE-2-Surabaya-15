import HomePage from "../views/render/HomePage.js";
import BookingPage from "../views/render/BookingPage.js";
import AboutUsPage from "../views/render/AboutUsPage.js";
import ContactPage from "../views/render/ContactPage.js";
import DetailBookingPage from "../views/render/DetailBookingPage.js";
import NotFoundPage from "../views/render/NotFoundPage.js";
import { pathToRegex } from "../utils/pathToRegex.js";

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
export default potentialMatches;
