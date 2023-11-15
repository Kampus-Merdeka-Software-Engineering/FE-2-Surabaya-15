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
                    <h1>BEST OFFERS</h1>
                    <h3>BOOKING OUR TOP HOTELS</h3>
                </div>
                <div class="best_offer_items">
                    <div class="card mb-3">
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
                                <button>BOOKING <br> NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
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
                                <button>BOOKING </br> NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
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
                                <button>BOOKING </br> NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
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
                                <button>BOOKING </br> NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="container-fluid content_container">
            <div class="container">
                <div class="items_title">
                    <h1>TESTIMONIALS</h1>
                    <h3>WHATS OURS CUSTOMER SAY ABOUT US</h3>
                </div>
                <div class="mt-5 pb-5 row align-items-start justify-content-center">
                    <div class="col-lg-8 p-0 order-2 order-lg-1">
                        <div class="card-testi-container">
                            <div class="card">
                                <div class="icon">
                                <i class='bx bxs-quote-left'></i>
                                </div>
                                <div class="message">
                                    <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                    <h1 class="fw-bold">Slamet</h1>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon">
                                <i class='bx bxs-quote-left'></i>
                                </div>
                                <div class="message">
                                    <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                    <h1 class="fw-bold">Slamet</h1>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon">
                                <i class='bx bxs-quote-left'></i>
                                </div>
                                <div class="message">
                                    <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                    <h1 class="fw-bold">Slamet</h1>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon">
                                <i class='bx bxs-quote-left'></i>
                                </div>
                                <div class="message">
                                    <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                    <h1 class="fw-bold">Slamet</h1>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon">
                                <i class='bx bxs-quote-left'></i>
                                </div>
                                <div class="message">
                                    <h1 class="mt-3 mb-5">Hotel yang ditempati Bagus</h1>
                                    <h1 class="fw-bold">Slamet</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 p-0 order-1 order-lg-2 mb-5 mb-lg-0">
                        <div class="form-testi h-100">
                            <h1>Testimoni</h1>
                            <form>
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
  async afterRender () {},
};
export default HomePage;
