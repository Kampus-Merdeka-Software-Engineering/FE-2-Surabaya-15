import { async } from 'regenerator-runtime';

const AboutUs = {
    async render() {
        return `
        <div class=" container" style="margin-top: 100px;">
            <section class=" aboutus_container">
                <div class="title">
                    <h1>About Us</h1>
                    <hr class="line">
                </div>
                <p>Fifty Hotels is a pioneer in the hospitality industry committed to changing the way you book
                    accommodation. We believe that your journeyshould start with peace of mind and the assurance that your room is available without any hassle.
                </p>
            </section>
            <section class="mt-5">
                <div class="row">
                    <div class="col-md-6">
                        <div class="crd1">
                            <h1> Vision</h1>
                            <hr class="line">
                        </div>
                        <p>Create a seamless and peacefull accommodation booking experience
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div class="crd1">
                            <h1> Mission</h1>
                            <hr class="line">
                        </div>
                        <p>1. Guarantee that each of your trips starts with inner peace and guaranteed room availability without problems.
                            <br>2. Leading innovation in the hospitality industry with a commitment to revolutionizing the way
                            you book accommodation.
                        </p>
                    </div>
                </div>
            </section>
            <section class=" aboutus_container my-5">
                <div class="title">
                    <h1> Group 15 Team H Section Surabaya</h1>
                    <hr class="line1">
                </div>
                    <div class="w-100 d-flex align-items-center justify-content-center">
                        <div class="card2 mb-5">
                            <div class="img1">
                            <img src="./images/elza.png" alt="/" class="imgcrd">
                            </div>
                            <h3> <a href="https://www.linkedin.com/in/elza-mardalena-4669bb296">Elza Mardalena</a></h3>
                            <p> Group Project Leader</p>
                        </div>
                    </div>
                    <div class="row gy-5 mb-5 gx-2">
                        <div class="align-items-center justify-content-center d-flex col-md-4">
                            <div class="card2">
                                <div class="img1">
                                <img src="./images/sandhy.png" alt="/" class="imgcrd">
                                </div>
                                <h3><a href="https://www.linkedin.com/in/sandhydhannova/">Sandhy Dhannova</a></h3>
                                <p>Frontend Developer</p>
                            </div>
                        </div>
                        <div class="align-items-center justify-content-center d-flex col-md-4">
                            <div class="card2">
                            <div class="img1">
                            <img src="./images/ihsan.png" alt="/" class="imgcrd">
                            </div>
                                <h3><a href="https://www.linkedin.com/in/ihksan-fadjeri-509878284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Ihsan Fajeri</a></h3>
                                <p> Frontend Developer</p>
                            </div>
                        </div>
                        <div class="align-items-center justify-content-center d-flex col-md-4">
                            <div class="card2">
                            <div class="img1">
                            <img src="./images/ari.png" alt="/" class="imgcrd">
                            </div>                                
                                <h3><a href="https://www.linkedin.com/in/muhamad-ari-shandi-ba0434296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Muhammad Ari Sandi</a></h3>
                                <p> Backend Developer</p>
                            </div>
                        </div>
                    </div>
                    <div class="row gy-5 gx-2">
                        <div class="align-items-center justify-content-center d-flex col-md-4">
                            <div class="card2">
                            <div class="img1">
                            <img src="./images/sekar.png" alt="/" class="imgcrd">
                            </div>                                
                                <h3><a href="https://id.linkedin.com/in/putri-sekar-pertiwi-355aa6217">Putri Sekar Pertiwi</a></h3>
                                <p>Backend Developer</p>
                            </div>
                        </div>
                        <div class="align-items-center justify-content-center d-flex col-md-4">
                            <div class="card2">
                            <div class="img1">
                            <img src="./images/denisya.png" alt="/" class="imgcrd">
                            </div>                                
                                <h3><a href="http://www.linkedin.com/in/denisya-ardiana-8636a824b">Denisya Ardiana </a></h3>
                                <p> Quality Assurance</p>
                            </div>
                        </div>
                        <div class="align-items-center justify-content-center d-flex col-md-4">
                            <div class="card2">
                            <div class="img1">
                            <img src="./images/avivah.png" alt="/" class="imgcrd">
                            </div>                               
                                <h3><a href="https://www.linkedin.com/in/avivah-sri-santika-a6503a285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Avivah Sri Santika</a></h3>
                                <p> Quality Assurance</p>
                            </div>
                        </div>
                    </div>
            </section>
        </div>

        `;
    },
    async afterRender() {

    }
};
export default AboutUs;