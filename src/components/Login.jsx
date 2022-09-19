import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router';




const Login = () => {

    const navigate = useNavigate();
    const [login, setLogin] = useState(false);


    if (login) {
        navigate('/home')
    }

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange  = (e) => {
        setUser({
            ...user,
          [e.target.id]: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        setLogin(false);
        axios.post("https://greendeckassignment1.herokuapp.com/login", user)
        .then((res) => {
            console.log(res.data);
            setLogin(true)
            alert("Login Successful")
        }).catch((err) => {
            console.log(err)
        })
    }
 

     const Google = () => {
      window.open("http://localhost:8080/auth/google", "_self")
     }


  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleClick}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
              Not registered yet?{" "}
              <Link to='signup'>
              <span className="link-primary">
                Sign Up
              </span>
              </Link>
            </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <br/>
            <input
              type="email"
              id="email"
              className="form-control mt-1"
              placeholder="Enter email"
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
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>
          <br/>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary"  onClick={handleClick}> 
              Submit
            </button>
            <button className="btn btn-primary ww-100 mb-4" onClick={Google}>
                <span className="fa fa-google me-4">
                <a href="https://greendeckassignment1.herokuapp.com/auth/google"></a>
                </span> sing in with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
