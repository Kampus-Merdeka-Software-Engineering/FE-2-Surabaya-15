(()=>{"use strict";var n,r={772:(n,r,A)=>{A.d(r,{Z:()=>C});var e=A(537),t=A.n(e),o=A(645),i=A.n(o),a=A(667),c=A.n(a),B=new URL(A(5),A.b),d=i()(t()),l=c()(B);d.push([n.id,`/* navbar */\n.navbar-nav .nav-item .nav-link {\n  color: white;\n  font-weight: 600;\n}\n.navbar-nav .nav-item .nav-link:hover {\n  color: grey;\n}\n.navbar-nav {\n  text-align: right !important;\n  margin-right: 20px !important;\n}\n/* end navbar */\n/* jumbotron */\n.jumbotron {\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  gap: 2rem;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\n    url(${l});\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.search_item {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 2rem;\n  flex-direction: row;\n}\n.jumbotron_title h1 {\n  color: white;\n  font-weight: 700;\n  font-size: 60px;\n}\n.jumbotron .form-select {\n  background-color: #bcbcbc;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  padding-right: 40px !important;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.jumbotron .form-select:hover {\n  background-color: #f8f8f8;\n}\n.jumbotron_search .checkin label,\n.jumbotron_search .checkout label {\n  position: absolute;\n  cursor: pointer;\n}\n.jumbotron_search .checkin input,\n.jumbotron_search .checkout input {\n  cursor: pointer;\n  background: transparent;\n  border: none;\n}\n.jumbotron_search .checkin input:focus,\n.jumbotron_search .checkout input:focus {\n  border: none;\n  outline: none;\n}\n.jumbotron_search .checkin input:hover,\n.jumbotron_search .checkout input:hover {\n  background-color: #f8f8f8;\n}\n.jumbotron_search .checkin label:hover,\n.jumbotron_search .checkout label:hover {\n  background-color: #f8f8f8;\n}\n.jumbotron_search .checkin:hover,\n.jumbotron_search .checkout:hover {\n  background-color: #f8f8f8;\n}\n.jumbotron_search .checkin,\n.jumbotron_search .checkout {\n  cursor: pointer;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 20px;\n  background-color: #bcbcbc;\n  flex-direction: column;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\ninput[type="date"]::-webkit-datetime-edit-text {\n  -webkit-appearance: none;\n  display: none;\n}\ninput[type="date"]::-webkit-datetime-edit-month-field {\n  -webkit-appearance: none;\n  display: none;\n}\ninput[type="date"]::-webkit-datetime-edit-day-field {\n  -webkit-appearance: none;\n  display: none;\n}\ninput[type="date"]::-webkit-datetime-edit-year-field {\n  -webkit-appearance: none;\n  display: none;\n}\n.btn-search {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 20px;\n  background-color: #475846;\n  color: white;\n  font-weight: 600;\n}\n.btn-search:hover {\n  background-color: #688067;\n}\n/* end jumbotron */\n\n/* best offer */\n/*  */\n.content_container {\n  width: 100%;\n  background-color: #eeee;\n}\n.items_title {\n  text-align: center;\n  color: black;\n  padding-top: 60px;\n}\n.items_title h1 {\n  font-size: 40px;\n  font-weight: 700;\n}\n.items_title h3 {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 60px;\n}\n.items .facility {\n  font-weight: bold;\n  font-size: 17px;\n}\n.items .facility_item {\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n/*  */\n.card {\n  width: 500px;\n  border-radius: 20px;\n  margin-bottom: 50px !important;\n}\n.card:hover {\n  transform: scale(1.06);\n  transition: all 1s;\n}\n.card img {\n  max-width: 100%;\n  object-fit: cover;\n}\n\n.card_title {\n  width: 100%;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  justify-content: space-between;\n}\n.card_title h1 {\n  font-size: 15px;\n  font-weight: bold;\n  text-align: left;\n}\n.card_title p {\n  font-weight: 700;\n}\n.items h2 {\n  font-size: 30px;\n  font-weight: 800;\n  color: red;\n  text-align: left;\n}\n.items p {\n  text-align: left;\n}\n.location_content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.location_content a {\n  text-decoration: none;\n  border: none;\n  border-radius: 10px;\n  padding: 5px 25px;\n  background-color: #475846;\n  color: white;\n  font-weight: 700;\n  font-size: 14px;\n}\n.location_content a:hover {\n  background-color: #688067;\n}\n.items {\n  padding: 20px 20px;\n  border: none !important;\n}\n/* end best offer */\n\n/* testimoni */\n.card-testi-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 3rem;\n}\n.card-testimoni {\n  width: 300px !important;\n  padding: 20px;\n  background-color: #9aaa9a;\n  margin-bottom: 60px;\n}\n.card-testimoni:hover {\n  transform: scale(1.06);\n  transition: all 1s;\n}\n.card-testimoni .icon {\n  text-align: left;\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.icon_title h1 {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0;\n}\n.icon_title p {\n  font-size: 8px;\n  font-weight: 500;\n}\n.card-testimoni .icon i {\n  font-size: 45px;\n}\n.card-testimoni .message {\n  text-align: left;\n}\n.card-testimoni .message h1 {\n  text-align: center;\n  font-size: 20px;\n  margin-top: 0 !important;\n}\n.form-testi {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n}\n.form-testi form {\n  width: 50%;\n  background-color: #9aaa9a;\n  padding: 20px 30px;\n  border-radius: 10px;\n}\n.form-testi h1 {\n  text-align: center;\n  font-size: 35px;\n  font-weight: 700;\n}\n.form-testi label {\n  font-weight: 700;\n}\n.form-testi .btn-send-content {\n  text-align: center;\n}\n.form-testi .btn-send {\n  text-align: center;\n  border: none;\n  padding: 10px 40px;\n  background-color: #475846;\n  color: white;\n  font-weight: 600;\n  border-radius: 10px;\n}\n.form-testi .btn-send:hover {\n  background-color: #688067;\n}\n/* end testimoni */\n\n/* footer */\n.footer-content {\n  background-color: #475846;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer-content p {\n  color: white;\n  font-weight: 400;\n  text-align: center;\n}\n/* end footer */\n\n/* swiper */\n.swiper {\n  width: 100%;\n  height: 100%;\n}\n.swiper-slide {\n  text-align: center;\n  font-size: 18px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.swiper-pagination span {\n  background-color: black;\n}\n\n/* end swiper */\n\n/* booking */\n.booking_container .title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 20px;\n}\n.booking_container .title h1 {\n  font-weight: 700;\n  color: #2b342b;\n}\n.booking_container .title hr.line {\n  width: 100%;\n  opacity: 100;\n  border: 1.5px solid #2b342b;\n}\n/* end booking */\n\n.swiper-button-next,\n.swiper-button-prev {\n  color: #2b342b !important;\n  font-weight: 900 !important;\n}\n/* detail booking */\n.form-container {\n  width: 100%;\n}\n.form-container form input,\n.form-container form select {\n  background-color: #d9d9d9;\n  border: none;\n}\n.form-container form input:focus,\n.form-container form select:focus {\n  background-color: #d9d9d9;\n  border: none;\n}\n.form-container form {\n  padding: 20px;\n  background-color: #9aaa9a;\n  border-radius: 20px;\n  font-weight: 700;\n}\n.container-checkin-checkout .checkin {\n  border-right: 1px solid black;\n  background-color: #d9d9d9;\n  padding: 10px;\n  border-radius: 10px 0 0 10px;\n}\n.container-checkin-checkout .checkout {\n  border-left: 1px solid black;\n  background-color: #d9d9d9;\n  padding: 10px;\n  border-radius: 0 10px 10px 0;\n}\n.items-booking {\n  background-color: #d9d9d9;\n  padding: 10px;\n  border-radius: 10px;\n}\n.items-booking-number-type {\n  background-color: #d9d9d9;\n  width: 49%;\n  padding: 10px;\n  border-radius: 10px;\n}\n.btn-booking {\n  background-color: #475846;\n  color: white;\n  font-weight: 700;\n  padding: 5px 20px;\n}\n.btn-booking:hover {\n  background-color: #303d2f;\n  color: white;\n}\n.swiper-slide > img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 20px;\n}\n.title-booking {\n  display: flex;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: space-between;\n}\n.title-booking h1 {\n  font-size: 25px;\n  font-weight: 700;\n}\n.title-booking p {\n  font-size: 18px;\n  font-weight: 800;\n}\n.detail-items p {\n  margin: 0;\n  font-size: 16px;\n}\n.detail-items .boldier {\n  font-weight: 700;\n  font-size: 20px;\n}\n.detail-items h2 {\n  font-size: 30px;\n  font-weight: 700;\n  color: red;\n}\n/* end detail booking */\n/* About Us */\n.aboutus_container .title{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 20px;\n}\n.aboutus_container .title h1{\n  font-weight: 700;\n  color: #2b342b;\n}\n.line{\n  width: 80%;\n  border: 2px solid #2b342b;\n  opacity: 100%;\n}\n.line1{\n  width: 35%;\n  border: 2px solid #2b342b;\n  opacity: 100%;\n}\n\n.aboutus_container{\n  width: 100%;\n}\n.row .crd1{\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 20px;  \n}\n.row .crd1 h1{\n  font-weight: 700;\n  color: #2b342b;\n}\n.imgcrd{\n  width: 220px;\n  object-fit: cover;\n  height: 249px;\n\n}\n.card2{\n  text-align: center;\n  padding: 10px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n}\n.img1{\n  background-color: #9AAA9A;\n  padding-top: 30px !important;\n  padding: 0 30px;\n  width: fit-content;\n  border-radius: 20px;\n\n}\n.card2 h3{\n  margin: 0;\n  margin-top: 10px;\n  color: #2b342b;\n  font-weight: 900;\n}\n.card2 p{\n  color: #2b342b;\n  font-weight: 600;\n}\n/* End About Us */\n`,"",{version:3,sources:["webpack://./src/styles/styles.css"],names:[],mappings:"AAAA,WAAW;AACX;EACE,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;AACA;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;AACA,eAAe;AACf,cAAc;AACd;EACE,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,SAAS;EACT;2CACuC;EACvC,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;EAClB,eAAe;AACjB;AACA;;EAEE,eAAe;EACf,uBAAuB;EACvB,YAAY;AACd;AACA;;EAEE,YAAY;EACZ,aAAa;AACf;AACA;;EAEE,yBAAyB;AAC3B;AACA;;EAEE,yBAAyB;AAC3B;AACA;;EAEE,yBAAyB;AAC3B;AACA;;EAEE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,wBAAwB;EACxB,aAAa;AACf;AACA;EACE,wBAAwB;EACxB,aAAa;AACf;AACA;EACE,wBAAwB;EACxB,aAAa;AACf;AACA;EACE,wBAAwB;EACxB,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;AACA,kBAAkB;;AAElB,eAAe;AACf,KAAK;AACL;EACE,WAAW;EACX,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA,KAAK;AACL;EACE,YAAY;EACZ,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,kBAAkB;EAClB,uBAAuB;AACzB;AACA,mBAAmB;;AAEnB,cAAc;AACd;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,SAAS;AACX;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,yBAAyB;EACzB,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,wBAAwB;AAC1B;AACA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,UAAU;EACV,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,yBAAyB;AAC3B;AACA,kBAAkB;;AAElB,WAAW;AACX;EACE,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;AACA,eAAe;;AAEf,WAAW;AACX;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;;AAEA,eAAe;;AAEf,YAAY;AACZ;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;EACZ,2BAA2B;AAC7B;AACA,gBAAgB;;AAEhB;;EAEE,yBAAyB;EACzB,2BAA2B;AAC7B;AACA,mBAAmB;AACnB;EACE,WAAW;AACb;AACA;;EAEE,yBAAyB;EACzB,YAAY;AACd;AACA;;EAEE,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,aAAa;EACb,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,6BAA6B;EAC7B,yBAAyB;EACzB,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,yBAAyB;EACzB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,UAAU;EACV,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,UAAU;AACZ;AACA,uBAAuB;AACvB,aAAa;AACb;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,UAAU;EACV,yBAAyB;EACzB,aAAa;AACf;AACA;EACE,UAAU;EACV,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;;AAEf;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;AACnB;AACA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,eAAe;EACf,kBAAkB;EAClB,mBAAmB;;AAErB;AACA;EACE,SAAS;EACT,gBAAgB;EAChB,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,cAAc;EACd,gBAAgB;AAClB;AACA,iBAAiB",sourcesContent:['/* navbar */\r\n.navbar-nav .nav-item .nav-link {\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n.navbar-nav .nav-item .nav-link:hover {\r\n  color: grey;\r\n}\r\n.navbar-nav {\r\n  text-align: right !important;\r\n  margin-right: 20px !important;\r\n}\r\n/* end navbar */\r\n/* jumbotron */\r\n.jumbotron {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-flow: column;\r\n  gap: 2rem;\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\r\n    url("../public/images/jumbotron.png");\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.search_item {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 2rem;\r\n  flex-direction: row;\r\n}\r\n.jumbotron_title h1 {\r\n  color: white;\r\n  font-weight: 700;\r\n  font-size: 60px;\r\n}\r\n.jumbotron .form-select {\r\n  background-color: #bcbcbc;\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 20px;\r\n  padding-right: 40px !important;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n}\r\n.jumbotron .form-select:hover {\r\n  background-color: #f8f8f8;\r\n}\r\n.jumbotron_search .checkin label,\r\n.jumbotron_search .checkout label {\r\n  position: absolute;\r\n  cursor: pointer;\r\n}\r\n.jumbotron_search .checkin input,\r\n.jumbotron_search .checkout input {\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border: none;\r\n}\r\n.jumbotron_search .checkin input:focus,\r\n.jumbotron_search .checkout input:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n.jumbotron_search .checkin input:hover,\r\n.jumbotron_search .checkout input:hover {\r\n  background-color: #f8f8f8;\r\n}\r\n.jumbotron_search .checkin label:hover,\r\n.jumbotron_search .checkout label:hover {\r\n  background-color: #f8f8f8;\r\n}\r\n.jumbotron_search .checkin:hover,\r\n.jumbotron_search .checkout:hover {\r\n  background-color: #f8f8f8;\r\n}\r\n.jumbotron_search .checkin,\r\n.jumbotron_search .checkout {\r\n  cursor: pointer;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  border-radius: 20px;\r\n  background-color: #bcbcbc;\r\n  flex-direction: column;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\ninput[type="date"]::-webkit-datetime-edit-text {\r\n  -webkit-appearance: none;\r\n  display: none;\r\n}\r\ninput[type="date"]::-webkit-datetime-edit-month-field {\r\n  -webkit-appearance: none;\r\n  display: none;\r\n}\r\ninput[type="date"]::-webkit-datetime-edit-day-field {\r\n  -webkit-appearance: none;\r\n  display: none;\r\n}\r\ninput[type="date"]::-webkit-datetime-edit-year-field {\r\n  -webkit-appearance: none;\r\n  display: none;\r\n}\r\n.btn-search {\r\n  padding: 10px 20px;\r\n  border: none;\r\n  border-radius: 20px;\r\n  background-color: #475846;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n.btn-search:hover {\r\n  background-color: #688067;\r\n}\r\n/* end jumbotron */\r\n\r\n/* best offer */\r\n/*  */\r\n.content_container {\r\n  width: 100%;\r\n  background-color: #eeee;\r\n}\r\n.items_title {\r\n  text-align: center;\r\n  color: black;\r\n  padding-top: 60px;\r\n}\r\n.items_title h1 {\r\n  font-size: 40px;\r\n  font-weight: 700;\r\n}\r\n.items_title h3 {\r\n  font-size: 20px;\r\n  font-weight: 600;\r\n  margin-bottom: 60px;\r\n}\r\n.items .facility {\r\n  font-weight: bold;\r\n  font-size: 17px;\r\n}\r\n.items .facility_item {\r\n  font-size: 14px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*  */\r\n.card {\r\n  width: 500px;\r\n  border-radius: 20px;\r\n  margin-bottom: 50px !important;\r\n}\r\n.card:hover {\r\n  transform: scale(1.06);\r\n  transition: all 1s;\r\n}\r\n.card img {\r\n  max-width: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.card_title {\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 1rem;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.card_title h1 {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  text-align: left;\r\n}\r\n.card_title p {\r\n  font-weight: 700;\r\n}\r\n.items h2 {\r\n  font-size: 30px;\r\n  font-weight: 800;\r\n  color: red;\r\n  text-align: left;\r\n}\r\n.items p {\r\n  text-align: left;\r\n}\r\n.location_content {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.location_content a {\r\n  text-decoration: none;\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 5px 25px;\r\n  background-color: #475846;\r\n  color: white;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n}\r\n.location_content a:hover {\r\n  background-color: #688067;\r\n}\r\n.items {\r\n  padding: 20px 20px;\r\n  border: none !important;\r\n}\r\n/* end best offer */\r\n\r\n/* testimoni */\r\n.card-testi-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n  gap: 3rem;\r\n}\r\n.card-testimoni {\r\n  width: 300px !important;\r\n  padding: 20px;\r\n  background-color: #9aaa9a;\r\n  margin-bottom: 60px;\r\n}\r\n.card-testimoni:hover {\r\n  transform: scale(1.06);\r\n  transition: all 1s;\r\n}\r\n.card-testimoni .icon {\r\n  text-align: left;\r\n  display: flex;\r\n  gap: 0.5rem;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n}\r\n.icon_title h1 {\r\n  font-size: 16px;\r\n  font-weight: 700;\r\n  margin: 0;\r\n}\r\n.icon_title p {\r\n  font-size: 8px;\r\n  font-weight: 500;\r\n}\r\n.card-testimoni .icon i {\r\n  font-size: 45px;\r\n}\r\n.card-testimoni .message {\r\n  text-align: left;\r\n}\r\n.card-testimoni .message h1 {\r\n  text-align: center;\r\n  font-size: 20px;\r\n  margin-top: 0 !important;\r\n}\r\n.form-testi {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-flow: column;\r\n}\r\n.form-testi form {\r\n  width: 50%;\r\n  background-color: #9aaa9a;\r\n  padding: 20px 30px;\r\n  border-radius: 10px;\r\n}\r\n.form-testi h1 {\r\n  text-align: center;\r\n  font-size: 35px;\r\n  font-weight: 700;\r\n}\r\n.form-testi label {\r\n  font-weight: 700;\r\n}\r\n.form-testi .btn-send-content {\r\n  text-align: center;\r\n}\r\n.form-testi .btn-send {\r\n  text-align: center;\r\n  border: none;\r\n  padding: 10px 40px;\r\n  background-color: #475846;\r\n  color: white;\r\n  font-weight: 600;\r\n  border-radius: 10px;\r\n}\r\n.form-testi .btn-send:hover {\r\n  background-color: #688067;\r\n}\r\n/* end testimoni */\r\n\r\n/* footer */\r\n.footer-content {\r\n  background-color: #475846;\r\n  padding: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.footer-content p {\r\n  color: white;\r\n  font-weight: 400;\r\n  text-align: center;\r\n}\r\n/* end footer */\r\n\r\n/* swiper */\r\n.swiper {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.swiper-slide {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.swiper-pagination span {\r\n  background-color: black;\r\n}\r\n\r\n/* end swiper */\r\n\r\n/* booking */\r\n.booking_container .title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 2rem;\r\n  margin-bottom: 20px;\r\n}\r\n.booking_container .title h1 {\r\n  font-weight: 700;\r\n  color: #2b342b;\r\n}\r\n.booking_container .title hr.line {\r\n  width: 100%;\r\n  opacity: 100;\r\n  border: 1.5px solid #2b342b;\r\n}\r\n/* end booking */\r\n\r\n.swiper-button-next,\r\n.swiper-button-prev {\r\n  color: #2b342b !important;\r\n  font-weight: 900 !important;\r\n}\r\n/* detail booking */\r\n.form-container {\r\n  width: 100%;\r\n}\r\n.form-container form input,\r\n.form-container form select {\r\n  background-color: #d9d9d9;\r\n  border: none;\r\n}\r\n.form-container form input:focus,\r\n.form-container form select:focus {\r\n  background-color: #d9d9d9;\r\n  border: none;\r\n}\r\n.form-container form {\r\n  padding: 20px;\r\n  background-color: #9aaa9a;\r\n  border-radius: 20px;\r\n  font-weight: 700;\r\n}\r\n.container-checkin-checkout .checkin {\r\n  border-right: 1px solid black;\r\n  background-color: #d9d9d9;\r\n  padding: 10px;\r\n  border-radius: 10px 0 0 10px;\r\n}\r\n.container-checkin-checkout .checkout {\r\n  border-left: 1px solid black;\r\n  background-color: #d9d9d9;\r\n  padding: 10px;\r\n  border-radius: 0 10px 10px 0;\r\n}\r\n.items-booking {\r\n  background-color: #d9d9d9;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n.items-booking-number-type {\r\n  background-color: #d9d9d9;\r\n  width: 49%;\r\n  padding: 10px;\r\n  border-radius: 10px;\r\n}\r\n.btn-booking {\r\n  background-color: #475846;\r\n  color: white;\r\n  font-weight: 700;\r\n  padding: 5px 20px;\r\n}\r\n.btn-booking:hover {\r\n  background-color: #303d2f;\r\n  color: white;\r\n}\r\n.swiper-slide > img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  border-radius: 20px;\r\n}\r\n.title-booking {\r\n  display: flex;\r\n  margin-top: 10px;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.title-booking h1 {\r\n  font-size: 25px;\r\n  font-weight: 700;\r\n}\r\n.title-booking p {\r\n  font-size: 18px;\r\n  font-weight: 800;\r\n}\r\n.detail-items p {\r\n  margin: 0;\r\n  font-size: 16px;\r\n}\r\n.detail-items .boldier {\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n}\r\n.detail-items h2 {\r\n  font-size: 30px;\r\n  font-weight: 700;\r\n  color: red;\r\n}\r\n/* end detail booking */\r\n/* About Us */\r\n.aboutus_container .title{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 2rem;\r\n  margin-bottom: 20px;\r\n}\r\n.aboutus_container .title h1{\r\n  font-weight: 700;\r\n  color: #2b342b;\r\n}\r\n.line{\r\n  width: 80%;\r\n  border: 2px solid #2b342b;\r\n  opacity: 100%;\r\n}\r\n.line1{\r\n  width: 35%;\r\n  border: 2px solid #2b342b;\r\n  opacity: 100%;\r\n}\r\n\r\n.aboutus_container{\r\n  width: 100%;\r\n}\r\n.row .crd1{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 2rem;\r\n  margin-bottom: 20px;  \r\n}\r\n.row .crd1 h1{\r\n  font-weight: 700;\r\n  color: #2b342b;\r\n}\r\n.imgcrd{\r\n  width: 220px;\r\n  object-fit: cover;\r\n  height: 249px;\r\n\r\n}\r\n.card2{\r\n  text-align: center;\r\n  padding: 10px;\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-flow: column;\r\n}\r\n.img1{\r\n  background-color: #9AAA9A;\r\n  padding-top: 30px !important;\r\n  padding: 0 30px;\r\n  width: fit-content;\r\n  border-radius: 20px;\r\n\r\n}\r\n.card2 h3{\r\n  margin: 0;\r\n  margin-top: 10px;\r\n  color: #2b342b;\r\n  font-weight: 900;\r\n}\r\n.card2 p{\r\n  color: #2b342b;\r\n  font-weight: 600;\r\n}\r\n/* End About Us */\r\n'],sourceRoot:""}]);const C=d},441:(n,r,A)=>{var e=A(379),t=A.n(e),o=A(795),i=A.n(o),a=A(569),c=A.n(a),B=A(565),d=A.n(B),l=A(216),C=A.n(l),p=A(589),s=A.n(p),b=A(772),g={};g.styleTagTransform=s(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=C(),t()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals}},A={};function e(n){var t=A[n];if(void 0!==t)return t.exports;var o=A[n]={id:n,exports:{}};return r[n].call(o.exports,o,o.exports,e),o.exports}e.m=r,n=[],e.O=(r,A,t,o)=>{if(!A){var i=1/0;for(d=0;d<n.length;d++){for(var[A,t,o]=n[d],a=!0,c=0;c<A.length;c++)(!1&o||i>=o)&&Object.keys(e.O).every((n=>e.O[n](A[c])))?A.splice(c--,1):(a=!1,o<i&&(i=o));if(a){n.splice(d--,1);var B=t();void 0!==B&&(r=B)}}return r}o=o||0;for(var d=n.length;d>0&&n[d-1][2]>o;d--)n[d]=n[d-1];n[d]=[A,t,o]},e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var A in r)e.o(r,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:r[A]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var A=r.getElementsByTagName("script");if(A.length)for(var t=A.length-1;t>-1&&!n;)n=A[t--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{e.b=document.baseURI||self.location.href;var n={661:0};e.O.j=r=>0===n[r];var r=(r,A)=>{var t,o,[i,a,c]=A,B=0;if(i.some((r=>0!==n[r]))){for(t in a)e.o(a,t)&&(e.m[t]=a[t]);if(c)var d=c(e)}for(r&&r(A);B<i.length;B++)o=i[B],e.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return e.O(d)},A=self.webpackChunkfe_2_surabaya_15=self.webpackChunkfe_2_surabaya_15||[];A.forEach(r.bind(null,0)),A.push=r.bind(null,A.push.bind(A))})(),e.nc=void 0;var t=e.O(void 0,[356,363,666,577,17,811,924],(()=>e(253)));t=e.O(t)})();
//# sourceMappingURL=app~30d0ad57.bundle.js.map