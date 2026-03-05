import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { name, email, password, confirmPassword } = form;
  let change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);

  let navigate = useNavigate();
  const [msg,setMsg]=useState("");

  let signupUser = async (e) => {
    e.preventDefault();
    // empty field validation
    if (!form.name || !form.email || !form.password) {
      alert("all fields are mandatory");
      return;
    }

    if(password.length===0){
        setMsg("Week password : cannot be empty");
        return;
    }

    let upperCase=/[A-Z]/;
    let numbers=/[0-9]/;
    let characters=/[!@#$%^&*()_{}<>;:,.?]/;

    if(!upperCase.test(password)){
      setMsg("Password must contain one uppercase character");
      return;
    }

    if(!numbers.test(password)){
      setMsg("Password must contain one number");
      return;
    }

    if(characters.test(password)){
      setMsg("Password must contain one special character");
      return;
    }
    if(password.length<8){
      setMsg("Password must be at least 8 characters length")
      return;
    }

    try {
      // ?email=${form.email}
      let res = await axios.get(`http://localhost:4040/user`);
      console.log(res);
      let userExists = res.data.find((user) => user.email === form.email);
      if (userExists) {
        alert("user is exist ");
        return;
      }
      await axios.post(`http://localhost:4040/user`, form);
      alert("signup successfully").then(() => navigate("/login"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="col-md-5 col-lg-4">
        <div className="card shadow border-0 rounded-4">
          <div className="card-body p-4">
            {/* Heading */}
            <div className="text-center mb-4">
              <h3 className="fw-bold">Create Account</h3>
              <p className="text-muted small">
                Join BuyNest and start shopping smarter
              </p>
            </div>

            {/* Signup Form */}
            <form onSubmit={signupUser}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={change}
                  placeholder="Enter your name"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  onChange={change}
                  placeholder="Enter email"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  onChange={change}
                  name="password"
                  placeholder="Create password"
                  className="form-control"
                />
              </div>
              <span className="text-center text-danger">{msg}</span>
              <button type="submit" className="btn btn-primary w-100 py-2">
                Sign Up
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center small mt-3 mb-0">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-primary fw-semibold text-decoration-none"
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
// tack one variable and store the user email for axios.get method and check the condition
