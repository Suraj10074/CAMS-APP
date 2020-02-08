import React from 'react'
import {Link} from 'react-router-dom'
import StudentDetail from './StudentDetail'
class InformationAndTechnology extends React.Component{
    constructor(){
        super();
    this.state={
        Student:[
            {
                name:"Suraj Singh",
                imgUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                attendance:"100",
                rollNO:"01IT"
            },
            {
                name:"Sam",
                imgUrl:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                attendance:"100",
                rollNo:"02IT"
            },
            {
                name:"Rahul",
                imgUrl:"https://images.unsplash.com/photo-1559933240-941267a02c9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"100",
                rollNo:"03IT"
            },
            {
                name:"Virat",
                imgUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"100",
                rollNo:"04IT"
            },  
            {
                name:"Arun",
                imgUrl:"https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                renattendancet:"90",
                rollNo:"05IT"
            },
            {
                name:"Mayak",
                imgUrl:"https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"90",
                rollNo:"06IT"
            },  
            {
                name:"Shubham",
                imgUrl:"https://images.unsplash.com/photo-1553198006-8f63e9ee0ae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"80",
                rollNo:"07IT"
            },
            {
                name:"Honey",
                imgUrl:"https://images.unsplash.com/photo-1542458580-9d880e2a6bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"100",
                rollNo:"08IT"
            },  {
                name:"Arpit",
                imgUrl:"https://images.unsplash.com/photo-1564866657311-e9cc905d29cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"75",
                rollNo:"09IT"
            }

        ]
    }
    }
    render(){
        return(
            <div style={{float:"left",clear:"both"}}>
                <div>
                    <StudentDetail bg="grey" vname="Information & Technology"/>
                </div>
            {
              this.state.Student.map((items,index) => {
                return (
                    <div style={{float:"left"}}>
                    <div className="card" style={{ width: "300px", marginLeft: "110px",marginBottom:"20px"}}>
                     <img src={items.imgUrl} style={{ width: "280px", height: "200px" }}></img>
                     <hr></hr>
                     <p style={{ textAlign: "center" }}>{'Name: '}{items.name}</p>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>{'Attendance:'}{items.attendance} {'%'}</p>
                     <Link to={`/ProfileOfInformationAndTechnology/${index + 1}`}><button className="btn btn-dark" style={{width:"100%"}} >Profile</button></Link>       
                 </div>      
                 </div>
                )
              })
            }
          </div>
            );
    }
}
export default InformationAndTechnology;