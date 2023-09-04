import Fade from "react-reveal/Fade";
import owen from "@/assets/owen.jpg";
import francisco from "@/assets/francisco.jpg";

const About = () => {
  return (
    <div className="flex flex-col lg:px-8 w-full justify-between items-center text-center">
      <div className="flex flex-col gap-4 w-full p-3">
        <Fade>
          <h1 className="text-4xl text-center mb-2 font-robotoSlab font-bold tracking-tight text-black/80">
            About Us
          </h1>
        </Fade>
        <Fade bottom>
          <p className="text-center text-xl">
            Empowering Stroke Survivors Through Transparent Giving
          </p>
        </Fade>
      </div>

      <div className="container mt-8">
        <div className="flex w-full gap-6 items-center justify-center">
          <div className="w-full h-full">
            <img
              src={francisco}
              alt="mission-img"
              className="rounded-xl w-full bg-cover bg-center"
            />
          </div>
          <div className="text-left">
            At HopeX, we are on a mission to make a meaningful difference in the
            lives of stroke survivors and their families. Our platform harnesses
            the power of blockchain technology, specifically the Polygon
            network, to create a seamless and transparent donation experience.
            We believe that every contribution, no matter how big or small, can
            bring hope and support to those who have been affected by stroke.
          </div>
        </div>
      </div>

      <div className="container mt-8">
        <div className="flex w-full gap-6 items-center justify-center">
          <div className="text-left">
            Our Innovative Approach: HopeX leverages the security and efficiency
            of blockchain through a smart contract on the Polygon network. This
            smart contract facilitates, manages, and tracks donations in MATIC,
            providing an unparalleled level of transparency and accountability.
            Donors can contribute in MATIC, knowing that their funds are making
            a direct and measurable impact on the lives of stroke patients.
          </div>
          <div className="w-full h-full">
            <img
              src={owen}
              alt="mission-img"
              className="rounded-xl w-full bg-cover bg-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
