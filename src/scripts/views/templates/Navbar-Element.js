class NavbarElement extends HTMLElement {
  constructor () {
    super ();
  }

  connectedCallback () {
    this.render ();
  }

  render () {
    this.innerHTML = `
        <nav
          class="navbar navbar-expand-lg fixed-top p-3"
          style="background-color: #3A4D39;"
        >
          <div class="container">
            <a class="logo" href="#"
              ><img style="width:140px;" src="./icons/logo.png"
            /></a>
            <button
              class="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i class="bx bx-menu-alt-right bx-md text-white"></i>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto mt-3 mt-lg-0 mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="/" id="link-home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/booking">Booking</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/aboutus">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link"href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `;
  }
}

customElements.define ('navbar-element', NavbarElement);
