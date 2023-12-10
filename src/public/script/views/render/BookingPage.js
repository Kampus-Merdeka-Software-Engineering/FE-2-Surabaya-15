const TemplatePage = require ( "../TemplatePage.js");
const { render }= require( "../after_render/booking.js");

module.exports= class extends TemplatePage {
  constructor(params) {
    super(params);
    this.setTitle("Booking Page");
    this.setNavbar(document.getElementById("navbar_booking"));
  }

  async getHtml() {
    return `
      <section class="container" style="margin-top:120px;">
        <div class="loader-container">
          <span class="loader"></span>
        </div>
        <section class="booking_container">
          <div class="title">
            <h1>Jakarta</h1>
            <hr class="line" />
          </div>
          <div class="booking_item">
            <div class="swiper mySwiper-jakarta">
              <div class="swiper-wrapper" id="booking_container_jakarta"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section class="booking_container">
          <div class="title">
            <h1>Bandung</h1>
            <hr class="line" />
          </div>
          <div class="booking_item">
            <div class="swiper mySwiper-bandung">
              <div class="swiper-wrapper" id="booking_container_bandung"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section class="booking_container">
          <div class="title">
            <h1>Medan</h1>
            <hr class="line" />
          </div>
          <div class="booking_item">
            <div class="swiper mySwiper-medan">
              <div class="swiper-wrapper" id="booking_container_medan"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section class="booking_container">
          <div class="title">
            <h1>Bali</h1>
            <hr class="line" />
          </div>
          <div class="booking_item">
            <div class="swiper mySwiper-bali">
              <div class="swiper-wrapper" id="booking_container_bali"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-pagination"></div>
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
