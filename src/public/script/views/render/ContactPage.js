const TemplatePage =require ( "../TemplatePage.js");

module.exports= class extends TemplatePage {
  constructor(params) {
    super(params);
    this.setTitle("Contact Page");
    this.setNavbar(document.getElementById("navbar_contact"));
  }

  async getHtml() {
    return `
      <section
        class="container container_contact"
        style="margin-top:120px;"
        data-aos-duration="2000"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div class="">
          <div class="title-contact">
            <h1>Contact</h1>
            <hr class="line" />
          </div>
          <div class="contact_items_wrapper">
            <div class="container-contact-item">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56347862248!2d107.57311709235512!3d-6.903444341687889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1672408575523!5m2!1sen!2sid"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="map"
              >
              </iframe>
            </div>
            <div class="container-contact-item">
              <div class="right_content_wrapper">
                <div class="item-contact">
                  <p><i class="bx bxs-phone-call"></i> 0281-666999</p>
                  <p><i class="bx bx-envelope"></i> Fiftyhotel@gmail.com</p>
                  <p><i class="bx bxs-time"></i> 08.00 am -15.00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
