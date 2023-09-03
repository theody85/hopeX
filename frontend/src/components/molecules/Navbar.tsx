import { Link, useNavigate } from "react-router-dom";
import { logoWhite } from "@/assets";
import { Button } from "../shadcn/ui/button";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full px-8 lg:px-16 lg:py-3 z-50 bg-[#163300]">
      <div className="md:mx-0 lg:mx-auto lg:px-8 lg:py-4 w-full flex justify-between items-center">
        <Link to="/">
          <img src={logoWhite} alt="logo" className="w-52" />
        </Link>

        <div className="flex gap-16 items-center">
          <Button onClick={() => navigate("/donation-stats")}>
            View Donations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
