import React from "react";
import { MDBIcon, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import "mdbreact/dist/css/mdb.css";

function FooterComponents() {
  return (
    <React.Fragment>
      <footer className="text-white text-center text-lg-start bg-primary">
        {/* Grid container */}
        <div className="container p-2">
          {/*Grid row*/}
          <div className="row mt-4">
            {/*Grid column*/}
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About company</h5>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <p>
                Blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias.
              </p>
              <div className="mt-4">
                {/* Facebook */}
                <MDBBtn
                  type="button"
                  className="btn btn-floating btn-primary btn-lg"
                >
                  <i className="fab fa-facebook-f" />
                </MDBBtn>
                {/* Dribbble */}
                <a
                  type="button"
                  className="btn btn-floating btn-primary btn-lg"
                >
                  <i className="fab fa-dribbble" />
                </a>
                {/* Twitter */}
                <a
                  type="button"
                  className="btn btn-floating btn-primary btn-lg"
                >
                  <i className="fab fa-twitter" />
                </a>
                {/* Google + */}
                <a
                  type="button"
                  className="btn btn-floating btn-primary btn-lg"
                >
                  <i className="fab fa-google-plus-g" />
                </a>
                {/* Linkedin */}
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
              <div className="form-outline form-white mb-4">
                <input
                  type="text"
                  id="formControlLg"
                  className="form-control form-control-lg"
                />
                <label className="form-label" htmlFor="formControlLg">
                  Search
                </label>
              </div>
              <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                <li className="mb-3">
                  {/* <MDBBtn className="fa-li">
                    <MDBIcon icon="home" className="fas fa-home" />
                  </MDBBtn> */}
                  <MDBIcon icon="home" className="btn btn-outline-purple" type="submit">
                    Subscribe
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBIcon>
                  <span className="ms-2">niranjansharma07@gmail.com</span>
                </li>

                

                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-home" />
                  </span>
                  <span className="ms-2">Lalipur, Patan, NEPAL</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-envelope" />
                  </span>
                  <span className="ms-2">info@nirunzone.com</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-phone" />
                  </span>
                  <span className="ms-2">+ 01 234 567 88</span>
                </li>
                <li className="mb-3">
                  <span className="fa-li">
                    <i className="fas fa-print" />
                  </span>
                  <span className="ms-2">+ 01 234 567 89</span>
                </li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Opening hours</h5>
              <table className="table text-center text-white">
                <tbody className="font-weight-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 8pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1pm</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 7pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <Link className="text-white" to="Mr. Nirunzone">
            Mr. Nirunzone
          </Link>
        </div>
        {/* Copyright */}
      </footer>
    </React.Fragment>
  );
}

export default FooterComponents;
