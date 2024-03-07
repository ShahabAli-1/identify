import idlogo from "../assets/idlogo.png";
import logout from "../assets/logout.png";
import dashboard from "../assets/dashboard.png";
import about from "../assets/about.png";
import avatar from "../assets/avatar.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <img src={idlogo} alt="" className="w-44 object-contain" />
      </div>
      <div className="flex text-white justify-center items-center gap-4">
        <Link to={"/signin"}>
          <p className="cursor-pointer font-inter hover:text-teal-400">
            Logout
          </p>
        </Link>
        <Link to={"/dashboard"}>
          <p className="cursor-pointer font-inter hover:text-teal-400">
            Dashboard
          </p>
        </Link>

        <p className="cursor-pointer font-inter hover:text-teal-400">Aboutus</p>
        <div className="flex justify-center items-center p-1 border border-gray-100 rounded-md">
          <img src={avatar} alt="" className="m-1 max-w-10 object-contain" />
          <p className="hidden md:block font-bold text-slate-300 font-inter">
            K.Mehreen
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
