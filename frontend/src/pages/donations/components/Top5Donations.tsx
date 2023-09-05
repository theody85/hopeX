import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/shadcn/ui/card";
import { DonationsTable } from "./DonationsTable";
import { DonorList } from "./DonorList";
import { Charity } from "@/types/charity";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

type Top5DonationsProps = {
  donations: never[];
};
const Top5Donations = ({ donations }: Top5DonationsProps) => {
  const top5Donations: Charity.DonationStructOutput[] = [];
  const top5Donors = [];
  if (donations.length) {
    const sortedDonations = [...donations]
      .slice()
      .sort(
        //@ts-ignore
        (a, b) => Number(a.amount) - Number(b.amount),
      )
      .reverse();

    for (let i = 0; i < 5; i++) {
      top5Donations.push(sortedDonations[i]);
      //@ts-ignore
      top5Donors.push(sortedDonations[i].donor);
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7  ">
      <Card className="col-span-5 shadow-md border-none ">
        <div className="h-[430px]">
          <CardHeader>
            <CardTitle>Top 5 Donations</CardTitle>
            <CardDescription className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 text-[#4fa94d]" />
              ))}
            </CardDescription>
          </CardHeader>

          <CardContent className="pl-2  ">
            <DonationsTable donations={top5Donations} />
          </CardContent>
        </div>

        <Link
          to={`/donations-all`}
          className="bg-gray-100 py-4  flex justify-center gap-3 items-center text-gray-500 hover:bg-[#4fa94d] hover:text-white"
        >
          <h3 className="uppercase text-sm ">View all donations</h3>
          <ArrowRight className="w-4" />
        </Link>
      </Card>
      <Card className="col-span-2 shadow-md border-none">
        <div className="h-[430px]">
          <CardHeader>
            <CardTitle>Top 5 Donors</CardTitle>
            <CardDescription className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 text-[#4fa94d]" />
              ))}
              .
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <DonorList donors={top5Donors} />
          </CardContent>
        </div>
        <Link
          to={`/donations-all`}
          className="bg-gray-100 py-4 flex justify-center gap-3 items-center text-gray-500 hover:bg-[#4fa94d] hover:text-white"
        >
          <h3 className="uppercase text-sm ">View all donations</h3>
          <ArrowRight className="w-4" />{" "}
        </Link>
      </Card>
    </div>
  );
};

export default Top5Donations;
