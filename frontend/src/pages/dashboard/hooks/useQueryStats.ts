import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { charityContract } from "@/contract";
import { ethers } from "ethers";

const useQueryStatistics = () => {
  const { ethereum } = useAuth();

  const [totalAmountRaised, setTotalAmountRaised] = useState(null);
  const [donations, setDonations] = useState([]);
  const [donorList, setDonorList] = useState([]);
  const [totalDonations, setTotalDonations] = useState(null);
  const [totalDonors, setTotalDonors] = useState(null);

  useEffect(() => {
    if (ethereum) {
      (async () => {
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();

        const totalAmountRaisedInWei = await charityContract
          .connect(signer)
          //@ts-ignore
          .getTotalAmount();
        const formattedTotalAmountRaised = ethers.formatEther(
          totalAmountRaisedInWei,
        );

        const fetchedDonations = await charityContract
          .connect(signer)
          //@ts-ignore
          .getDonationsRecord();

        const fetchedDonorList = await charityContract
          .connect(signer)
          //@ts-ignore
          .getDonorList();

        //@ts-ignore
        setTotalAmountRaised(formattedTotalAmountRaised);
        setDonations(fetchedDonations);
        setDonorList(fetchedDonorList);
        setTotalDonations(fetchedDonations.length);
        setTotalDonors(fetchedDonorList.length);
      })();
    }
  }, [ethereum]);

  return {
    totalAmountRaised,
    donations,
    donorList,
    totalDonations,
    totalDonors,
  };
};

export default useQueryStatistics;
