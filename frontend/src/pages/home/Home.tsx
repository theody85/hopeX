import { Section } from "@/components/Layouts";
import { Button } from "@/components/shadcn/ui/button";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="bg-black/80 bg">
        <Section>
          <div className="py-24 relative">
            <div className="container">
              <div className="flex flex-col lg:flex-row lg:px-8 w-full justify-between items-center text-center">
                <div className="flex flex-col gap-4 w-[calc(100%-2rem)] p-3">
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
                    <p className="text-[#e8ebe6] mb-4 lg:mb-8 text-lg">
                      A stroke is a medical emergency caused by a disruption in
                      blood supply to the brain Globally, strokes are a major
                      health concern, with around 13 million people experiencing
                      a stroke each year, leading to 5.5 million deaths.
                    </p>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button
                      className="text-lg px-6 py-3"
                      onClick={() => navigate("/auth")}
                    >
                      Donate now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Home;
