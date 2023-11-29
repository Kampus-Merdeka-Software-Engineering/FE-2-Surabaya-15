import TemplatePage from "./TemplatePage.js";

export default class extends TemplatePage {
  constructor(params) {
    super(params);
    this.detailId = params.id;
    this.setTitle("Detail Page");
  }

  async getHtml() {
    const API = "http://localhost:3001";
    const getDetailBooking = await fetch(`${API}/gethotel/${this.detailId}`);
    const getDetailBookingJson = await getDetailBooking.json();

    console.log(getDetailBookingJson);
    const getHarga = await fetch(`${API}/getalltype/${this.detailId}`);
    const getHargaJson = await getHarga.json();

    const myObj = {
      id: this.detailId
    };
    const myObj_string = JSON.stringify(myObj);
    localStorage.setItem("id", myObj_string);
    return `
      <section class="container" style="margin-top:120px; min-height:100vh">
        <div
          class="detail_boking_wrapper"
          data-aos-duration="2000"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div class="left_item_boking">
            <div class="swiper swiper-detail-booking">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="img-detail-booking">
                    <img
                      src="${getDetailBookingJson[0].url1}"
                      alt="image hotel"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-detail-booking">
                    <img
                      src="${getDetailBookingJson[0].url2}"
                      alt="image hotel"
                    />
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="img-detail-booking">
                    <img
                      src="${getDetailBookingJson[0].url3}"
                      alt="image hotel"
                    />
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
                <h2>Rp ${moneyFormatter.format(getHargaJson[0].harga)}</h2>
              </div>
              <div class="detail-items">
                <p class="boldier">King Bed</p>
                <h2>Rp ${moneyFormatter.format(getHargaJson[1].harga)}</h2>
              </div>
              <div class="detail-items">
                <p class="boldier">Twin Bed</p>
                <h2>Rp ${moneyFormatter.format(getHargaJson[2].harga)}</h2>
              </div>
            </div>
            <p class="boldier">Facility</p>
            <p>${getDetailBookingJson[0].fasilitas}</p>
          </div>
          <div class="right_item_boking">
            <div class="form-container">
              <form class="form-detail-booking">
                <div class="item_input_booking_wrapper">
                  <div class="item_input_booking">
                    <div class="items-booking-number-type">
                      <label for="inputCheckin" class="form-label"
                        >Check in</label
                      >
                      <input
                        type="date"
                        class="form-control"
                        id="inputCheckin"
                        name="checkin"
                        placeholder="test"
                      />
                    </div>
                  </div>
                  <div class="item_input_booking">
                    <div class="items-booking-number-type">
                      <label for="inputCheckout" class="form-label"
                        >Check out</label
                      >
                      <input
                        type="date"
                        class="form-control"
                        id="inputCheckout"
                        name="checkout"
                      />
                    </div>
                  </div>
                </div>
                <div class="item_input_booking_wrapper">
                  <div class="item_input_booking">
                    <div class="items-booking-number-type">
                      <label for="selectNumber" class="form-label"
                        >Number of rooms</label
                      >
                      <select
                        class="form-select"
                        aria-label="Pilih number of rooms"
                        id="selectNumber"
                        name="numberofrooms"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                  <div class="item_input_booking">
                    <div class="items-booking-number-type">
                      <label for="selectTypeBed" class="form-label"
                        >Type Bed</label
                      >
                      <select
                        class="form-select"
                        aria-label="Masukan type bed"
                        id="selectTypeBed"
                        name="typebed"
                      >
                        <option value="Queen Bed">Queen Bed</option>
                        <option value="King Bed">King Bed</option>
                        <option value="Twin Bed">Twin Bed</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="items-booking">
                  <label for="inputName" class="form-label"
                    >Orderer names</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    name="name"
                    placeholder="Masukan nama anda"
                  />
                </div>
                <div class="items-booking">
                  <label for="inputEmail" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="example@gmail.com"
                    name="email"
                  />
                </div>
                <div class="items-booking" id="total_payment_container">
                  <label for="inputTotalPayment" class="form-label"
                    >Total Payment</label
                  >
                  <div class="input_total_payment">
                    Rp.
                    <input
                      type="number"
                      class="form-control"
                      id="inputTotalPayment"
                      name="totalPayment"
                      disabled
                    />
                  </div>
                </div>
                <div class="items-booking">
                  <label for="selectPayment" class="form-label"
                    >Payment Methode</label
                  >
                  <select
                    class="form-select"
                    aria-label="Masukan type bed"
                    id="selectPayment"
                    name="paymentmethod"
                  >
                    <option value="Cash">Cash</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="E-Wallet">E-Wallet</option>
                    <option value="Virtual Account">Virtual Account</option>
                  </select>
                </div>
                <div class="btn-booking-container">
                  <button type="submit" class="btn-booking btn">
                    ORDER <br />
                    NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
