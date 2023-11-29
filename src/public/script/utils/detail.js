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
var month = dtToday.getMonth() + 1; // getMonth() is zero-based
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
  const id = JSON.parse(localStorage.id);
  const datasTypeBed = await fetch(`${API}/getalltype/${id.id}`);
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
      Rp.
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

  // insert data boking
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
  const postData = await fetch(`${API}/createbooking/${id.id}`, option);
  const postDataJson = await postData.json();
  console.log(postDataJson);
  // end insert data boking

  // struk
  const getDetailBooking = await fetch(`${API}/gethotel/${id.id}`);
  const getDetailBookingJson = await getDetailBooking.json();
  const strukContainer = document.querySelector(".struk_container");
  strukContainer.innerHTML = `
    <div class="struk_wrapper">
      <div class="struk_title" style="text-transform: capitalize">
        <h1>${getDetailBookingJson[0].nama} Hotel Booking Receipt</h1>
        <h5>${name}, ${new Date().toLocaleDateString("en-US")}</h5>
      </div>
      <div class="struk_items" style="text-transform: capitalize">
        <div class="left-content">
          <p><strong>Check In:</strong> ${dataCheckin}</p>
          <p><strong>Check Out:</strong> ${dataCheckout}</p>
          <p><strong>Type Bed:</strong> ${typeBed}</p>
          <p><strong>Number of Rooms:</strong> ${numberOfRoom}</p>
        </div>
        <div class="right-content">
          <p><strong>Price:</strong> Rp.${moneyFormatter.format(harga)}</p>
          <p><strong>Total Payment:</strong> Rp.${moneyFormatter.format(
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
  // end struk
});
const overlay = document.querySelector(".overlay");
const strukContainer = document.querySelector(".struk_container");
overlay.addEventListener("click", () => {
  console.log("masokk");
  strukContainer.classList.remove("active");
  overlay.classList.remove("active");
  window.location.replace("/booking");
});