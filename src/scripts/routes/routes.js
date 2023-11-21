import HomePage from '../views/pages/homePage';
import BookingPage from '../views/pages/bookingPage';
import DetailBookingPage from '../views/pages/detailBookingPage';
import AboutUs from '../views/pages/aboutUs';
import Contact from '../views/pages/contact';

const routes = {
  '/': HomePage,
  '/booking': BookingPage,
  '/detail': DetailBookingPage,
  '/aboutus': AboutUs,
  '/contact': Contact,
};
export default routes;
