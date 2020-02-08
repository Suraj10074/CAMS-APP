import React from "react";
import './Login.css';
const Login = () => {
    return (
        <div>
            <div className="login-form bg-warning" style={{ marginTop: "120px" }}>
                <form>
                    <img src="http://keapu-webpp01-centin-r46j07o2.cloudapp.net/PU-LECT-2019/images/user_add.png" style={{ height: "80px", marginLeft: "100px" }}></img>
                    <h2 className="text-center">Log in</h2>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" required="required" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">Log in</button>
                    </div>
                    <div className="clearfix">
                        <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                        <a href="#" className="pull-right">Forgot Password?</a>
                    </div>
                </form>
                <p className="text-center"><a href="./Signup">Create an Account</a></p>
            </div>
        </div>
    );

};
export default Login;