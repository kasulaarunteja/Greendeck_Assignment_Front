
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"


const Signin = ()  => {
   
    const [user, setUser] =useState({
        name:"",
        email:"",
        password:"",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {id, value} = e.target;
        setUser({...user, [id]: value});
    }

    const [registered, setRegistered] = useState(false)

    if(registered){
        navigate("/")
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(user);
        setRegistered(false);
        axios.post('http://localhost:8080/register', user).then((res) => {
            console.log(res.data);
            alert("register successful")
            setRegistered(true)
        }).catch((err) => {
            console.log(err)
        })
    }


    const handleGoogleLogin = () => {

    }


    return (
        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleClick}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign up</h3>
            <div className="text-center">
              Already registered?{" "}
              <Link to='/'>
              <span className="link-primary">
                Sign In
              </span>
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <br/>
              <input
                type="text"
                id='name'
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <br/>
              <input
                type="email"
                id='email'
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <br/>
              <input
                type="password"
                id="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange = {handleChange}
              />
            </div>
            <br/>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button className="btn btn-primary ww-100 mb-4" onClick={handleGoogleLogin}>
                <span className="fa fa-google me-4"><a href="http://localhost:8080/auth/google">
                sing in with Google
                </a>
                 </span> 
                </button>
            </div>
          </div>
        </form>
      </div>
    )
}

export default Signin;