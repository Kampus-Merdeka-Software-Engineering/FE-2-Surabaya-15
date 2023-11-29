window.addEventListener("load", async () => {
  const mySwiper = document.querySelector(".mySwiper");
  var swiper = new Swiper(mySwiper, {
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
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 250
      },
      // when window width is >= 640px
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
  const mySwiper1 = document.querySelector(".mySwiper-testi");
  var swiper1 = new Swiper(mySwiper1, {
    slidesPerView: 1,
    spaceBetween: 30,
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
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });

  // get data to home page
  let typeHotel;
  let dataTypeHotel;
  const bestOfferContainer = document.getElementById("best_offer_container");

  try {
    const response = await fetch(`${API}/gethotels`);
    const hotels = await response.json();

    let tempNum = 0;
    let hotelId = 0;
    const dataJakarta = hotels.filter((hotel) => {
      if (hotel.kota === "Jakarta" && parseFloat(hotel.rating) > tempNum) {
        hotelId = hotel.id;
        return (tempNum = parseFloat(hotel.rating));
      }
    });

    typeHotel = await fetch(`${API}/getalltype/${hotelId}`);
    dataTypeHotel = await typeHotel.json();
    bestOfferContainer.innerHTML += `
        <div class="swiper-slide">
          <div
            class="card-boking"
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <img src="${dataJakarta[0].url1}" alt="" />
            <div class="items">
              <div class="card_title">
                <h1>${dataJakarta[0].nama}</h1>
                <p class="star-content">
                  <i class="bx bx-star"></i> ${dataJakarta[0].rating}
                </p>
              </div>
              <h2>IDR ${moneyFormatter.format(dataTypeHotel[0].harga)}</h2>
              <p class="facility">Facility</p>
              <p class="facility_item">${dataJakarta[0].fasilitas}</p>
              <div class="location_content">
                <p><i class="bx bx-map"></i> ${dataJakarta[0].kota}</p>
                <a href="/detail/${dataJakarta[0].id}"
                  >BOOKING <br />
                  NOW</a
                >
              </div>
            </div>
          </div>
        </div>
      `;

    tempNum = 0;
    hotelId = 0;
    const dataBandung = hotels.filter((hotel) => {
      if (hotel.kota === "Bandung" && parseFloat(hotel.rating) > tempNum) {
        hotelId = hotel.id;
        return (tempNum = parseFloat(hotel.rating));
      }
    });
    typeHotel = await fetch(`${API}/getalltype/${hotelId}`);
    dataTypeHotel = await typeHotel.json();
    bestOfferContainer.innerHTML += `
        <div class="swiper-slide">
          <div
            class="card-boking"
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <img src="${dataBandung[0].url1}" alt="" />
            <div class="items">
              <div class="card_title">
                <h1>${dataBandung[0].nama}</h1>
                <p class="star-content">
                  <i class="bx bx-star"></i> ${dataBandung[0].rating}
                </p>
              </div>
              <h2>IDR ${moneyFormatter.format(dataTypeHotel[0].harga)}</h2>
              <p class="facility">Facility</p>
              <p class="facility_item">${dataBandung[0].fasilitas}</p>
              <div class="location_content">
                <p><i class="bx bx-map"></i> ${dataBandung[0].kota}</p>
                <a href="/detail/${dataBandung[0].id}"
                  >BOOKING <br />
                  NOW</a
                >
              </div>
            </div>
          </div>
        </div>
      `;

    tempNum = 0;
    hotelId = 0;
    const dataMedan = hotels.filter((hotel) => {
      if (hotel.kota === "Medan" && parseFloat(hotel.rating) > tempNum) {
        hotelId = hotel.id;
        return (tempNum = parseFloat(hotel.rating));
      }
    });
    typeHotel = await fetch(`${API}/getalltype/${hotelId}`);
    dataTypeHotel = await typeHotel.json();
    bestOfferContainer.innerHTML += `
        <div class="swiper-slide">
          <div
            class="card-boking"
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <img src="${dataMedan[0].url1}" alt="" />
            <div class="items">
              <div class="card_title">
                <h1>${dataMedan[0].nama}</h1>
                <p class="star-content">
                  <i class="bx bx-star"></i> ${dataMedan[0].rating}
                </p>
              </div>
              <h2>IDR ${moneyFormatter.format(dataTypeHotel[0].harga)}</h2>
              <p class="facility">Facility</p>
              <p class="facility_item">${dataMedan[0].fasilitas}</p>
              <div class="location_content">
                <p><i class="bx bx-map"></i> ${dataMedan[0].kota}</p>
                <a href="/detail/${dataMedan[0].id}"
                  >BOOKING <br />
                  NOW</a
                >
              </div>
            </div>
          </div>
        </div>
      `;

    tempNum = 0;
    hotelId = 0;
    const dataBali = hotels.filter((hotel) => {
      if (hotel.kota === "Bali" && parseFloat(hotel.rating) > tempNum) {
        hotelId = hotel.id;
        return (tempNum = parseFloat(hotel.rating));
      }
    });
    typeHotel = await fetch(`${API}/getalltype/${hotelId}`);
    dataTypeHotel = await typeHotel.json();
    bestOfferContainer.innerHTML += `
        <div class="swiper-slide">
          <div
            class="card-boking"
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <img src="${dataBali[0].url1}" alt="" />
            <div class="items">
              <div class="card_title">
                <h1>${dataBali[0].nama}</h1>
                <p class="star-content">
                  <i class="bx bx-star"></i> ${dataBali[0].rating}
                </p>
              </div>
              <h2>IDR ${moneyFormatter.format(dataTypeHotel[0].harga)}</h2>
              <p class="facility">Facility</p>
              <p class="facility_item">${dataBali[0].fasilitas}</p>
              <div class="location_content">
                <p><i class="bx bx-map"></i> ${dataBali[0].kota}</p>
                <a href="/detail/${dataBali[0].id}"
                  >BOOKING <br />
                  NOW</a
                >
              </div>
            </div>
          </div>
        </div>
      `;
  } catch (error) {
    console.log(error);
  }
  // end get data to home page

  // testimoni
  // get data testi
  const getTesti = await fetch(`${API}/gettestimonis`);
  const getTestiJson = await getTesti.json();
  const testiContainer = document.getElementById("container_testi_wrapper");

  getTestiJson.forEach((testi) => {
    testiContainer.innerHTML += `
      <div class="swiper-slide">
        <div
          class="card-testimoni"
          data-aos-duration="2000"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          style="text-transform: capitalize;"
        >
          <div class="icon">
            <i class="bx bxs-user"></i>
            <div class="icon_title">
              <h1>${testi.nama}</h1>
              <p class="">${testi.createdAt}</p>
            </div>
          </div>
          <div class="message">
            <i class="bx bxs-quote-left"></i>
            <h1 class="">${testi.pesan}</h1>
          </div>
        </div>
      </div>
    `;
  });
  // end get data testi

  // post data test
  const form = document.querySelector(".form_testi");
  form.addEventListener("submit", async (e) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    try {
      const postTesti = await fetch(`${API}/createtestimoni`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const postTestiJson = await postTesti.json();
      console.log(postTestiJson);
      if (postTestiJson.length !== 0) {
        alert("berhasil menambah data");
      }
    } catch (error) {
      console.log(error);
    }
  });
  // end post data test
  // end testimoni

  // search
  const formSearch = document.getElementById("form-search");
  formSearch.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(formSearch);
    const data = Object.fromEntries(formData);
    const datacity = JSON.stringify(data);
    const city = JSON.parse(datacity);

    const containerTittle = document.querySelector(".items_title");
    containerTittle.innerHTML = `
      <h1
        data-aos-duration="2000"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        HASIL PENCARIAN
      </h1>
      <h3
        data-aos-duration="2000"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        style="text-transform: uppercase;"
      >
        KOTA ${city.kota}
      </h3>
    `;
    const response = await fetch(`${API}/gethotels`);
    const hotels = await response.json();
    let containerResultSearch = document.querySelector("#best_offer_container");
    containerResultSearch.innerHTML = "";
    hotels.forEach(async (hotel) => {
      typeHotel = await fetch(`${API}/getalltype/${hotel.id}`);
      dataTypeHotel = await typeHotel.json();
      if (hotel.kota === city.kota) {
        containerResultSearch.innerHTML += `
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
                <h2>IDR ${moneyFormatter.format(dataTypeHotel[0].harga)}</h2>
                <p class="facility">Facility</p>
                <p class="facility_item">${hotel.fasilitas}</p>
                <div class="location_content">
                  <p><i class="bx bx-map"></i> ${hotel.kota}</p>
                  <a href="/detail/${hotel.id}"
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
  });
  // end search

  var dtToday = new Date();
  var month = dtToday.getMonth() + 1; // getMonth() is zero-based
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();

  var maxDate = year + "-" + month + "-" + day;
  const dateCheckInMax = document.getElementById("dateCheckIn");
  const dateCheckOutMax = document.getElementById("dateCheckOut");
  dateCheckInMax.setAttribute("min", maxDate);
  dateCheckOutMax.setAttribute("min", maxDate);
});
