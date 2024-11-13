import React from "react";
import {
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaMap,
  FaEnvelope,
  FaPhone,
  FaUserGraduate,
} from "react-icons/fa";
import '../ComponentCss/Animations.css'

const Footer = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <>
  <footer
    style={{ backgroundColor: "#2e0f54", marginTop: "5rem" }}
    className="rounded ms-4 me-4 mb-4"
    id="contact"
  >
    <div className="container rounded">
      <div className="row">
        <div className="col-12 col-md-2 mt-3 mt-lg-5 ">
          <h1
            style={{
              background: "linear-gradient(to right, #4F00B2, #4a0f59, #d933ca)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontSize: window.innerWidth < 768 ? "2rem" : "3rem",
              fontWeight: "900",
            }}
          >
            ASEEM
          </h1>
        </div>
        <div className="col-12 col-md-6 mt-2 mt-lg-5 p-lg-5">
          <h1 className="text-black">
            <FaUserGraduate className="me-2 fs-1 pb-2" /> EDUCATION
          </h1>
          <ul className="list text-light ps-5">
            <li>
              <h3>MADRAS UNIVERSITY</h3>
            </li>
            <li>
              <p>BSC Computer Science in DRBCCC HINDU COLLEGE.</p>
            </li>
            <li>
              <h5>2021-2024</h5>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-4 mt-2 mt-lg-5 p-lg-5">
          <h3 className="text-black">Contact</h3>
          <ul className="list">
            <li className="text-light mb-3">
              <a
                className="text-decoration-none text-light"
                href="mailto:mohammedaseemoff@gmail.com"
              >
                <FaEnvelope className="me-2 fs-5" />
                mohammedaseemoff@
              </a>
            </li>
            <li className="text-light">
              <p>
                <FaPhone className="me-2 fs-3" />
                +91 90423 13696
              </p>
            </li>
            <li className="text-light">
              <p>
                <FaPhone className="me-2 fs-3" />
                +91 63815 24889
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <nav
    style={{ backgroundColor: "#0b0215", border: "1px solid #2e0f54" }}
    className="SlideInLeft navbar navbar-expand-lg m-1 d-flex align-items-center flex-wrap"
  >
    <div className="col-6 col-md-2 d-flex justify-content-center">
      <a
        href="https://www.linkedin.com/in/sheik-mohammed-aseem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li className="list-unstyled up" data-bs-toggle="tooltip" title="LinkedIn">
          <FaLinkedin className="fs-1" />
        </li>
      </a>
    </div>
    <div className="col-6 col-md-2 d-flex justify-content-center">
      <a href="https://github.com/Aseemcr7">
        <li className="list-unstyled up" data-bs-toggle="tooltip" title="Github">
          <FaGithub className="fs-1" />
        </li>
      </a>
    </div>
    <div className="col-6 col-md-2 d-flex justify-content-center">
      <a href="https://www.instagram.com/as_33_m_?igsh=MW1mZXB3dzdkZGZyYQ==">
        <li className="list-unstyled up" data-bs-toggle="tooltip" title="Instagram">
          <FaInstagram className="fs-1" />
        </li>
      </a>
    </div>
    <div className="col-6 col-md-2 d-flex justify-content-center">
      <a href="https://www.facebook.com/as33m.M.A?mibextid=ZbWKwL">
        <li className="list-unstyled up" data-bs-toggle="tooltip" title="Facebook">
          <FaFacebook className="fs-1" />
        </li>
      </a>
    </div>
    <div className="col-6 col-md-2 d-flex justify-content-center">
      <a href="https://www.youtube.com/channel/UCOD-RJqyCGZobWc60C9IP4w">
        <li className="list-unstyled up" data-bs-toggle="tooltip" title="YouTube">
          <FaYoutube className="fs-1" />
        </li>
      </a>
    </div>
    <div className="col-6 col-md-2 d-flex justify-content-center">
      <li className="list-unstyled up" data-bs-toggle="tooltip" title="Location">
        <a
          href="https://www.google.com/maps?q=13.101056464523385,80.1013153935003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          <FaMap className="fs-1 text-primary" />
        </a>
      </li>
    </div>
  </nav>
</>
  );
};

export default Footer;
