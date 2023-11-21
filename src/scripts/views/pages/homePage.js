import {async} from 'regenerator-runtime';

const HomePage = {
  async render () {
    return `
        <section class="container-fluid p-0">
            <div class="jumbotron">
                <div class="jumbotron_title">
                    <h1>Search Your Hotels</h1>
                </div>
                <div class="jumbotron_search">
                    <form>
                        <div class="search_item">
                            <div class="city">
                                <select class="form-select" aria-label="Default select example">
                                    <option hidden>Select City</option>
                                    <option value="jakart">Jakarta</option>
                                    <option value="bandung">Bandung</option>
                                    <option value="medan">Medan</option>
                                    <option value="bali">Bali</option>
                                </select>
                            </div>
                            <div class="checkin">
                                <label for="dateCheckIn">Check In</label>
                                <input type="date" id="dateCheckIn" placeholder="Date Check In">
                            </div>
                            <div class="checkout">
                                <label for="dateCheckOut">Check Out</label>
                                <input type="date" id="dateCheckOut" placeholder="Date Check Out">
                            </div>
                            <div class="number_room">
                                <select class="form-select" aria-label="Default select example">
                                    <option hidden>Number of rooms</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <button class="btn-search">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section class="container-fluid content_container">
            <div class="container">
                <div class="items_title">
                    <h1
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    >BEST OFFERS</h1>
                    <h3
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    >BOOKING OUR TOP HOTELS</h3>
                </div>
                <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="card mb-3"
                            data-aos-duration="2000"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            >
                                <img src="./images/cempaka mas1.png" alt="" />
                                <div class="items">
                                    <div class="card_title">
                                        <h1>The Yogyakarta SP Jakarta Hotel & Spa</h1>
                                        <p class="d-flex gap-1"><box-icon name='star'></box-icon> 4.1</p>
                                    </div>
                                    <h2>IDR 327.912</h2>
                                    <p class="facility m-0">Facility</p>
                                    <p class="facility_item">Outdoor Pool, Spa, Massage, Reception</p>
                                    <div class="location_content">
                                        <p><box-icon type='solid' name='map'></box-icon> Jakarta</p>
                                        <a href="#/detail">BOOKING <br> NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="card mb-3"
                            data-aos-duration="2000"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            >
                                <img src="./images/cempaka mas1.png" alt="" />
                                <div class="items">
                                    <div class="card_title">
                                        <h1>The Yogyakarta SP Jakarta Hotel & Spa</h1>
                                        <p class="d-flex gap-1"><box-icon name='star'></box-icon> 4.1</p>
                                    </div>
                                    <h2>IDR 327.912</h2>
                                    <p class="facility m-0">Facility</p>
                                    <p class="facility_item">Outdoor Pool, Spa, Massage, Reception</p>
                                    <div class="location_content">
                                        <p><box-icon type='solid' name='map'></box-icon> Jakarta</p>
                                        <a href="#/detail">BOOKING <br> NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="card mb-3"
                            data-aos-duration="2000"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            >
                                <img src="./images/cempaka mas1.png" alt="" />
                                <div class="items">
                                    <div class="card_title">
                                        <h1>The Yogyakarta SP Jakarta Hotel & Spa</h1>
                                        <p class="d-flex gap-1"><box-icon name='star'></box-icon> 4.1</p>
                                    </div>
                                    <h2>IDR 327.912</h2>
                                    <p class="facility m-0">Facility</p>
                                    <p class="facility_item">Outdoor Pool, Spa, Massage, Reception</p>
                                    <div class="location_content">
                                        <p><box-icon type='solid' name='map'></box-icon> Jakarta</p>
                                        <a href="#/detail">BOOKING <br> NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="card mb-3"
                            data-aos-duration="2000"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            >
                                <img src="./images/cempaka mas1.png" alt="" />
                                <div class="items">
                                    <div class="card_title">
                                        <h1>The Yogyakarta SP Jakarta Hotel & Spa</h1>
                                        <p class="d-flex gap-1"><box-icon name='star'></box-icon> 4.1</p>
                                    </div>
                                    <h2>IDR 327.912</h2>
                                    <p class="facility m-0">Facility</p>
                                    <p class="facility_item">Outdoor Pool, Spa, Massage, Reception</p>
                                    <div class="location_content">
                                        <p><box-icon type='solid' name='map'></box-icon> Jakarta</p>
                                        <a href="#/detail">BOOKING <br> NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </section>
        <section class="container-fluid content_container">
            <div class="container">
                <div class="items_title">
                    <h1
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    >TESTIMONIALS</h1>
                    <h3
                    data-aos-duration="2000"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-center"
                    >WHATS OURS CUSTOMER SAY ABOUT US</h3>
                </div>
                <div class="mt-5 pb-5 row align-items-start justify-content-center">
                    <div class="p-0 order-2 order-lg-1 me-3">
                        <div class="swiper mySwiper-testi">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="card-testimoni"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    >
                                        <div class="icon">
                                            <i class='bx bxs-user'></i>
                                            <div class="icon_title">
                                                <h1>Oscar Will</h1>
                                                <p class="m-0">16 November 2023</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <i class='bx bxs-quote-left'></i>
                                            <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-testimoni"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    >
                                        <div class="icon">
                                            <i class='bx bxs-user'></i>
                                            <div class="icon_title">
                                                <h1>Oscar Will</h1>
                                                <p class="m-0">16 November 2023</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <i class='bx bxs-quote-left'></i>
                                            <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-testimoni"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    >
                                        <div class="icon">
                                            <i class='bx bxs-user'></i>
                                            <div class="icon_title">
                                                <h1>Oscar Will</h1>
                                                <p class="m-0">16 November 2023</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <i class='bx bxs-quote-left'></i>
                                            <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-testimoni"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    >
                                        <div class="icon">
                                            <i class='bx bxs-user'></i>
                                            <div class="icon_title">
                                                <h1>Oscar Will</h1>
                                                <p class="m-0">16 November 2023</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <i class='bx bxs-quote-left'></i>
                                            <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-testimoni"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    >
                                        <div class="icon">
                                            <i class='bx bxs-user'></i>
                                            <div class="icon_title">
                                                <h1>Oscar Will</h1>
                                                <p class="m-0">16 November 2023</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <i class='bx bxs-quote-left'></i>
                                            <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-testimoni"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    >
                                        <div class="icon">
                                            <i class='bx bxs-user'></i>
                                            <div class="icon_title">
                                                <h1>Oscar Will</h1>
                                                <p class="m-0">16 November 2023</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <i class='bx bxs-quote-left'></i>
                                            <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-testimoni"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    >
                                        <div class="icon">
                                            <i class='bx bxs-user'></i>
                                            <div class="icon_title">
                                                <h1>Oscar Will</h1>
                                                <p class="m-0">16 November 2023</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <i class='bx bxs-quote-left'></i>
                                            <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-testimoni"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    >
                                        <div class="icon">
                                            <i class='bx bxs-user'></i>
                                            <div class="icon_title">
                                                <h1>Oscar Will</h1>
                                                <p class="m-0">16 November 2023</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <i class='bx bxs-quote-left'></i>
                                            <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-testimoni"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    >
                                        <div class="icon">
                                            <i class='bx bxs-user'></i>
                                            <div class="icon_title">
                                                <h1>Oscar Will</h1>
                                                <p class="m-0">16 November 2023</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <i class='bx bxs-quote-left'></i>
                                            <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-testimoni"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    >
                                        <div class="icon">
                                            <i class='bx bxs-user'></i>
                                            <div class="icon_title">
                                                <h1>Oscar Will</h1>
                                                <p class="m-0">16 November 2023</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <i class='bx bxs-quote-left'></i>
                                            <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="card-testimoni"
                                    data-aos-duration="2000"
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    >
                                        <div class="icon">
                                            <i class='bx bxs-user'></i>
                                            <div class="icon_title">
                                                <h1>Oscar Will</h1>
                                                <p class="m-0">16 November 2023</p>
                                            </div>
                                        </div>
                                        <div class="message">
                                            <i class='bx bxs-quote-left'></i>
                                            <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
                        </div>    
                    </div>    
                    <div class="mt-3 p-0 order-1 order-lg-2 mb-5 mb-lg-0">
                        <div class="form-testi h-100">
                            <h1 class="items_title mb-3">Form Testimoni</h1>
                            <form
                            data-aos-duration="2000"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            >
                                <div class="mb-3">
                                    <label for="inputEmail" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail">
                                </div>
                                <div class="mb-3">
                                    <label for="inputName" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="inputName">
                                </div>
                                <div class="mb-3">
                                    <label for="inputMessage" class="form-label">Message</label>
                                    <textarea class="form-control" id="inputMessage" rows="3"></textarea>
                                </div>
                                <div class="mb-3 btn-send-content">
                                    <button class="btn-send">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
  },
  async afterRender () {
    var swiper = new Swiper ('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
    var swiper1 = new Swiper ('.mySwiper-testi', {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  },
};
export default HomePage;
