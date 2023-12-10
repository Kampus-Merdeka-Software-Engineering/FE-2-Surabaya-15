const TemplatePage = require ("../TemplatePage.js");
const { render } =require( "../after_render/detail.js");

module.exports= class extends TemplatePage {
  constructor(params) {
    super(params);
    this.detailId = params.id;
    this.setTitle("Detail Page");
    this.setNavbar(document.getElementById("navbar_booking"));
  }

  async getHtml() {
    return `
      <section class="container" style="margin-top:120px; min-height:100vh">
        <div
          class="detail_boking_wrapper"
          data-aos-duration="2000"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div class="left_item_boking"></div>
          <div class="right_item_boking">
            <div class="form-container">
              <form class="form-detail-booking" style="text-transform: capitalize">
                <div class="item_input_booking_wrapper">
                  <div class="item_input_booking">
                    <div class="items-booking-number-type">
                      <label for="inputCheckin" class="form-label"
                        >Check In</label
                      >
                      <input
                        type="date"
                        class="form-control"
                        id="inputCheckin"
                        name="checkin"
                        required
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
                        required
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
                    required
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
                    required
                  />
                </div>
                <div class="items-booking" id="total_payment_container">
                  <label for="inputTotalPayment" class="form-label"
                    >Total Payment</label
                  >
                  <div class="input_total_payment">
                    Rp
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
        <div class="struk_container">        
        </div>
        <div class="overlay">
        </div>
      </section>
    `;
  }

  async afterRender() {
    return render(this.detailId);
  }
}
