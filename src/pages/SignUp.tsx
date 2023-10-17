import { useState, SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContex";
import Demo from "../components/Demo";
import "../css/signUp.scss";

const Signup = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      navigate("/layout");
    } catch (e: any) {
      setError(e.message);
      console.log(e.message, error);
    }
  };

  return (
    <main className="signUp" data-testid="SignUp">
      <section>
        <article className="signUpContainer">
          <div className="signUpText">
            <h1>Hello and wellcome to SunSight</h1>
            <h4>Sign up for a free account.</h4>
          </div>
          <form onSubmit={handleSubmit} className="signUpForm">
            <div className="signUpEmail">
              <label>Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </div>
            <div className="signUpPassword">
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </div>
            <button>Sign Up</button>
            <p>
              Already have an account?
              <Link to="/signin">Sign in.</Link>
            </p>
          </form>
        </article>
        <Demo />
      </section>
    </main>
  );
};

export default Signup;
