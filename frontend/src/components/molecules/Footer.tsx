import { logoGreen } from "../../assets";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full p-12">
      <h2 className="text-4xl text-[#163300] font-extrabold my-10 ">
        Subscribe to our newsletter
      </h2>
      <div className="grid grid-cols-3 px-4 md:w-2/5 mb-10">
        <input className="col-span-2" placeholder="Enter your email" />
        <button className="bg-[#3bac5d] px-4 py-2 text-white text-base font-bold col-span-1">
          Subscribe
        </button>
      </div>

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
