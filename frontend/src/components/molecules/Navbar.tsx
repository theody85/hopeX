import { Link, useNavigate } from "react-router-dom";
import { logoWhite } from "@/assets";
import { Button } from "../shadcn/ui/button";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full px-8 lg:px-16 lg:py-2  fixed top-0 left-0 z-50">
      <div className="md:mx-0 lg:mx-auto lg:px-8 lg:py-4 w-full flex justify-between items-center">
        <Link to="/">
          <img src={logoWhite} alt="logo" className="w-52" />
        </Link>

        <div className="flex gap-12 items-center text-sm">
          <Link
            to="#about"
            className="text-white font-robotoSlab font-bold hover:scale-105 hover:text-white/90"
          >
            About Us
          </Link>
          <Link
            to="/donation-stats"
            className="text-white font-robotoSlab font-bold hover:scale-105 hover:text-white/90"
          >
            View Donations
          </Link>
          <Button onClick={() => navigate("/auth")}>Donate Now</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
