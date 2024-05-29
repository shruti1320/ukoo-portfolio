import React from "react";
import "../css/style.css";
import uku1 from "../images/Banner/uku1.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
 
    return (
      <div>
       
    
        {/* <!--Single portfolio item one--> */}
        <section
          className="single-items center-block parallax m-0"
          id="home"
          style={{ background: `url(${uku1})` }}
        >
          <div className="container ">
            <div className="row">
              <div className="col-md-12 center-col">
                <div className="area-heading text-center wow fadeInUp">
                  <h3 className="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <strong>Sriwijaya</strong> Digital Festival
                  </h3>
                  <p className="text-white font-weight-300">
                    Persembahan Forum Teknologi Sumatera Selatan
                  </p>
                  <p className="text-white font-weight-300">
                    Palembang, 28 - 29 November 2020
                  </p>

                  <a
                    href="https://bit.ly/RegistrasiSDF20"
                    className="btn btn-transparent-white btn-rounded btn-rounded btn-large mt-3"
                  >
                    Daftar Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden">
            <a
              data-fancybox="group-one"
              data-thumb="innovative/img/gallery-thumb1.jpg"
              href="innovative/img/gallery-thumb1.jpg"
            ></a>
            <a
              data-fancybox="group-one"
              data-thumb="innovative/img/gallery-thumb2.jpg"
              href="innovative/img/gallery-thumb2.jpg"
            ></a>
            <a
              data-fancybox="group-one"
              data-thumb="innovative/img/gallery-thumb3.jpg"
              href="innovative/img/gallery-thumb3.jpg"
            ></a>
            <a
              data-fancybox="group-one"
              data-thumb="innovative/img/gallery-thumb4.jpg"
              href="innovative/img/gallery-thumb4.jpg"
            ></a>
            <a
              data-fancybox="group-one"
              data-thumb="innovative/img/gallery-thumb5.jpg"
              href="innovative/img/gallery-thumb5.jpg"
            ></a>
          </div>
        </section>

        {/* <!--Single portfolio item two--> */}
        <section
          className="single-items center-block parallax"
          id="bumn"
          style={{ background: `url(${uku1})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6 center-col">
                <div className="area-heading text-right wow fadeInRight">
                  <h3 className="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-two"
                      href="https://i.imgur.com/ANLGPqA.jpg"
                    >
                      Transformasi <strong>Digital</strong>
                    </a>
                  </h3>
                  <h4 className="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-four"
                      href="https://i.imgur.com/DfaLATq.jpg"
                    >
                      <strong>
                        Transformasi Digital disektor <br /> perbankan, produksi
                        dan pemerintah
                      </strong>{" "}
                    </a>
                  </h4>
                  <br />
                  <br />
                  <p className="text-white font-weight-300">
                    <strong>Pigar</strong> - <i>Head of Digital Labs</i>, PT
                    Semen Baturaja
                  </p>
                  <p className="text-white font-weight-300">
                    <strong>Adelia April Lisianti</strong> -{" "}
                    <i>Digital Product Manager</i>, Bank BNI
                  </p>
                  <p className="text-white font-weight-300">
                    <strong>Hengki Sihombing</strong> -{" "}
                    <i>Direktur Operasi Kartu</i>, Prakerja
                  </p>
                  <p className="text-white font-weight-300">
                    <strong>M Ramadhan A</strong> -{" "}
                    <i>VP IT Business Partner & Services</i>, Pusri
                  </p>
                  <br />
                  <br />
                  <br />
                  <h8 className="area-title text-capitalize alt-font text-white mb-2 font-weight-50">
                    <a
                      data-fancybox="group-four"
                      href="https://i.imgur.com/DfaLATq.jpg"
                    >
                      {" "}
                      <strong>- Sabtu, 28 November 2020 -</strong>
                    </a>
                  </h8>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden">
            <a
              data-fancybox="group-two"
              data-thumb="innovative/img/gallery-thumb1.jpg"
              href="innovative/img/gallery-thumb1.jpg"
            ></a>
            <a
              data-fancybox="group-two"
              data-thumb="innovative/img/gallery-thumb2.jpg"
              href="innovative/img/gallery-thumb2.jpg"
            ></a>
            <a
              data-fancybox="group-two"
              data-thumb="innovative/img/gallery-thumb3.jpg"
              href="innovative/img/gallery-thumb3.jpg"
            ></a>
            <a
              data-fancybox="group-two"
              data-thumb="innovative/img/gallery-thumb4.jpg"
              href="innovative/img/gallery-thumb4.jpg"
            ></a>
            <a
              data-fancybox="group-two"
              data-thumb="innovative/img/gallery-thumb5.jpg"
              href="innovative/img/gallery-thumb5.jpg"
            ></a>
          </div>
        </section>

        <section
          class="single-items center-block parallax"
          id="corporate"
          style={{ background: "url(innovative/img/uku3.jpeg)" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-8">
                <div class="area-heading text-left wow fadeInLeft">
                  <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-two"
                      href="https://i.imgur.com/ANLGPqA.jpg"
                    >
                      Karier <strong>Software Engineer</strong>
                    </a>
                  </h3>
                  <h4 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-four"
                      href="https://i.imgur.com/DfaLATq.jpg"
                    >
                      <strong>
                        Berbagi Perjalanan dan Pengalaman dalam Memulai Karir
                        Sebagai <br /> Software Engineer
                      </strong>{" "}
                    </a>
                  </h4>
                  <br />
                  <br />
                  <p class="text-white font-weight-300">
                    <strong>Arief Rahmansyah</strong> -{" "}
                    <i>Machine Learning Engineer</i>, Gojek Singapore
                  </p>
                  <p class="text-white font-weight-300">
                    <strong>Faisal Morensya</strong> - <i>Software Engineer</i>,
                    Talabat Dubai
                  </p>
                  <p class="text-white font-weight-300">
                    <strong>Zaki Al-Afrani</strong> - <i>Technical Architect</i>
                    , Tokopedia
                  </p>
                  <br />
                  <br />
                  <br />
                  <h8 class="area-title text-capitalize alt-font text-white mb-2 font-weight-50">
                    <a
                      data-fancybox="group-four"
                      href="https://i.imgur.com/DfaLATq.jpg"
                    >
                      {" "}
                      <strong>- Sabtu, 28 November 2020 -</strong>
                    </a>
                  </h8>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden">
            <a
              data-fancybox="group-three"
              data-thumb="innovative/img/gallery-thumb1.jpg"
              href="innovative/img/gallery-thumb1.jpg"
            ></a>
            <a
              data-fancybox="group-three"
              data-thumb="innovative/img/gallery-thumb2.jpg"
              href="innovative/img/gallery-thumb2.jpg"
            ></a>
            <a
              data-fancybox="group-three"
              data-thumb="innovative/img/gallery-thumb3.jpg"
              href="innovative/img/gallery-thumb3.jpg"
            ></a>
            <a
              data-fancybox="group-three"
              data-thumb="innovative/img/gallery-thumb4.jpg"
              href="innovative/img/gallery-thumb4.jpg"
            ></a>
            <a
              data-fancybox="group-three"
              data-thumb="innovative/img/gallery-thumb5.jpg"
              href="innovative/img/gallery-thumb5.jpg"
            ></a>
          </div>
        </section>

        {/* <!--Single portfolio item four--> */}
        <section
          class="single-items center-block parallax"
          id="startup"
          style={{ background: "url(innovative/img/uku8.jpeg)" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-md-12 center-col">
                <div class="area-heading text-right wow fadeInRight">
                  <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-two"
                      href="https://i.imgur.com/ANLGPqA.jpg"
                    >
                      <strong>Collaboration</strong> for Tech Sumsel
                    </a>
                  </h3>
                  <h4 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-four"
                      href="https://i.imgur.com/DfaLATq.jpg"
                    >
                      <strong>
                        Peran Komunitas, Lembaga Kursus dan Kampus <br /> dalam
                        Mengembangkan Talent Digital <br /> di Sumatera Selatan.
                      </strong>{" "}
                    </a>
                  </h4>
                  <br />
                  <br />
                  <p class="text-white font-weight-300">
                    <strong>Joneten Saputra</strong> - <i>Head of</i>, Palembang
                    Digital
                  </p>
                  <p class="text-white font-weight-300">
                    <strong>Ahmad Farisi</strong> - <i>Informatics Lecturer</i>,
                    MDP
                  </p>
                  <p class="text-white font-weight-300">
                    <strong>Malian Zikri</strong> - <i>CEO</i>, Digital Creative
                  </p>
                  <br />
                  <br />
                  <br />
                  <h8 class="area-title text-capitalize alt-font text-white mb-2 font-weight-50">
                    <a
                      data-fancybox="group-four"
                      href="https://i.imgur.com/DfaLATq.jpg"
                    >
                      {" "}
                      <strong>- Minggu, 29 November 2020 -</strong>
                    </a>
                  </h8>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden">
            <a
              data-fancybox="group-four"
              data-thumb="innovative/img/gallery-thumb1.jpg"
              href="innovative/img/gallery-thumb1.jpg"
            ></a>
            <a
              data-fancybox="group-four"
              data-thumb="innovative/img/gallery-thumb2.jpg"
              href="innovative/img/gallery-thumb2.jpg"
            ></a>
            <a
              data-fancybox="group-four"
              data-thumb="innovative/img/gallery-thumb3.jpg"
              href="innovative/img/gallery-thumb3.jpg"
            ></a>
            <a
              data-fancybox="group-four"
              data-thumb="innovative/img/gallery-thumb4.jpg"
              href="innovative/img/gallery-thumb4.jpg"
            ></a>
            <a
              data-fancybox="group-four"
              data-thumb="innovative/img/gallery-thumb5.jpg"
              href="innovative/img/gallery-thumb5.jpg"
            ></a>
          </div>
        </section>

        {/* <!--Single portfolio item five--> */}
        <section
          class="single-items center-block parallax"
          id="softwareengineer"
          style={{ background: "url(innovative/img/uku24.jpeg)" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-8">
                <div class="area-heading text-left wow fadeInLeft">
                  <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-two"
                      href="https://i.imgur.com/ANLGPqA.jpg"
                    >
                      Ekosistem <strong>Startup</strong> Nasional
                    </a>
                  </h3>
                  <h4 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-four"
                      href="https://i.imgur.com/DfaLATq.jpg"
                    >
                      <strong>
                        Startup yang Melirik Kearifan Lokal (Warung, Tambak
                        Ikan, dan Nelayan)
                      </strong>{" "}
                    </a>
                  </h4>
                  <br />
                  <br />
                  <p class="text-white font-weight-300">
                    <strong>Farid Naufal</strong> - <i>CEO & Co. Founder</i>,
                    Aruna.id
                  </p>
                  <p class="text-white font-weight-300">
                    <strong>Sofian Hadiwijaya</strong> -{" "}
                    <i>CTO & Co. Founder</i>, Warung Pintar
                  </p>
                  <p class="text-white font-weight-300">
                    <strong>Gibran Huzaifah</strong> - <i>CEO & Co. Founder</i>,
                    e-Fishery
                  </p>
                  <br />
                  <br />
                  <br />
                  <h8 class="area-title text-capitalize alt-font text-white mb-2 font-weight-50">
                    <a
                      data-fancybox="group-four"
                      href="https://i.imgur.com/DfaLATq.jpg"
                    >
                      {" "}
                      <strong>- Minggu, 29 November 2020 -</strong>
                    </a>
                  </h8>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Single portfolio item six--> */}
        <section
          class="single-items center-block parallax"
          id="it"
          style={{ background: "url(innovative/img/uku22.jpeg)" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-md-12 center-col">
                <div class="area-heading text-right wow fadeInRight">
                  <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-two"
                      href="https://i.imgur.com/ANLGPqA.jpg"
                    >
                      <strong>Jadwal</strong> & <strong>Daftar</strong>
                    </a>
                  </h3>
                  <br />
                  <br />
                  <h5 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-four"
                      href="https://i.imgur.com/DfaLATq.jpg"
                    >
                      <strong>Sabtu, 28 November 2020</strong>{" "}
                    </a>
                  </h5>
                  <p class="text-white font-weight-300">
                    <strong>Transformasi Digital</strong> : <i>11.00 - 12.30</i>
                  </p>
                  <p class="text-white font-weight-300">
                    <strong>Karier Software Engineer</strong> :{" "}
                    <i>13.00 - 14.30</i>
                  </p>
                  <br />
                  <h5 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-four"
                      href="https://i.imgur.com/DfaLATq.jpg"
                    >
                      <strong>Minggu, 29 November 2020</strong>{" "}
                    </a>
                  </h5>
                  <p class="text-white font-weight-300">
                    <strong>Collaboration For Talent Tech Sumsel</strong> :{" "}
                    <i>10.10 - 11.50</i>
                  </p>
                  <p class="text-white font-weight-300">
                    <strong>Ekosistem Startup Nasional</strong> :{" "}
                    <i>13.00 - 14.30</i>
                  </p>
                  <a
                    href="https://bit.ly/RegistrasiSDF20"
                    class="btn btn-transparent-white btn-rounded btn-rounded btn-large mt-3"
                  >
                    Daftar Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden">
            <a
              data-fancybox="group-six"
              data-thumb="innovative/img/gallery-thumb1.jpg"
              href="innovative/img/gallery-thumb1.jpg"
            ></a>
            <a
              data-fancybox="group-six"
              data-thumb="innovative/img/gallery-thumb2.jpg"
              href="innovative/img/gallery-thumb2.jpg"
            ></a>
            <a
              data-fancybox="group-six"
              data-thumb="innovative/img/gallery-thumb3.jpg"
              href="innovative/img/gallery-thumb3.jpg"
            ></a>
            <a
              data-fancybox="group-six"
              data-thumb="innovative/img/gallery-thumb4.jpg"
              href="innovative/img/gallery-thumb4.jpg"
            ></a>
            <a
              data-fancybox="group-six"
              data-thumb="innovative/img/gallery-thumb5.jpg"
              href="innovative/img/gallery-thumb5.jpg"
            ></a>
          </div>
        </section>

        {/* <!--Single portfolio item seven--> */}
        <section
          class="single-items center-block item-seven parallax"
          style={{ background: "url(innovative/img/uku23.jpeg)" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-8">
                <div class="area-heading text-left wow fadeInLeft">
                  <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-seven"
                      href="https://i.imgur.com/G0CadAX.jpg"
                    >
                      <strong>Sponsorship</strong> Partner
                    </a>
                  </h3>
                  <p class="text-white">List Sponsorship..</p>
                  <a
                    class="btn btn-transparent-white btn-rounded btn-large mt-3"
                    data-fancybox="group-eight"
                    href="https://i.imgur.com/G0CadAX.jpg"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--Single portfolio item eight--> */}
        <section
          class="single-items center-block parallax"
          id="Daftar"
          style={{ background: "url(innovative/img/uku19.jpeg)" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-md-12 center-col">
                <div class="area-heading text-right wow fadeInRight">
                  <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-seven"
                      href="https://i.imgur.com/G0CadAX.jpg"
                    >
                      <strong>Community</strong> Partner
                    </a>
                  </h3>
                  <p class="text-white">List Compar..</p>
                  <a
                    class="btn btn-transparent-white btn-rounded btn-large mt-3"
                    data-fancybox="group-eight"
                    href="https://i.imgur.com/G0CadAX.jpg"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden">
            <a
              data-fancybox="group-eight"
              data-thumb="innovative/img/gallery-thumb1.jpg"
              href="innovative/img/gallery-thumb1.jpg"
            ></a>
            <a
              data-fancybox="group-eight"
              data-thumb="innovative/img/gallery-thumb2.jpg"
              href="innovative/img/gallery-thumb2.jpg"
            ></a>
            <a
              data-fancybox="group-eight"
              data-thumb="innovative/img/gallery-thumb3.jpg"
              href="innovative/img/gallery-thumb3.jpg"
            ></a>
            <a
              data-fancybox="group-eight"
              data-thumb="innovative/img/gallery-thumb4.jpg"
              href="innovative/img/gallery-thumb4.jpg"
            ></a>
            <a
              data-fancybox="group-eight"
              data-thumb="innovative/img/gallery-thumb5.jpg"
              href="innovative/img/gallery-thumb5.jpg"
            ></a>
          </div>
        </section>

        {/* <!--Single portfolio item nine--> */}
        <section
          class="single-items center-block parallax"
          style={{ background: "url(innovative/img/uku20.jpeg)" }}
        >
          <div class="container">
            <div class="row">
              <div class="col-md-5 col-sm-8 col-xs-11">
                <div class="area-heading text-left wow fadeInLeft">
                  <h3 class="area-title text-capitalize alt-font text-white mb-2 font-weight-100">
                    <a
                      data-fancybox="group-seven"
                      href="https://i.imgur.com/G0CadAX.jpg"
                    >
                      <strong>Media</strong> Partner
                    </a>
                  </h3>
                  <p class="text-white">List Medpar..</p>
                  <a
                    class="btn btn-transparent-white btn-rounded btn-large mt-3"
                    data-fancybox="group-eight"
                    href="https://i.imgur.com/G0CadAX.jpg"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden">
            <a
              data-fancybox="group-nine"
              data-thumb="innovative/img/gallery-thumb1.jpg"
              href="innovative/img/gallery-thumb1.jpg"
            ></a>
            <a
              data-fancybox="group-nine"
              data-thumb="innovative/img/gallery-thumb2.jpg"
              href="innovative/img/gallery-thumb2.jpg"
            ></a>
            <a
              data-fancybox="group-nine"
              data-thumb="innovative/img/gallery-thumb3.jpg"
              href="innovative/img/gallery-thumb3.jpg"
            ></a>
            <a
              data-fancybox="group-nine"
              data-thumb="innovative/img/gallery-thumb4.jpg"
              href="innovative/img/gallery-thumb4.jpg"
            ></a>
            <a
              data-fancybox="group-nine"
              data-thumb="innovative/img/gallery-thumb5.jpg"
              href="innovative/img/gallery-thumb5.jpg"
            ></a>
          </div>
        </section>

      </div>
    );
  }
}

export default Home;
