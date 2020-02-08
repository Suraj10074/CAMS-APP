import React from 'react'
const ProfileOfMechanicalEngineering = ({ match, location }) => {
    const { params: { itemId } } = match;
    var Student=[
            {
                name:"Suraj Singh",
                imgUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                attendance:"100",
                rollNO:"01ME",
                year:"4th Year"
            },
            {
                name:"Sam",
                imgUrl:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
                attendance:"100",
                rollNo:"02ME",
                year:"4th Year"
            },
            {
                name:"Rahul",
                imgUrl:"https://images.unsplash.com/photo-1559933240-941267a02c9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"100",
                rollNo:"03IT",
                year:"1st Year"
                
            },
            {
                name:"Virat",
                imgUrl:"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"100",
                rollNo:"04ME",
                year:"2nd Year"
                
            },  
            {
                name:"Arun",
                imgUrl:"https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                renattendancet:"90",
                rollNo:"05ME",
                year:"4th Year"
            },
            {
                name:"Mayak",
                imgUrl:"https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"90",
                rollNo:"06ME",
                year:"3rd Year"
            },  
            {
                name:"Shubham",
                imgUrl:"https://images.unsplash.com/photo-1553198006-8f63e9ee0ae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"80",
                rollNo:"07ME",
                year:"4th Year"
            },
            {
                name:"Honey",
                imgUrl:"https://images.unsplash.com/photo-1542458580-9d880e2a6bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"100",
                rollNo:"08ME",
                year: "3rd year"
            },  {
                name:"Arpit",
                imgUrl:"https://images.unsplash.com/photo-1564866657311-e9cc905d29cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                attendance:"75",
                rollNo:"09ME",
                year:"4th Year"
            }

        ]

return (
    <>
     <div className="text-center mt-5 p-5 bg-warning">
        <img src={Student[itemId-1].imgUrl} style={{width:"400px",height:"300px",marginLeft:"-50px"}}></img>
        <h3 classname="font-weight-bolder"> {'Name: '}{Student[itemId - 1].name}</h3>
        <h3 classname="font-weight-bolder"> {'Attendance: '}{Student[itemId - 1].attendance}</h3>
        <h3 classname="font-weight-bolder"> {'Roll Number: '}{Student[itemId - 1].rollNo}</h3>
        <h3 classname="font-weight-bolder"> {'Year: '}{Student[itemId - 1].year}</h3>
        <h3 classname="font-weight-bolder"> {'Branch: Computer Science '}</h3>
    </div>
      </>
    );
  };
export default ProfileOfMechanicalEngineering;