import { BigInt, log } from "@graphprotocol/graph-ts"
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
import { Deposit, Loan } from "../generated/schema"

export function handleDepositAdded(event: DepositAdded): void {
  
  let date = new Date(0);
  date.setUTCSeconds(event.params.time.toI32());
  let deposit = new Deposit(event.transaction.hash.toHex());

  deposit.address = event.params.account.toHexString();
  deposit.market = event.params.market.toString();
  deposit.commitment = event.params.commitment.toString();
  deposit.amount = event.params.amount;
  deposit.action = "AddToDeposit";
  deposit.date = date.toString();
  deposit.timestamp = event.params.time.toI32();
  deposit.save();
}

export function handleDepositWithdrawal(event: DepositWithdrawal): void {
  
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let deposit = new Deposit(event.transaction.hash.toHex());

  deposit.address = event.params.account.toHexString();
  deposit.market = event.params.market.toString();
  deposit.commitment = event.params.commitment.toString();
  deposit.amount = event.params.amount;
  deposit.action = "WithdrawDeposit";
  deposit.date = date.toString();
  deposit.timestamp = event.params.timestamp.toI32();
  deposit.save();
}

export function handleNewDeposit(event: NewDeposit): void {
  
  let date = new Date(0);
  date.setUTCSeconds(event.params.time.toI32());
  let deposit = new Deposit(event.transaction.hash.toHex());

  deposit.address = event.params.account.toHexString();
  deposit.market = event.params.market.toString();
  deposit.commitment = event.params.commitment.toString();
  deposit.amount = event.params.amount;
  deposit.action = "NewDeposit";
  deposit.date = date.toString();
  deposit.timestamp = event.params.time.toI32();
  deposit.save();
}

export function handleLiquidation(event: Liquidation): void {
  
  let date = new Date(0);
  date.setUTCSeconds(event.params.time.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.market = event.params.market.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.amount;
  loan.action = "Liquidated";
  loan.date = date.toString();
  loan.timestamp = event.params.time.toI32();
  loan.save();
}

export function handleAddCollateral(event: AddCollateral): void {
  
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.market = event.params.market.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.amount;
  loan.action = "AddCollateral";
  loan.date = date.toString();
  loan.timestamp = event.params.timestamp.toI32();
  loan.save();
}

export function handleMarketSwapped(event: MarketSwapped): void {
  
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.market = event.params.currentMarket.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.amount;
  loan.action = "SwappedLoan";
  loan.date = date.toString()
  loan.timestamp = event.params.timestamp.toI32();
  loan.save();
}

export function handleWithdrawCollateral(event: WithdrawCollateral): void {
  
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.market = event.params.market.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.amount;
  loan.action = "WithdrawCollateral";
  loan.date = date.toString()
  loan.timestamp = event.params.timestamp.toI32();
  loan.save();
}

export function handleWithdrawPartialLoan(event: WithdrawPartialLoan): void {
  
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.market = event.params.market.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.amount;
  loan.action = "WithdrawLoan";
  loan.date = date.toString()
  loan.timestamp = event.params.timestamp.toI32();
  loan.save();
}

export function handleNewLoan(event: NewLoan): void {
  
  let date = new Date(0);
  date.setUTCSeconds(event.params.time.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.market = event.params.loanMarket.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.loanAmount;
  loan.action = "NewLoan";
  loan.date = date.toString();
  loan.timestamp = event.params.time.toI32();
  loan.save();
}

export function handleLoanRepaid(event: LoanRepaid): void {
  
  let date = new Date(0);
  date.setUTCSeconds(event.params.timestamp.toI32());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.address = event.params.account.toHexString();
  loan.market = event.params.market.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.repaidAmount;
  loan.action = "LoanRepaid";
  loan.date = date.toString();
  loan.timestamp = event.params.timestamp.toI32();
  loan.save();
}
