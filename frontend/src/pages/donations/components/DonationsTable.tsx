import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import { Charity } from "@/types/charity";
import { ethers } from "ethers";
import moment from "moment";

type DonationsTableProps = {
  donations: Charity.DonationStructOutput[];
};

export const DonationsTable: React.FC<DonationsTableProps> = ({
  donations,
}) => {
  // const { Items } = useQueryStatistics();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px] ">Id</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Donor</TableHead>
          <TableHead>Timestamp</TableHead>
          <TableHead>Purpose</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {donations.map((donation) => (
          //@ts-ignore
          <TableRow key={donation.id}>
            {/* @ts-ignore */}
            <TableCell className="font-medium">
              uId_
              {Number(donation.id)}
            </TableCell>
            {/* @ts-ignore */}
            <TableCell>{ethers.formatEther(donation.amount)}</TableCell>

            <TableCell className="hover:text-[#4fa94d] cursor-pointer">
              {/* @ts-ignore */}
              {donation.donor.slice(0, 28)}...
            </TableCell>
            <TableCell>
              {/* @ts-ignore */}
              {moment.unix(Number(donation.timestamp)).fromNow()}
            </TableCell>
            {/* @ts-ignore */}
            <TableCell>{donation.message}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
