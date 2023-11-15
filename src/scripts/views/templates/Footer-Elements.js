class FooterElement extends HTMLElement {
  constructor () {
    super ();
  }

  connectedCallback () {
    this.render ();
  }

  render () {
    this.innerHTML = `
          <section class="container-fluid footer-content">
            <p>privacy Policy | Terms of Use | Contact Support <br>
            Copyright @2023 All Rights Reserved | Design By Group 15</p>
          </section>
        `;
  }
}

customElements.define ('footer-element', FooterElement);
