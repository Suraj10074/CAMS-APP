import React, { Component } from 'react'
import { Link } from "react-router-dom";
 class AddCS extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          Name:'',
          imgUrl:'',
          Attendance:'',
          CSDetails:[
              {
                  Name: "",
                  img: "",
                  Attendance: "",
              }
          ]
       }
     }
     handleChange=(event)=>{
        event.preventDefault();
         this.setState({[event.target.name]:event.target.value});
         console.log(this.state.Name,this.state.imgUrl,this.state.Attendance);
         

     }
     handleSubmit=(event)=>{
         event.preventDefault();
         this.setState({
            CSDetails:[
                {
                    Name:this.state.Name,
                    img:this.state.imgUrl,
                    Attendance:this.state.Attendance
                }      
            ]       
         })
        console.log(this.state.CSDetails)
        localStorage.setItem("CSDetails", JSON.stringify(this.state.Details));
     }
  render() {
    return (
      <div style={{marginLeft:"700px",marginTop:"120px"}}>
           <h1 className="ml-5 mb-5"> Profile of Computer Science</h1> 
        <form>
        <h5>Add Name</h5>
        <input type="text" className="form-control w-25 mb-4"></input>
        <h5>Add Image Link Of Student</h5>
        <input type="text" className="form-control w-25 mb-4"></input>
        <h5>Add Attendance</h5>
        <input type="text" className="form-control w-25 mb-4"></input>
        <Link to="/addSuccess"><button className="btn btn-warning w-25">ADD</button></Link>
        </form>
       
      </div>
    )
  }
}
export default AddCS;
