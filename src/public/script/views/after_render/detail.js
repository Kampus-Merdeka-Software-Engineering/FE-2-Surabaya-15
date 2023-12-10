const CONFIG = require ("../../globals/config.js");

const render = async (id) => {
  const getDetailBooking = await fetch(`${CONFIG.API}/gethotel/${id}`);
  const getDetailBookingJson = await getDetailBooking.json();

  const getHarga = await fetch(`${CONFIG.API}/getalltype/${id}`);
  const getHargaJson = await getHarga.json();

  const leftItemContainer = document.querySelector(".left_item_boking");
  leftItemContainer.innerHTML = `
    <div class="swiper swiper-detail-booking">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="img-detail-booking">
            <img src="${getDetailBookingJson[0].url1}" alt="image hotel" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img-detail-booking">
            <img src="${getDetailBookingJson[0].url2}" alt="image hotel" />
          </div>
        </div>
        <div class="swiper-slide">
          <div class="img-detail-booking">
            <img src="${getDetailBookingJson[0].url3}" alt="image hotel" />
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="title-booking">
      <h1>${getDetailBookingJson[0].nama}</h1>
      <p class="star-content">
        <i class="bx bx-star"></i> ${getDetailBookingJson[0].rating}
      </p>
    </div>
    <p>
      ${getDetailBookingJson[0].lokasi}
      <a href="${getDetailBookingJson[0].alamat}"
        ><i class="bx bx-map-alt"></i
      ></a>
    </p>
    <div class="detail_container_booking">
      <div class="detail-items">
        <p class="boldier">Queen Bed</p>
        <h2>Rp${CONFIG.moneyFormatter.format(getHargaJson[0].harga)}</h2>
      </div>
      <div class="detail-items">
        <p class="boldier">King Bed</p>
        <h2>Rp${CONFIG.moneyFormatter.format(getHargaJson[1].harga)}</h2>
      </div>
      <div class="detail-items">
        <p class="boldier">Twin Bed</p>
        <h2>Rp${CONFIG.moneyFormatter.format(getHargaJson[2].harga)}</h2>
      </div>
    </div>
    <p class="boldier">Facility</p>
    <p>${getDetailBookingJson[0].fasilitas}</p>
  `;
  const swiperDetail = document.querySelector(".swiper-detail-booking");
  var swiper = new Swiper(swiperDetail, {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    }
  });

  var dtToday = new Date();
  var month = dtToday.getMonth() + 1; 
  var day = dtToday.getDate();
  var year = dtToday.getFullYear();
  if (month < 10) month = "0" + month.toString();
  if (day < 10) day = "0" + day.toString();

  var maxDate = year + "-" + month + "-" + day;
  const dateCheckInMax = document.getElementById("inputCheckin");
  const dateCheckOutMax = document.getElementById("inputCheckout");
  dateCheckInMax.setAttribute("min", maxDate);
  dateCheckOutMax.setAttribute("min", maxDate);
  
  const formDetailBooking = document.querySelector(".form-detail-booking");
  formDetailBooking.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dataCheckin = document.querySelector("#inputCheckin").value;
    const dateCheckIn = new Date(dataCheckin);
    const dataCheckout = document.querySelector("#inputCheckout").value;
    const dateCheckOut = new Date(dataCheckout);
    const numberOfRoom = document.querySelector("#selectNumber").value;
    const typeBed = document.querySelector("#selectTypeBed").value;
    const totalDate = dateCheckOut.getTime() - dateCheckIn.getTime();
    const totalDays = Math.ceil(totalDate / (1000 * 3600 * 24));

    const datasTypeBed = await fetch(`${CONFIG.API}/getalltype/${id}`);
    const datasTypeBedJson = await datasTypeBed.json();
    let harga;
    datasTypeBedJson.forEach((data) => {
      if (data.name === typeBed) {
        harga = data.harga;
      }
    });

    const totalPayment = totalDays * numberOfRoom * harga;
    let totalPaymentContainer = document.getElementById(
      "total_payment_container"
    );
    totalPaymentContainer.innerHTML = "";
    totalPaymentContainer.innerHTML = `
      <label for="inputTotalPayment" class="form-label">Total Payment</label>
      <div class="input_total_payment">
        Rp
        <input
          type="number"
          class="form-control"
          id="inputTotalPayment"
          name="totalPayment"
          value="${totalPayment}"
          disabled
        />
      </div>
    `;

    const name = document.getElementById("inputName").value;
    const email = document.getElementById("inputEmail").value;
    const paymentMethod = document.getElementById("selectPayment").value;
    const data = {
      checkin: dataCheckin,
      checkout: dataCheckout,
      total_ruangan: parseInt(numberOfRoom),
      nama_pemesan: name,
      email_pemesan: email,
      total_pembayaran: totalPayment
    };
    const option = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    };
    const postData = await fetch(`${CONFIG.API}/createbooking/${id}`, option);
    const postDataJson = await postData.json();

    const getDetailBooking = await fetch(`${CONFIG.API}/gethotel/${id}`);
    const getDetailBookingJson = await getDetailBooking.json();
    const dataEmail = {
      to_name : name,
      hotel_name :getDetailBookingJson[0].nama,
      check_in :dataCheckin,
      check_out : dataCheckout ,
      type_bed : typeBed,
      total_payment: CONFIG.moneyFormatter.format(totalPayment),
      method_payment: paymentMethod,
      reply_to: email,
    }
    emailjs.send ('fiftyhotels_order', 'template_g8eqp44',dataEmail).then (
      function (response) {
        console.log(response)
      },
      function (err) {
        console.log(err)
      })

    const strukContainer = document.querySelector(".struk_container");
    strukContainer.innerHTML = `
      <div class="struk_wrapper">
        <div class="struk_title" style="text-transform: capitalize">
          <h1>Struk Booking Hotel ${getDetailBookingJson[0].nama}</h1>
          <h5>${name}, ${new Date().toLocaleDateString("en-US")}</h5>
        </div>
        <div class="struk_items" style="text-transform: capitalize">
          <div class="left-content">
            <p><strong>Check in:</strong> ${dataCheckin}</p>
            <p><strong>Check out:</strong> ${dataCheckout}</p>
            <p><strong>Type Bed:</strong> ${typeBed}</p>
            <p><strong>Number of Rooms:</strong> ${numberOfRoom}</p>
          </div>
          <div class="right-content">
            <p><strong>Price:</strong> Rp${CONFIG.moneyFormatter.format(
              harga
            )}</p>
            <p><strong>Total Payment:</strong> Rp${CONFIG.moneyFormatter.format(
              totalPayment
            )}</p>
            <p><strong>Payment Methode:</strong> ${paymentMethod}</p>
          </div>
        </div>
        <p>
          Further information will be sent via email, please check at
          <strong>${email}</strong>
        </p>
      </div>
    `;

    const overlay = document.querySelector(".overlay");
    strukContainer.classList.add("active");
    overlay.classList.add("active");
  });

  const overlay = document.querySelector(".overlay");
  const strukContainer = document.querySelector(".struk_container");
  overlay.addEventListener("click", () => {
    strukContainer.classList.remove("active");
    overlay.classList.remove("active");
    window.location.replace("/booking");
  });
};
module.exports = render