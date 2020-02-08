import React from 'react'
const StudentDetail=(props)=>{
    return(
        <div>
        <div style={{ marginTop: "100px", marginLeft: "70px" }}>
        <div style={{background:props.bg,width:"94%",borderRadius:"5px"}}><h2 style={{ textAlign: "center",fontWeight:"bold" }}>{props.vname}</h2></div>
        </div>
        </div>
    );
}
export default StudentDetail;