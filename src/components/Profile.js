import React from 'react'
import ComputerScienece from './ComputerScienece';
import MechanicalEngineering from './MechanicalEngineering';
import InformationAndTechnology from './InformationAndTechnology';
import Footer from './Footer'
class Profile extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="bg-warning">
            <ComputerScienece/>
            <MechanicalEngineering/>
            <InformationAndTechnology/>
            <div style={{clear:"both"}}>
            <Footer/>
            </div>
          
            </div>
        );

    }
}
export default Profile;