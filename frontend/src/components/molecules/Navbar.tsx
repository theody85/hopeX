import { Link, useNavigate } from "react-router-dom";
import { logoWhite } from "@/assets";
import { Button } from "../shadcn/ui/button";
import { useEffect, useState } from "react";
import { cn } from "../utils";
import { Link as LinkScroll } from "react-scroll";

const NavBar = () => {
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <div
      className={cn(
        "bg-black/90 flex w-full px-8 lg:px-16 fixed top-0 lg:py-2 z-50 transition-all duration-300 ease-in-out",
        scroll ? "fixed top-0 left-0" : "",
      )}
    >
      <div className="md:mx-0 lg:mx-auto lg:px-8 lg:py-2 w-full flex justify-between items-center">
        <Link to="/">
          <img
            src={logoWhite}
            alt="logo"
            className={cn(
              "w-48 transition-all duration-300 ease-in-out",
              scroll ? "w-32" : "",
            )}
          />{" "}
        </Link>

        <div className="flex gap-12 items-center text-sm text-white font-robotoSlab font-bold">
          <Link
            to="/"
            className=" hover:scale-105 hover:text-[#4fa94d] transition-all duration-300 ease-in-out"
          >
            Home
          </Link>
          <LinkScroll
            to="about"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-100}
            className=" hover:scale-105 hover:text-[#4fa94d] transition-all duration-300 ease-in-out cursor-pointer"
          >
            About Us
          </LinkScroll>
          <Link
            to="/auth"
            state={{ from: { pathname: "/donations-dashboard" } }}
            className="hover:scale-105 hover:text-[#4fa94d] transition-all duration-300 ease-in-out"
          >
            View Donations
          </Link>
          <Button
            onClick={() =>
              navigate("/auth", {
                state: { from: { pathname: "/donate" } },
              })
            }
          >
            Donate Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
