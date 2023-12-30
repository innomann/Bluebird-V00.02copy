
import React,{useState} from "react";
import { loginUser } from "../actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

      const [user, setUser] = useState({
        email: "",
        password: "",
        errors: {},
      });

      const handleChange = (e) => {
        setUser({
          ...user,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = user;
        loginUser({ email, password }, dispatch, navigate);
      };

  return (
    <div className="container" style={{ color: "white" }}>
      <h1 className="text-center mb-4">REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="email" className="form-label fs-5 fw-bold">
            EMAIL ADDRESS:
          </label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control fs-5"
            placeholder="Enter Email"
            id="email"
          />
          <div className="text-danger form-text fw-bold fs-5">{""}</div>

          <div className="form-group">
            <label for="password" className="form-label fs-5 fw-bold">
              PASSWORD:
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="form-control fs-5"
              placeholder="Enter password"
              id="password"
            />
            <div className="text-danger form-text fw-bold fs-5">{""}</div>
          </div>
        </div>
        <input
          type="submit"
          value="SUBMIT"
          className="btn btn-success d-flex justify-content-center mx-auto mb-3 px-3"
        />
      </form>
    </div>
  );
};
export default Login;
