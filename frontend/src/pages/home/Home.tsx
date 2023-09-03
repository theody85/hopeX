import { Section } from "@/components/Layouts";
import { Button } from "@/components/shadcn/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#163300]">
      <Section>
        <div className="py-24 relative">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:px-8 w-full justify-between items-center text-center">
              <div className="flex flex-col gap-4 w-[calc(100%-2rem)] p-3">
                <h1 className="text-7xl mb-4 lg:mb-8 font-robotoSlab font-bold tracking-tight text-[#e8ebe6]">
                  Lorem Ipsum Dolor Sit Amet
                </h1>

                <div className="flex justify-center items-center w-full lg:w-2/3 mx-auto">
                  <p className="text-[#e8ebe6] mb-4 lg:mb-8 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, voluptatum. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quibusdam, voluptatum.
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
  );
};

export default Home;
