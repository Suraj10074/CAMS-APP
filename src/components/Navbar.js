import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
  return (
    <div className="bg-warning">
      <nav className="nav fixed-top mt-3 bg-dark" style={{height:"70px"}}>
        <Link className="nav-item nav-link text-light font-weight-bolder" to="/"> <h1 style={{ marginLeft: "20px", marginRight: "10px",fontSize: "30px",marginTop:"-10px" }}><span><img src="212-2123413_simpson-university-logo-hd-png-download.png" style={{height:"70px",width:"100px"}}></img>CAMS</span></h1></Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px" }} to="/Dashboard">Dashborad</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px" }} to="/taskToDo">Notification</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px" }} to="/Profile">Attendance & Profile Details</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px" }} to="/contact">CONTACT</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"40px" }} to="/adminlog"><span><img src="https://icon-library.net/images/admin-login-icon/admin-login-icon-11.jpg" style={{color:"black" ,height:"20px"}}></img></span> ADMIN LOGIN</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"10px" }} to="/login"><span><img src="http://keapu-webpp01-centin-r46j07o2.cloudapp.net/PU-LECT-2019/images/user_add.png" style={{color:"black" ,height:"20px"}}></img></span> STUDENT LOG IN</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"10px" }} to="/signup"><span><img src="http://keapu-webpp01-centin-r46j07o2.cloudapp.net/PU-LECT-2019/images/user_add.png" style={{color:"white" ,height:"35px"}}></img></span>SIGN UP</Link>
      </nav>
    </div>
  )
    ;
};
export default Navbar;  