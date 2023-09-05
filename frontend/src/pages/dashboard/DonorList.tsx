import { Avatar, AvatarFallback } from "@/components/shadcn/ui/avatar";

type DonorListProps = {
  donors: string[];
};
export function DonorList({ donors }: DonorListProps) {
  return (
    <div className="space-y-8">
      {donors.map((donor, index) => (
        <div className="flex items-center cursor-pointer" key={index}>
          <Avatar className="h-9 w-9">
            <AvatarFallback>{index + 1}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none hover:text-[#4fa94d]">
              {/* @ts-ignore */}
              {donor.slice(0, 30)}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
