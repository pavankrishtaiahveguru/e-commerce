import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  // localStorage.clear();
  let [form,setForm]=useState({name:"",email:"",password:""});
  let change=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  let navigate =useNavigate();
  let login= async(e)=>{
    e.preventDefault();
    if(!form.email || !form.password ){
      alert("name and email is mandatory")
      return;
    }
    try{
      let res=await axios.get(`http://localhost:4040/user`)
      let user=res.data.find((u)=>u.email===form.email);
      if(!user){
        alert("user not exist")
        return;
      }
      if(user.password!==form.password){
        alert("invalid password")
      }
      localStorage.setItem("userDetails",JSON.stringify(user));
      alert("login successfully")
      navigate("/")
      setTimeout(()=>{
      window.location.reload;
    },100);
    }
    catch{
      console.log();
    }
  }

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-5 col-lg-4">
        <div className="card shadow border-0 rounded-4">
          <div className="card-body p-4">
            {/* Heading */}
            <div className="text-center mb-4">
              <h3 className="fw-bold">Welcome Back</h3>
              <p className="text-muted small">
                Login to continue shopping on BuyNest
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={login}>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={change}
                  placeholder="Enter email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label d-flex justify-content-between">
                  <span>Password</span>
                  <a
                    href="#"
                    className="small text-primary text-decoration-none"
                  >
                    Forgot?
                  </a>
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={change}
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2">
                Login
              </button>
            </form>

            {/* Signup Link */}
            <p className="text-center small mt-3 mb-0">
              Don’t have an account?{" "}
              <NavLink
                to="/signup"
                className="text-primary fw-semibold text-decoration-none"
              >
                Sign up
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
