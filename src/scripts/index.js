import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../styles/styles.css';
import './views/templates/Navbar-Element';
import './views/templates/Footer-Elements';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'boxicons';
AOS.init ();

import App from './views/app';
const app = new App ({
  content: document.querySelector ('.main-content'),
});
window.addEventListener ('hashchange', () => {
  app.renderPage ();
});

window.addEventListener ('load', () => {
  app.renderPage ();
});
