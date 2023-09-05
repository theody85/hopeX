import { notFound } from "@/assets";

const NotFound = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center my-20">
      <img src={notFound} alt="404 image" className="w-[400px]" />
      <p className="text-5xl font-robotoSlab font-bold my-8">Not Found</p>
    </div>
  );
};

export default NotFound;
