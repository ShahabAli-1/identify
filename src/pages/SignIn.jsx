import idlogo from "../assets/idlogo.png";
import authimg from "../assets/authimg.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { login } from "../features/userSlice";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        dispatch(
          login({
            email: user.user.email,
            uid: user.user.uid,
            displayName: user.user.displayName,
          })
        );
        navigate("/home");
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="flex h-screen w-full bg-black">
      <div
        style={{ width: "40%" }}
        className="m-1 flex flex-col items-center bg-slate-900 rounded-sm"
      >
        <img src={idlogo} alt="" className="w-44 object-contain" />
        <p className="text-white mt-10 ml-6">
          Monitoring Dental Health with Deep Learning.
        </p>
        <img src={authimg} alt="" className="mt-10 w-96" />
      </div>
      <div
        style={{ width: "60%" }}
        className="h-screen flex flex-col justify-center mx-10"
      >
        <p className="text-white font-inter mb-6 font-bold">Sign In</p>
        <div className="flex gap-8">
          <button className="text-slate-300 font-inter border border-red-500 px-4 py-1 rounded-md">
            Sign In With Google
          </button>
          <button className="text-slate-300 font-inter border border-blue-500 px-4 py-1 rounded-md">
            Sign In With Facebook
          </button>
        </div>
        <p className="my-8 text-white font-inter font-extrabold text-lg">
          -OR-
        </p>
        <form onSubmit={loginToApp} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-2 bg-black border-b-2 focus:outline-none border-b-slate-400 font-inter text-white"
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-2 bg-black border-b-2 focus:outline-none border-b-slate-400 font-inter text-white"
          />
          <button
            type="submit"
            className="w-full text-white font-inter bg-teal-600 py-2 font-bold rounded-md"
          >
            Login
          </button>
        </form>
        <p className="text-white font-inter mt-2">
          Dont have an Account?
          <Link to={"/signup"}>
            <span className="text-teal-600 font-inter cursor-pointer">
              {" "}
              Signup
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
