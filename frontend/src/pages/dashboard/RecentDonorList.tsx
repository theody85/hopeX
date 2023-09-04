import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import useQueryStatistics from "./hooks/useQueryStats";

export function RecentDonorList() {
  const { donorList } = useQueryStatistics();
  return (
    <div className="space-y-8">
      {donorList.map((donor, index) => (
        <div className="flex items-center cursor-pointer" key={index}>
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>{index}</AvatarFallback>
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
