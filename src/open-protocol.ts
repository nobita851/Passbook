import { BigInt } from "@graphprotocol/graph-ts"
import {
  OpenProtocol,
  DepositAdded,
  DepositWithdrawal,
  NewDeposit,
  Liquidation,
  AddCollateral,
  MarketSwapped,
  WithdrawCollateral,
  WithdrawPartialLoan,
  NewLoan,
  LoanRepaid
} from "../generated/OpenProtocol/OpenProtocol"
import { Deposit, Loan, User } from "../generated/schema"

export function handleDepositAdded(event: DepositAdded): void {}

export function handleDepositWithdrawal(event: DepositWithdrawal): void {}

export function handleNewDeposit(event: NewDeposit): void {}

export function handleLiquidation(event: Liquidation): void {}

export function handleAddCollateral(event: AddCollateral): void {}

export function handleMarketSwapped(event: MarketSwapped): void {}

export function handleWithdrawCollateral(event: WithdrawCollateral): void {}

export function handleWithdrawPartialLoan(event: WithdrawPartialLoan): void {}

export function handleNewLoan(event: NewLoan): void {}

export function handleLoanRepaid(event: LoanRepaid): void {}
