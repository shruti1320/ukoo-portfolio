// OffcanvasMenu.js
import React from 'react';
import HeaderFooter from './HeaderFooter';

const OffcanvasMenu = () => (
  <div
    className="offcanvas offcanvas-end offcanvas-color"
    tabIndex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div className="offcanvas-header">
      <button
        type="button"
        className="btn-close text-reset btn-close-white ms-auto"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <ul style={{ listStyleType: "none" }} className="m-auto">
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline" aria-current="page" href="#home">
            Ukoo - The Brand
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline" href="#bumn">
            Nature
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline" href="#softwareengineer">
            View Admirer
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline" href="#it">
            Traditional
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline" href="#startup">
            Sunset
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline" href="#Daftar">
            Animal Lover
          </a>
        </li>
        <li className="nav-item fs-5">
          <a className="nav-link text-white custom-underline" href="#gallery">
            Gallery
          </a>
        </li>
      </ul>
      <div style={{ marginTop: "auto", marginBottom: "30px" }}>
        <HeaderFooter />
      </div>
    </div>
  </div>
);

export default OffcanvasMenu;
