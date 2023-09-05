import { ThreeDots } from "react-loader-spinner";
import { DonationsTable } from "./components/DonationsTable";
import useQueryStatistics from "./hooks/useQueryStats";

const Donations = () => {
  const { donations, loading } = useQueryStatistics();
  return (
    <>
      {loading ? (
        <div className="flex flex-col w-full justify-center items-center min-h-screen text-center">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            visible={true}
          />
          <p>Loading data...</p>
        </div>
      ) : (
        <div className="lg:px-8 py-6">
          <h2 className="text-5xl font-bold tracking-tight text-[#163300] mb-8 font-robotoSlab">
            Donations
          </h2>
          <DonationsTable donations={donations} />
        </div>
      )}
    </>
  );
};

export default Donations;
