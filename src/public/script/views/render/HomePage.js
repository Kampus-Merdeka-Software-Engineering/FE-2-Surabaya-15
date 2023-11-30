import TemplatePage from "../TemplatePage.js";
import { render } from "../after_render/home.js";

export default class extends TemplatePage {
  constructor(params) {
    super(params);
    this.setTitle("Home Page");
    this.setNavbar(document.getElementById("navbar_home"));
  }
  async getHtml() {
    return `
      <section>
        <section class="main-content">
          <div class="jumbotron">
            <div class="jumbotron_title">
              <h1>Search Your Hotels</h1>
            </div>
            <div class="jumbotron_search">
              <form id="form-search">
                <div class="search_item">
                  <div class="city">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      name="kota"
                    >
                      <option value="Jakarta">Jakarta</option>
                      <option value="Bandung">Bandung</option>
                      <option value="Medan">Medan</option>
                      <option value="Bali">Bali</option>
                    </select>
                  </div>
                  <div class="checkin">
                    <label for="dateCheckIn">Check In</label>
                    <input
                      type="date"
                      id="dateCheckIn"
                      placeholder="Date Check In"
                    />
                  </div>
                  <div class="checkout">
                    <label for="dateCheckOut">Check Out</label>
                    <input
                      type="date"
                      id="dateCheckOut"
                      placeholder="Date Check Out"
                    />
                  </div>
                  <div class="number_room">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option hidden>Number of rooms</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <button class="btn-search" type="submit">Search</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section class="main-content" id="result-search-container">
          <div class="container">
            <div class="items_title">
              <h1
                data-aos-duration="2000"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                BEST OFFERS
              </h1>
              <h3
                data-aos-duration="2000"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                BOOKING OUR TOP HOTELS
              </h3>
            </div>
            <div class="swiper mySwiper">
              <div class="swiper-wrapper" id="best_offer_container"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section class="main-content">
          <div class="container">
            <div class="items_title">
              <h1
                data-aos-duration="2000"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                TESTIMONIALS
              </h1>
              <h3
                data-aos-duration="2000"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                WHATS OURS CUSTOMER SAY ABOUT US
              </h3>
            </div>
            <div class="swiper mySwiper-testi">
              <div class="swiper-wrapper" id="container_testi_wrapper"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
            <div
              class=""
              data-aos-duration="2000"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div class="form-testi h-100">
                <h1 class="items_title">Form Testimoni</h1>
                <form class="form_testi">
                  <div class="items_input_testi">
                    <label for=" inputName" class="form-label">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputName"
                      placeholder="Enter your name"
                      name="nama"
                      required
                    />
                  </div>
                  <div class="items_input_testi">
                    <label for=" inputEmail" class="form-label">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail"
                      placeholder="Enter your email"
                      name="email"
                      required
                    />
                  </div>
                  <div class="items_input_testi">
                    <label for=" inputMessage" class="form-label"
                      >Message</label
                    >
                    <textarea
                      class="form-control"
                      id="inputMessage"
                      rows="3"
                      placeholder="Describe your experience"
                      name="pesan"
                      required
                    ></textarea>
                  </div>
                  <div class="btn-send-content">
                    <button class="btn-send" type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    `;
  }
  async afterRender() {
    return render();
  }
}
