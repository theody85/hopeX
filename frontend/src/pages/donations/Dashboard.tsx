import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/shadcn/ui/card";
import useQueryStats from "./hooks/useQueryStats";
import { Bitcoin } from "lucide-react";
import { ThreeDots } from "react-loader-spinner";
import Top5Donations from "./components/Top5Donations";

export default function DonationStats() {
  const { totalAmountRaised, totalDonors, totalDonations, loading, donations } =
    useQueryStats();

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
        <div className="hidden flex-col md:flex">
          <div className="border-b"></div>
          <div className="flex-1 space-y-5 p-8 pt-6">
            <h2 className="text-5xl font-bold tracking-tight text-[#163300]  mb-8 font-robotoSlab">
              Dashboard
            </h2>

            <div className="space-y-7">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="shadow-md border-none">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Amount Raised
                    </CardTitle>

                    <Bitcoin className="h-4 w-4 text-[#4fa94d]" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {totalAmountRaised}
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-md border-none">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Donors
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-[#4fa94d]"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{totalDonors}</div>
                  </CardContent>
                </Card>
                <Card className="shadow-md border-none">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Donations
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-[#4fa94d]"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{totalDonations}</div>
                  </CardContent>
                </Card>
                <Card className="shadow-md border-none">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Donation Status
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-[#4fa94d]"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">Active</div>
                  </CardContent>
                </Card>
              </div>
              <Top5Donations donations={donations} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
