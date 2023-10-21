import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "sonner";
import GoogleSignInButton from "../componenets/GoogleSignInButton";

const SignIn = () => {
  const [authError, setAuthError] = useState("");

  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const password = form.get("password");
    const email = form.get("email");

    login(email, password)
      .then(() => {
        toast.success("User registration successful");
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        console.error(error);
        setAuthError(error.message);
        console.error(error);
      });
  };

  return (
    <div data-aos="fade-up">
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col w-3/4 hero-content lg:flex-row-reverse">
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {authError ? (
                  <p className="text-sm text-red-500">{authError}</p>
                ) : null}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <button className="w-full btn btn-primary">Sign In</button>
              <GoogleSignInButton setAuthError={setAuthError} />
            </form>
            <p className="text-center">
              Don not have account? <Link to="/sign-up">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
