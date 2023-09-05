import { Section } from "@/components/Layouts";
import { Button } from "@/components/shadcn/ui/button";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import About from "./components/About";
import { Link as LinkScroll } from "react-scroll";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero">
        <div className="bg-black/80 min-h-screen donate-bg">
          <Section>
            <div className="py-16 relative">
              <div className="container">
                <div className="flex flex-col lg:flex-row lg:px-8 w-full justify-between items-center text-center">
                  <div className="flex flex-col gap-4 w-[calc(100%-2rem)] p-3 relative">
                    <h1 className="text-[85px] mb-4 lg:mb-8 font-robotoSlab font-bold tracking-tight text-[#e8ebe6]">
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .typeString("About 13 million people,")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("experience stroke yearly.")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Leading to 5.5 million deaths")
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Donate Now to Save A Life!")
                            .start();
                        }}
                      />
                    </h1>
                    <div className="flex justify-center items-center w-full lg:w-2/3 mx-auto">
                      <Fade bottom>
                        <p className="text-[#e8ebe6] mb-4 lg:mb-8 text-lg">
                          A stroke is a medical emergency caused by a disruption
                          in blood supply to the brain Globally, strokes are a
                          major health concern, with around 13 million people
                          experiencing a stroke each year, leading to 5.5
                          million deaths.
                        </p>
                      </Fade>
                    </div>

                    <div className="flex gap-4 justify-center">
                      <Jump>
                        <Button
                          className="text-3xl px-6 py-6 items-center"
                          onClick={() =>
                            navigate("/auth", {
                              state: { from: { pathname: "/donate" } },
                            })
                          }
                        >
                          Donate now
                        </Button>
                      </Jump>
                    </div>
                    <div className="absolute xs:bottom-4 -bottom-36 w-full flex justify-center items-center ">
                      <LinkScroll
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        offset={-100}
                      >
                        <div className="w-[33px] h-[58px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
                          <div className="w-3 h-3 rounded-full bg-secondary animate-bounce" />
                        </div>
                      </LinkScroll>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </div>
      <Section id="about">
        <div className="py-8 relative">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:px-8 w-full justify-between items-center text-center">
              <About />
            </div>
          </div>
        </div>
      </Section>
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
      </div>
    </>
  );
};

export default Home;
