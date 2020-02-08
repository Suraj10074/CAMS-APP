import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
<div >
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{height: "700px"}}>
      <div class="carousel-item active">
        <img style={{height: "700px"}} class="d-block w-100" src="photo-1498079022511-d15614cb1c02.jpeg" alt="First slide" />
        <div class="carousel-caption d-none d-lg-block text-light font-weight-bolder">
        <h3>About CAMS </h3>
        <h5>
        About CAMS is Software Student administration management system is the most integral and essential module of College ERP. Details of students, faculty and staff with other details of certificates, documents, sections, enrolment numbers are maintained on the software. To list few operations, the ERP automates:
        Creation of admitted student record
        Allotment of roll number, section and subjects
        Updation of student dues and fines
        Issuance of certificates
        Scholarship and fee concession activity
        </h5>
      </div>
    </div>

    <div class="carousel-item">
        <img  style={{height: "700px"}} class="d-block w-100" src="photo-1523050854058-8df90110c9f1 (1).jpeg" alt="Third slide" />
        <div class="carousel-caption d-none d-lg-block text-danger font-weight-bolder">
        <h3>Info CAMS</h3>
        <h3>
          CAMS is a small startup company build by Suraj Singh Indore, (M.P.) India.
        </h3>
      </div>
    </div>

    <div class="carousel-item">
        <img  style={{height: "700px"}} class="d-block w-100" src="photo-1555967522-37949fc21dcb.jpeg" alt="Third slide" />
        <div class="carousel-caption d-none d-lg-block">
        <Link to="/Profile"><button className="btn btn-warning">Profile Student</button></Link>
      </div>
    </div>

  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

<div style={{clear:"both"}} >
    <Footer />
    </div>
</div>
    )
}

export default Contact;