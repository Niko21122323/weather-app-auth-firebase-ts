import { useState, SyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContex";
import "../css/signin.scss";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/layout");
    } catch (e: any) {
      setError(e.message);
      console.log(e.message, error);
    }
  };

  return (
    <main className="signIn" data-testid="SignIn">
      <section className="signInContainer">
        <div className="signInText">
          <h1>Wellcome back to SunSight</h1>
          <h4>Sign in to your account</h4>
        </div>
        <form onSubmit={handleSubmit} className="signInForm">
          <div className="signInEmail">
            <label>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" />
          </div>
          <div className="signInPassword">
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button>Sign In</button>
          <p>
            Don't have an account yet?
            <Link to="/">Sign up.</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
