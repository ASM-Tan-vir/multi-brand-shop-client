import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "sonner";
import GoogleSignInButton from "../componenets/GoogleSignInButton";

const SignUp = () => {
  const navigate = useNavigate();

  const { createUser, updateProfileInfo } = useContext(AuthContext);
  const [authError, setAuthError] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");
    const email = form.get("email");

    if (!/^.{6,}$/.test(password)) {
      setAuthError("password must be 6 character");
      return;
    }

    if (!/.*[A-Z].*/.test(password)) {
      setAuthError("password must have 1 capital letter");
      return;
    }

    if (!/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\|\-=].*/.test(password)) {
      setAuthError("password must have 1 special character");
    }

    createUser(email, password)
      .then(() => {
        updateProfileInfo({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          toast.success("User registration successful");
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error("Something went wrong");
        setAuthError(error.message);
        console.error(error);
      });
  };

  return (
    <div data-aos="fade-up">
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col w-3/4 hero-content lg:flex-row-reverse">
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleRegistration} className="card-body">
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo"
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
              <button className="w-full btn btn-primary">Register</button>
              <GoogleSignInButton setAuthError={setAuthError} />
            </form>
            <p className="text-center">
              already have account? <Link to="/signIn">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
