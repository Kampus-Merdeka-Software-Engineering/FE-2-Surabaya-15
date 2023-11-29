import TemplatePage from "./TemplatePage.js";

export default class extends TemplatePage {
  constructor(params) {
    super(params);
    this.setTitle("About Us Page");
  }

  async getHtml() {
    return `
      <section class="container" style="margin-top: 120px;">
        <section class="aboutus_container">
          <div
            class="aboutus_title"
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <h1>About Us</h1>
            <hr class="line-aboutus" />
          </div>
          <p
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            Fifty Hotels is a pioneer in the hospitality industry committed to
            changing the way you book accommodation. We believe that your
            journeyshould start with peace of mind and the assurance that your
            room is available without any hassle.
          </p>
        </section>
        <section
          class="aboutus_container_vision_mission"
          style="margin-bottom: 50px;"
        >
          <div class="vision_container">
            <div
              class="aboutus_title"
              data-aos-duration="2000"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <h1>Vision</h1>
              <hr class="line" />
            </div>
            <p
              data-aos-duration="2000"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              Create a seamless and peacefull accommodation booking experience
            </p>
          </div>
          <div class="mission_container">
            <div
              class="aboutus_title"
              data-aos-duration="2000"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <h1>Mission</h1>
              <hr class="line" />
            </div>
            <p
              data-aos-duration="2000"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              1. Guarantee that each of your trips starts with inner peace and
              guaranteed room availability without problems. <br />2. Leading
              innovation in the hospitality industry with a commitment to
              revolutionizing the way you book accommodation.
            </p>
          </div>
        </section>
        <section class="aboutus_container">
          <div
            class="aboutus_title"
            style="margin-bottom: 50px;"
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <h1>Group 15 Team H Section Surabaya</h1>
            <hr class="line-grup" />
          </div>
          <div
            class="aboutus-items-container"
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div class="aboutus-card">
              <div class="aboutus-img-container">
                <img src="/public/assets/images/elza.png" alt="img aboutus" />
              </div>
              <h3>
                <a href="https://www.linkedin.com/in/elza-mardalena-4669bb296"
                  >Elza Mardalena</a
                >
              </h3>
              <p>Group Project Leader</p>
            </div>
          </div>
          <div
            class="aboutus-items-container"
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div class="aboutus-card">
              <div class="aboutus-img-container">
                <img src="/public/assets/images/sandhy.png" alt="img aboutus" />
              </div>
              <h3>
                <a href="https://www.linkedin.com/in/sandhydhannova/"
                  >Sandhy Dhannova</a
                >
              </h3>
              <p>Frontend Developer</p>
            </div>
            <div class="aboutus-card">
              <div class="aboutus-img-container">
                <img src="/public/assets/images/ikhsan.png" alt="img aboutus" />
              </div>
              <h3>
                <a
                  href="https://www.linkedin.com/in/ihksan-fadjeri-509878284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >Ihksan Fadjeri</a
                >
              </h3>
              <p>Frontend Developer</p>
            </div>
            <div class="aboutus-card">
              <div class="aboutus-img-container">
                <img
                  src="/public/assets/images/Muhammad_Ari_Shandi.png"
                  alt="img aboutus"
                />
              </div>
              <h3>
                <a
                  href="https://www.linkedin.com/in/muhamad-ari-shandi-ba0434296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >Muhammad Ari Sandi</a
                >
              </h3>
              <p>Backend Developer</p>
            </div>
          </div>
          <div
            class="aboutus-items-container"
            data-aos-duration="2000"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div class="aboutus-card">
              <div class="aboutus-img-container">
                <img src="/public/assets/images/sekar.png" alt="img aboutus" />
              </div>
              <h3>
                <a
                  href="https://id.linkedin.com/in/putri-sekar-pertiwi-355aa6217"
                  >Putri Sekar Pertiwi</a
                >
              </h3>
              <p>Backend Developer</p>
            </div>
            <div class="aboutus-card">
              <div class="aboutus-img-container">
                <img src="/public/assets/images/denisya.png" alt="img aboutus" />
              </div>
              <h3>
                <a href="http://www.linkedin.com/in/denisya-ardiana-8636a824b"
                  >Denisya Ardiana
                </a>
              </h3>
              <p>Quality Assurance</p>
            </div>
            <div class="aboutus-card">
              <div class="aboutus-img-container">
                <img src="/public/assets/images/afifah.png" alt="img aboutus" />
              </div>
              <h3>
                <a
                  href="https://www.linkedin.com/in/avivah-sri-santika-a6503a285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  >Avivah Sri Santika</a
                >
              </h3>
              <p>Quality Assurance</p>
            </div>
          </div>
        </section>
      </section>
    `;
  }
}
