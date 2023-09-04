import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import useQueryStatistics from "./hooks/useQueryStats";
import { ethers } from "ethers";
import moment from "moment";

export const DonorsTable = () => {
  const { donations } = useQueryStatistics();
  return (
    <Table>
      <TableCaption>A list of donations.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] ">Id</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Donor</TableHead>
          <TableHead>Timestamp</TableHead>
          <TableHead className="text-right">Purpose</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {donations.map((donation) => (
          //@ts-ignore
          <TableRow key={donation.id}>
            {/* @ts-ignore */}
            <TableCell className="font-medium">{Number(donation.id)}</TableCell>
            {/* @ts-ignore */}
            <TableCell>{ethers.formatEther(donation.amount)}</TableCell>

            <TableCell className="hover:text-[#4fa94d] cursor-pointer">
              {/* @ts-ignore */}
              {donation.donor.slice(0, 20)}...
            </TableCell>
            <TableCell>
              {/* @ts-ignore */}
              {moment.unix(Number(donation.timestamp)).fromNow()}
            </TableCell>
            {/* @ts-ignore */}
            <TableCell className="text-right">{donation.message}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
