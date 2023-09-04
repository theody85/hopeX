import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/shadcn/ui/card";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { useAuth } from "@/context/AuthContext";
import { ethers } from "ethers";
import { charityContract } from "@/contract";
import { useRef, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";

const PaymentBox = () => {
  const { ethereum } = useAuth();
  const amountRef = useRef<HTMLInputElement | null>(null);
  const purposeRef = useRef<HTMLTextAreaElement | null>(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleDonation = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (ethereum) {
      setIsSubmitting(true);
      const provider = new ethers.BrowserProvider(ethereum);
      const signer = await provider.getSigner();
      // const txn = charityContract.connect(signer);

      const amount = amountRef.current?.value;
      if (!amount) {
        setError("Amount is required!");
        setIsSubmitting(false);
        return;
      }
      const purpose = purposeRef.current?.value;

      console.log(amount);

      try {
        setError("");
        await charityContract
          .connect(signer)
          //@ts-ignore
          .donate(purpose, { value: ethers.parseEther(amount) });
      } catch (error) {
        console.error;
        setError("Transaction failed. Try again");
        setIsSubmitting(false);
        return;
      }

      setSuccessMessage(`Thank you for donating!`);
      setError("");
    }
    // purpose
    //   ? //@ts-ignore
    //     await txn.donate(purpose, { value: amount })
    //   : //@ts-ignore
    //     await txn.donate({ value: amount });
  };
  return (
    <form onSubmit={handleDonation}>
      <Card className="w-full shadow-lg border-none py-5">
        <CardHeader>
          <CardTitle className="mb-3 text-3xl font-robotoSlab">
            Make Donation
          </CardTitle>
          <CardDescription>
            Enter required details to make a donation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2 my-2">
              <Label htmlFor="amount">
                Amount <span className="text-red-500">*</span>
              </Label>
              <Input
                required
                id="amount"
                placeholder="Amount to donate"
                ref={amountRef}
              />
            </div>
            <div className="flex flex-col space-y-2 my-2">
              <Label htmlFor="reason">
                Purpose <span className="italic opacity-50">Optional</span>
              </Label>

              <Textarea
                placeholder="Type your purpose for donating here."
                id="reason"
                ref={purposeRef}
                rows={5}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex  w-full justify-center">
          <Button disabled={isSubmitting && !successMessage} className="px-10">
            Send
          </Button>
        </CardFooter>
        <div className="flex flex-col text-sm mb-5">
          {isSubmitting && !successMessage && (
            <div className="flex w-full justify-center">
              <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </div>
          )}
          {successMessage && (
            <p className="text-center">
              {successMessage}
              <Link
                to="/donation-stats"
                className="text-[#4fa94d] cursor-pointer"
              >
                {" "}
                Click
              </Link>{" "}
              to view donations
            </p>
          )}
          {error && <p className="text-center text-red-500">{error}</p>}
        </div>
      </Card>
    </form>
  );
};

export default PaymentBox;
