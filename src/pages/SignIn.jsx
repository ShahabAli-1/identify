import idlogo from "../assets/idlogo.png";
import authimg from "../assets/authimg.png";
import { Link } from "react-router-dom";
const SignIn = () => {
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
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="pl-2 bg-black border-b-2 focus:outline-none border-b-slate-400 font-inter text-white"
          />
          <input
            type="password"
            placeholder="Your Password"
            className="pl-2 bg-black border-b-2 focus:outline-none border-b-slate-400 font-inter text-white"
          />
          <Link to={"/home"}>
            <button
              type="submit"
              className="w-full text-white font-inter bg-teal-600 py-2 font-bold rounded-md"
            >
              Create Account
            </button>
          </Link>
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
