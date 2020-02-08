import React from 'react'
import { Link } from "react-router-dom";
const Home_carousel=()=>{
    return(
 <div className="bg-warning">
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{height: "700px"}}>
      <div class="carousel-item active">
        <img style={{height: "700px"}} class="d-block w-100" src="photo-1523050854058-8df90110c9f1 (1).jpeg" alt="First slide" />
        <div class="carousel-caption d-none d-md-block">
        <Link to="/Profile"><button className="btn btn-warning ">View Profile</button></Link>
      </div>
    </div>

      <div class="carousel-item">
        <img style={{height: "700px"}} class="d-block w-100" src="photo-1571260899304-425eee4c7efc.jpeg" alt="Second slide" />
        <div class="carousel-caption d-none d-md-block">
        <Link to="/signup"> <button className="btn btn-warning">Sign Up </button></Link>
      </div>
    </div>

    <div class="carousel-item">
        <img  style={{height: "700px"}} class="d-block w-100" src="photo-1522202176988-66273c2fd55f.jpeg" alt="Third slide" />
        <div class="carousel-caption d-none d-md-block">
        <Link to="/profile"><button className="btn btn-warning">Student Profile</button></Link>
      </div>
    </div>

    <div class="carousel-item">
        <img  style={{height: "700px"}} class="d-block w-100" src="photo-1555967522-37949fc21dcb.jpeg" alt="Third slide" />
        <div class="carousel-caption d-none d-md-block">
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
        </div>
    )
}
export default Home_carousel;