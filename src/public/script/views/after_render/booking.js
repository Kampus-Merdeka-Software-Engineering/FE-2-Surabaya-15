import CONFIG from "../../globals/config.js";

export const render = async () => {
  const mySwiperJakarta = document.querySelector(".mySwiper-jakarta");
  var swiper = new Swiper(mySwiperJakarta, {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 250
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 100
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 150
      }
    }
  });
  const mySwiperBandung = document.querySelector(".mySwiper-bandung");
  var swiper = new Swiper(mySwiperBandung, {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 250
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 100
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 150
      }
    }
  });
  const mySwiperMedan = document.querySelector(".mySwiper-medan");
  var swiper = new Swiper(mySwiperMedan, {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 250
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 100
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 150
      }
    }
  });
  const mySwiperBali = document.querySelector(".mySwiper-bali");
  var swiper = new Swiper(mySwiperBali, {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 250
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 100
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 150
      }
    }
  });

  try {
    const response = await fetch(`${CONFIG.API}/gethotels`);
    const hotels = await response.json();

    const loader = document.querySelector(".loader-container");
    loader.style.display = "flex";

    const typeHotel = await fetch(`${CONFIG.API}/getalltypehotel`);
    const dataTypeHotel = await typeHotel.json();
    let harga;

    if (hotels.length !== 0) {
      loader.style.display = "none";
      const jakartaContainer = document.getElementById(
        "booking_container_jakarta"
      );
      const bandungContainer = document.getElementById(
        "booking_container_bandung"
      );
      const medanContainer = document.getElementById("booking_container_medan");
      const baliContainer = document.getElementById("booking_container_bali");

      hotels.forEach(async (hotel) => {
        dataTypeHotel.forEach((item) => {
          if (item.hotelId === hotel.id && item.name === "Queen Bed") {
            harga = item.harga;
          }
        });
        if (hotel.kota === "Jakarta") {
          jakartaContainer.innerHTML += `
              <div class="swiper-slide">
                <div
                  class="card-boking"
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <img src="${hotel.url1}" alt="" />
                  <div class="items">
                    <div class="card_title">
                      <h1>${hotel.nama}</h1>
                      <p class="star-content">
                        <i class="bx bx-star"></i> ${hotel.rating}
                      </p>
                    </div>
                    <h2 class="harga_booking">Rp${CONFIG.moneyFormatter.format(
                      harga
                    )}</h2>
                    <p class="facility">Facility</p>
                    <p class="facility_item">${hotel.fasilitas}</p>
                    <div class="location_content">
                      <p><i class="bx bx-map"></i> ${hotel.kota}</p>
                      <a href="/detail/${hotel.id}" data-link
                        >BOOKING <br />
                        NOW</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            `;
        }
        if (hotel.kota === "Bandung") {
          dataTypeHotel.forEach((item) => {
            if (item.hotelId === hotel.id && item.name === "Queen Bed") {
              harga = item.harga;
            }
          });

          console.log (hotel)
          bandungContainer.innerHTML += `
              <div class="swiper-slide">
                <div
                  class="card-boking"
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <img src="${hotel.url1}" alt="" />
                  <div class="items">
                    <div class="card_title">
                      <h1>${hotel.nama}</h1>
                      <p class="star-content">
                        <i class="bx bx-star"></i> ${hotel.rating}
                      </p>
                    </div>
                    <h2>Rp${CONFIG.moneyFormatter.format(harga)}</h2>
                    <p class="facility">Facility</p>
                    <p class="facility_item">${hotel.fasilitas}</p>
                    <div class="location_content">
                      <p><i class="bx bx-map"></i>${hotel.kota}</p>
                      <a href="/detail/${hotel.id}" data-link
                        >BOOKING <br />
                        NOW</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            `;
        }
        if (hotel.kota === "Medan") {
          dataTypeHotel.forEach((item) => {
            if (item.hotelId === hotel.id && item.name === "Queen Bed") {
              harga = item.harga;
            }
          });
          medanContainer.innerHTML += `
              <div class="swiper-slide">
                <div
                  class="card-boking"
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <img src="${hotel.url1}" alt="" />
                  <div class="items">
                    <div class="card_title">
                      <h1>${hotel.nama}</h1>
                      <p class="star-content">
                        <i class="bx bx-star"></i> ${hotel.rating}
                      </p>
                    </div>
                    <h2>Rp${CONFIG.moneyFormatter.format(harga)}</h2>
                    <p class="facility">Facility</p>
                    <p class="facility_item">${hotel.fasilitas}</p>
                    <div class="location_content">
                      <p><i class="bx bx-map"></i> ${hotel.kota}</p>
                      <a href="/detail/${hotel.id}" data-link
                        >BOOKING <br />
                        NOW</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            `;
        }
        if (hotel.kota === "Bali") {
          dataTypeHotel.forEach((item) => {
            if (item.hotelId === hotel.id && item.name === "Queen Bed") {
              harga = item.harga;
            }
          });
          baliContainer.innerHTML += `
              <div class="swiper-slide">
                <div
                  class="card-boking"
                  data-aos-duration="2000"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                >
                  <img src="${hotel.url1}" alt="" />
                  <div class="items">
                    <div class="card_title">
                      <h1>${hotel.nama}</h1>
                      <p class="star-content">
                        <i class="bx bx-star"></i> ${hotel.rating}
                      </p>
                    </div>
                    <h2>Rp${CONFIG.moneyFormatter.format(harga)}</h2>
                    <p class="facility">Facility</p>
                    <p class="facility_item">${hotel.fasilitas}</p>
                    <div class="location_content">
                      <p><i class="bx bx-map"></i>${hotel.kota}</p>
                      <a href="/detail/${hotel.id}" data-link
                        >BOOKING <br />
                        NOW</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            `;
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};
