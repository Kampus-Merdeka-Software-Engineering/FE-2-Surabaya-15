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
});
