import React from 'react'
const Home_Content=()=>{
    return(
        <div className='bg-dark text-center text-white'>
            <div className="offset-0" style={{float:"center"}}>
            <h2 className="text-center">Overview</h2>
            <p className="text-center text-justify mt-2">
                CAMS is built on cutting edge modern technology and designed to help Colleges and Guardians to deal with problems of truancy/absenteeism.
                CAMS is built on robust client-server architecture and supports multiple simultaneous clients which enable admin staff to perform their function with utmost ease..</p>
            <img src="photo-1541339907198-e08756dedf3f.jpeg" style={{width:"300px",height:"300px"}}></img>
            </div>
        
            <div className="offset-0 text-center" style={{float:"center"}}>
            <h2 className="text-center mt-5">The Need</h2>
            <p className="text-center text-justify mt-2">More efficient student attendance – CAMS automates the student and staff attendance hence; reducing irregularities in the attendance process arising due to human error.
                    Saving Time – Important administrative and educational resources could be freed up by utilizing CAMS
                    About CAMS is Software Student administration management system is the most integral and essential module of College ERP. Details of students, faculty and staff with other details of certificates, documents, sections, enrolment numbers are maintained on the software. To list few operations, the ERP automates:
                    Creation of admitted student record
                    Allotment of roll number, section and subjects
                    Updation of student dues and fines
                    Issuance of certificates
                    Scholarship and fee concession activity..
                </p>
            <img className="offset-0" src="photo-1531545514256-b1400bc00f31.jpeg" style={{width:"300px",height:"300px"}}></img>
            </div>
        </div>
    );
    
}
export default Home_Content;