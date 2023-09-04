import { logoGreen } from "../../assets";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full p-12">
      <div className="flex flex-row items-center justify-between w-5/6 mt-20 ">
        <img
          src={logoGreen}
          alt="logo"
          className="w-[224px] h-[73.47px] flex "
        />
        <Social />
      </div>
      <p className="text-black/50 text-base mt-10">
        &copy; 2023 hopeX. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
