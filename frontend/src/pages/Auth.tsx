import { Button } from "@/components/shadcn/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const { status, account, chainId, connect, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const prevPath = location.state.from.pathname;

  const getStatusMsg = () => {
    switch (status) {
      case "initializing":
        return "Synchronisation with MetaMask ongoing...";
      case "unavailable":
        return "MetaMask not available...";
      case "notConnected":
        return "Connect to MetaMask";
      case "connecting":
        return "Connecting...";
      case "connected":
        return `Connected account ${account} on chain ID ${chainId}`;
      default:
        return "Unknown status";
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`${prevPath}`, {
        state: { from: location },
      });
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen">
      <div className="font-robotoSlab text-2xl font-bold mb-4">
        {getStatusMsg()}
      </div>
      {status === "unavailable" && (
        <Button
          variant="link"
          className="text-xl font-normal px-8 py-4"
          onClick={() => window.open("https://metamask.io/download", "_blank")}
        >
          Download MetaMask
        </Button>
      )}
      {status === "notConnected" && (
        <Button className="text-xl font-normal px-8 py-4" onClick={connect}>
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default Auth;
