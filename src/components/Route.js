import React from "react";
import { Route } from "react-router-dom";
import Home from './Home.js'
import Login from './Login.js'
import Signup from "./Signup.js";
import AdminLog from "./AdminLog.js";
import Dashboard from "./Dashboard.js";
import Profile from "./Profile.js";
import ProfileOfComputerScience from "./ProfileOfComputerScience.js";
import ProfileOfMechanicalEngineering  from "./ProfileOfMechanicalEngineering.js";
import ProfileOfInformationAndTechnology from "./ProfileOfInformationAndTechnology.js";
import Contact from "./Contact.js";
import AddCS from "./AddCS.js";
import AddProfiles from "./AddProfiles.js";
import AddIT from "./AddIT.js";
import AddME from "./AddME.js";
import ShowProfileDetails from "./ShowProfileDetails.js";
import AddSuccess from "./AddSuccess.js";
import taskToDo from "./taskToDo.js";

const Routes = () => {
  return (
    <div>

      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/adminlog" component={AdminLog} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component ={Signup}/>
        <Route path="/taskToDO" component={taskToDo}/>
        <Route path="/Dashboard" component={Dashboard}/>
        <Route path="/Profile" component={Profile}/>
        <Route path="/ProfileOfComputerScience/:itemId" component={ProfileOfComputerScience}/>
        <Route path="/ProfileOfMechanicalEngineering/:itemId" component={ProfileOfMechanicalEngineering}/>
        <Route path="/ProfileOfInformationAndTechnology/:itemId" component={ProfileOfInformationAndTechnology}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/AddCS" component={AddCS}/>
        <Route path="/AddIT" component={AddIT}/>
        <Route path="/AddME" component={AddME}/>
        <Route path="/ShowProfileDetails" component={ShowProfileDetails}/>
        <Route path="/addSuccess" component={AddSuccess}/>
        <Route path="/AddProfiles" component={AddProfiles}/>
      </React.Fragment>
    </div>
  )
    ;
};
export default Routes;