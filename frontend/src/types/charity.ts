/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace Charity {
  export type DonationStruct = {
    id: BigNumberish;
    amount: BigNumberish;
    donor: AddressLike;
    timestamp: BigNumberish;
    message: string;
  };

  export type DonationStructOutput = [
    id: bigint,
    amount: bigint,
    donor: string,
    timestamp: bigint,
    message: string,
  ] & {
    id: bigint;
    amount: bigint;
    donor: string;
    timestamp: bigint;
    message: string;
  };
}

export interface CharityInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addBeneficiary"
      | "admin"
      | "beneficiary"
      | "donate(string)"
      | "donate()"
      | "getDonationsRecord"
      | "getDonorList"
      | "getTotalAmount"
      | "toggleDonationActive"
      | "totalDonationNumber"
      | "withdraw",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBeneficiary",
    values: [AddressLike, string, string],
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "donate(string)",
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: "donate()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getDonationsRecord",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "getDonorList",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalAmount",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "toggleDonationActive",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "totalDonationNumber",
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addBeneficiary",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "donate(string)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "donate()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDonationsRecord",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDonorList",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalAmount",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleDonationActive",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalDonationNumber",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export interface Charity extends BaseContract {
  connect(runner?: ContractRunner | null): Charity;
  waitForDeployment(): Promise<this>;

  interface: CharityInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>,
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent,
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent,
  ): Promise<this>;

  addBeneficiary: TypedContractMethod<
    [_address: AddressLike, _name: string, _story: string],
    [void],
    "nonpayable"
  >;

  admin: TypedContractMethod<[], [string], "view">;

  beneficiary: TypedContractMethod<
    [],
    [
      [string, string, string] & {
        _address: string;
        name: string;
        story: string;
      },
    ],
    "view"
  >;

  "donate(string)": TypedContractMethod<[_message: string], [void], "payable">;

  "donate()": TypedContractMethod<[], [void], "payable">;

  getDonationsRecord: TypedContractMethod<
    [],
    [Charity.DonationStructOutput[]],
    "view"
  >;

  getDonorList: TypedContractMethod<[], [string[]], "view">;

  getTotalAmount: TypedContractMethod<[], [bigint], "view">;

  toggleDonationActive: TypedContractMethod<[], [void], "nonpayable">;

  totalDonationNumber: TypedContractMethod<[], [bigint], "view">;

  withdraw: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment,
  ): T;

  getFunction(
    nameOrSignature: "addBeneficiary",
  ): TypedContractMethod<
    [_address: AddressLike, _name: string, _story: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "admin",
  ): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "beneficiary"): TypedContractMethod<
    [],
    [
      [string, string, string] & {
        _address: string;
        name: string;
        story: string;
      },
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "donate(string)",
  ): TypedContractMethod<[_message: string], [void], "payable">;
  getFunction(
    nameOrSignature: "donate()",
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "getDonationsRecord",
  ): TypedContractMethod<[], [Charity.DonationStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getDonorList",
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getTotalAmount",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "toggleDonationActive",
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "totalDonationNumber",
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw",
  ): TypedContractMethod<[], [void], "nonpayable">;

  filters: {};
}
