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

type PaymentBoxProps = {};

const PaymentBox = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Make Donation</CardTitle>
        <CardDescription>
          Enter required details to make a donation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Amount</Label>
              <Input id="amount" placeholder="Amount to donate" type="number" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="reason">Reason</Label>
              <Textarea
                placeholder="Type your reason for donating here."
                id="reason"
              />
              <p className="text-sm text-muted-foreground">
                Your message will be copied to the support team.
              </p>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Send</Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentBox;
