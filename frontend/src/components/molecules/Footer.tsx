import { logoGreen } from "../../assets";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full px-8 lg:px-16 py-12">
      <img src={logoGreen} alt="logo" className="w-56 " />

      <div className="md:mx-0 lg:mx-auto lg:px-8  w-full flex justify-between items-center">
        <p className="text-black/50 text-base mt-10">
          &copy; 2023 hopeX. All rights reserved
        </p>
        <Social />
      </div>
    </div>
  );
};

export default Footer;
