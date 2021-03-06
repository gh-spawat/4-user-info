/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace UserInformation {
  export type UserStruct = {
    firstname: string;
    lastname: string;
    email: string;
  };

  export type UserStructOutput = [string, string, string] & {
    firstname: string;
    lastname: string;
    email: string;
  };
}

export interface UserInformationInterface extends utils.Interface {
  contractName: "UserInformation";
  functions: {
    "addUser(string,string,string)": FunctionFragment;
    "getAllUsers()": FunctionFragment;
    "getLength()": FunctionFragment;
    "getUser(uint256)": FunctionFragment;
    "removeUser(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addUser",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllUsers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getLength", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getUser",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeUser",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getLength", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getUser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeUser", data: BytesLike): Result;

  events: {};
}

export interface UserInformation extends BaseContract {
  contractName: "UserInformation";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UserInformationInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addUser(
      firstname: string,
      lastname: string,
      email: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllUsers(
      overrides?: CallOverrides
    ): Promise<[UserInformation.UserStructOutput[]]>;

    getLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUser(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[UserInformation.UserStructOutput]>;

    removeUser(
      idx: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addUser(
    firstname: string,
    lastname: string,
    email: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllUsers(
    overrides?: CallOverrides
  ): Promise<UserInformation.UserStructOutput[]>;

  getLength(overrides?: CallOverrides): Promise<BigNumber>;

  getUser(
    idx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<UserInformation.UserStructOutput>;

  removeUser(
    idx: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addUser(
      firstname: string,
      lastname: string,
      email: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllUsers(
      overrides?: CallOverrides
    ): Promise<UserInformation.UserStructOutput[]>;

    getLength(overrides?: CallOverrides): Promise<BigNumber>;

    getUser(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<UserInformation.UserStructOutput>;

    removeUser(idx: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addUser(
      firstname: string,
      lastname: string,
      email: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllUsers(overrides?: CallOverrides): Promise<BigNumber>;

    getLength(overrides?: CallOverrides): Promise<BigNumber>;

    getUser(idx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    removeUser(
      idx: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addUser(
      firstname: string,
      lastname: string,
      email: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllUsers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUser(
      idx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeUser(
      idx: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
