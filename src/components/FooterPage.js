import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            {/* <h5 className="title">Footer Content</h5> */}
            {/* <p>
              Don't hesitate to contact us
            </p> */}
          </MDBCol>
          <MDBCol md="6">
            {/* <h5 className="title">Links</h5> */}
            {/*  */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <p> Abdulmajed Dhelaimi </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;