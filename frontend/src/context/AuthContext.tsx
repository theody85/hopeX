import { useMetaMask } from "metamask-react";
import {
  AddEthereumChainParameter,
  MetaMaskState,
} from "metamask-react/lib/metamask-context";
import React from "react";
import { createContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
} & MetaMaskState & {
    connect: () => Promise<string[] | null>;
    addChain: (parameters: AddEthereumChainParameter) => Promise<void>;
    switchChain: (chainId: string) => Promise<void>;
    ethereum?: any;
  };
const AuthContext = createContext({
  isAuthenticated: false,
} as AuthContextType);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const props = useMetaMask();

  const isAuthenticated = Boolean(
    props.chainId && props.status === "connected" && props.account
  );
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        ...props,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
