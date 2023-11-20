const DetailBookingPage = {
    async render () {
      return `
      <div class ="container mb-5" style="margin-top:100px; min-height:100vh">
          <div class="row align-items-start justify-content-center">
              <div class="col-md-6 detail-items">
                  <div class="swiper image-swiper">
                      <div class="swiper-wrapper">
                          <div class="swiper-slide">
                              <img src="./images/cempaka mas1.png" alt="" />
                          </div>
                          <div class="swiper-slide">
                              <img src="./images/cempaka mas1.png" alt="" />
                          </div>
                          <div class="swiper-slide">
                              <img src="./images/cempaka mas1.png" alt="" />
                          </div>
                      </div>
                      <div class="swiper-pagination"></div>
                  </div>
                  <div class="title-booking">
                      <h1>The Jayakarta SP Jakarta Hotel & Spa</h1>
                      <p class="d-flex gap-1"><box-icon name='star'></box-icon> 4.1</p>
                  </div>
                  <p class="mb-1">Jalan Yaudah No 35, Jakarta <i class='bx bx-map-alt'></i></p>
                  <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <div>
                          <p class="boldier">Queen Bed</p>
                          <h2>Rp 327.000</h2>
                      </div>
                      <div>
                          <p class="boldier">King Bed</p>
                          <h2>Rp 327.000</h2>
                      </div>
                      <div>
                          <p class="boldier">Twin Bed</p>
                          <h2>Rp 327.000</h2>
                      </div>
                  </div>
                  <p class="boldier">Facility</p>
                  <p>Free Wifi, Toilet, Television</p>
              </div>
              <div class="col-md-6">
                  <div class="form-container">
                      <form>
                          <div class="row m-0 gap-2 align-items-center justify-content-center">
                              <div class="mb-3 col-5 items-booking-number-type">
                                  <label for="inputCheckin" class="form-label">Check in</label>
                                  <input type="date" class="form-control" id="inputCheckin" name="checkin" placeholder="test">
                              </div>
                              <div class="mb-3 col-5 items-booking-number-type">
                                  <label for="inputCheckout" class="form-label">Check out</label>
                                  <input type="date" class="form-control" id="inputCheckout" name="checkout">
                              </div>
                          </div>
                          <div class="row gap-2 mx-0 align-items-center justify-content-center">
                              <div class="mb-3 col-5 items-booking-number-type">
                                  <label for="selectNumber" class="form-label">Number of rooms</label>
                                  <select class="form-select" aria-label="Pilih number of rooms" id="selectNumber" name="numberofrooms">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                  </select>
                              </div>
                              <div class="mb-3 col-5 items-booking-number-type">
                                  <label for="selectTypeBed" class="form-label">Type Bed</label>
                                  <select class="form-select" aria-label="Masukan type bed" id="selectTypeBed" name="typebed">
                                      <option value="Queen Bed">Queen Bed</option>
                                      <option value="King Bed">King Bed</option>
                                      <option value="Twin Bed">Twin Bed</option>
                                  </select>
                              </div>
                          </div>
                          <div class="mb-3 items-booking">
                              <label for="inputName" class="form-label">Orderer names</label>
                              <input type="text" class="form-control" id="inputName" name="name" placeholder="Masukan nama anda">
                          </div>
                          <div class="mb-3 items-booking">
                              <label for="inputEmail" class="form-label">Email</label>
                              <input type="email" class="form-control" id="inputEmail" placeholder="example@gmail.com" name="email">
                          </div>
                          <div class="mb-3 items-booking">
                              <label for="inputTotalPayment" class="form-label">Total Payment</label>
                              <input type="number" class="form-control" id="inputTotalPayment" name="totalPayment" disabled>
                          </div>
                          <div class="mb-3 items-booking">
                              <label for="selectPayment" class="form-label">Payment Methode</label>
                              <select class="form-select" aria-label="Masukan type bed" id="selectPayment" name="paymentmethod">
                                  <option value="Cash">Cash</option>
                                  <option value="Credit Card">Credit Card</option>
                                  <option value="E-Wallet">E-Wallet</option>
                                  <option value="Virtual Account">Virtual Account</option>
                              </select>
                          </div>
                          <div class="d-flex align-items-center justify-content-center">
                              <button type="submit" class="btn btn-booking">ORDER <br> NOW</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      `;
    },
    async afterRender () {
      var swiper = new Swiper ('.image-swiper', {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    },
  };
  
  export default DetailBookingPage;
  