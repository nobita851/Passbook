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
import { Deposit, Loan, User } from "../generated/schema"

export function handleDepositAdded(event: DepositAdded): void {
  let user = User.load(event.params.account.toHex());
  if (!user) {
    log.error(
      `[handleDepositAdded|${event.transaction.hash.toHexString()}] User not found`,
      []
    );
    return;
  }

  let date = new Date(event.params.time.toI64());
  let deposit = new Deposit(event.transaction.hash.toHex());

  deposit.hash = event.transaction.hash.toHexString();
  deposit.market = event.params.market.toString();
  deposit.commitment = event.params.commitment.toString();
  deposit.amount = event.params.amount;
  deposit.action = "AddToDeposit";
  deposit.date = date.toString();
  deposit.save();  
  
  user.deposits.push(event.transaction.hash.toHex());
  user.save();
}

export function handleDepositWithdrawal(event: DepositWithdrawal): void {
  let user = User.load(event.params.account.toHex());
  if (!user) {
    log.error(
      `[handleDepositWithdrawal|${event.transaction.hash.toHexString()}] User not found`,
      []
    );
    return;
  }

  let date = new Date(event.params.timestamp.toI64());

  let deposit = new Deposit(event.transaction.hash.toHex());

  deposit.hash = event.transaction.hash.toHexString();
  deposit.market = event.params.market.toString();
  deposit.commitment = event.params.commitment.toString();
  deposit.amount = event.params.amount;
  deposit.action = "WithdrawDeposit";
  deposit.date = date.toString();
  deposit.save();
  
  user.deposits.push(event.transaction.hash.toHex());
  user.save();
}

export function handleNewDeposit(event: NewDeposit): void {
  let user = User.load(event.params.account.toHex());
  if (!user) {
    user = new User(event.params.account.toHex());
    user.address = event.params.account;
    user.save();
  }

  let date = new Date(event.params.time.toI64());
  let deposit = new Deposit(event.transaction.hash.toHex());

  deposit.hash = event.transaction.hash.toHexString();
  deposit.market = event.params.market.toString();
  deposit.commitment = event.params.commitment.toString();
  deposit.amount = event.params.amount
  deposit.action = "NewDeposit"
  deposit.date = date.toString();
  deposit.save();

  user.deposits.push(event.transaction.hash.toHex());
  user.save()
}

export function handleLiquidation(event: Liquidation): void {
  let user = User.load(event.params.account.toHex());
  if (!user) {
    log.error(
      `[handleLiquidation|${event.transaction.hash.toHexString()}] User not found`,
      []
    );
    return;
  }

  let date = new Date(event.params.time.toI64());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.hash = event.transaction.hash.toHexString();
  loan.market = event.params.market.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.amount;
  loan.action = "Liquidated";
  loan.date = date.toString();
  loan.save();

  user.loans.push(event.transaction.hash.toHex());
  user.save();
}

export function handleAddCollateral(event: AddCollateral): void {
  let user = User.load(event.params.account.toHex());
  if (!user) {
    log.error(
      `[handleAddCollateral|${event.transaction.hash.toHexString()}] User not found`,
      []
    );
    return;
  }

  let date = new Date(event.params.timestamp.toI64());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.hash = event.transaction.hash.toHexString();
  loan.market = event.params.market.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.amount;
  loan.action = "AddCollateral";
  loan.date = date.toString()
  loan.save();

  user.loans.push(event.transaction.hash.toHex());
  user.save();
}

export function handleMarketSwapped(event: MarketSwapped): void {
  let user = User.load(event.params.account.toHex());
  if (!user) {
    log.error(
      `[handleMarketSwapped|${event.transaction.hash.toHexString()}] User not found`,
      []
    );
    return;
  }

  let date = new Date(event.params.timestamp.toI64());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.hash = event.transaction.hash.toHexString();
  loan.market = event.params.currentMarket.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.amount;
  loan.action = "SwappedLoan";
  loan.date = date.toString()
  loan.save();

  user.loans.push(event.transaction.hash.toHex());
  user.save();
}

export function handleWithdrawCollateral(event: WithdrawCollateral): void {
  let user = User.load(event.params.account.toHex());
  if (!user) {
    log.error(
      `[handleWithdrawCollateral|${event.transaction.hash.toHexString()}] User not found`,
      []
    );
    return;
  }

  let date = new Date(event.params.timestamp.toI64());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.hash = event.transaction.hash.toHexString();
  loan.market = event.params.market.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.amount;
  loan.action = "WithdrawCollateral";
  loan.date = date.toString()
  loan.save();

  user.loans.push(event.transaction.hash.toHex());
  user.save();
}

export function handleWithdrawPartialLoan(event: WithdrawPartialLoan): void {
  let user = User.load(event.params.account.toHex());
  if (!user) {
    log.error(
      `[handleWithdrawPartialLoan|${event.transaction.hash.toHexString()}] User not found`,
      []
    );
    return;
  }

  let date = new Date(event.params.timestamp.toI64());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.hash = event.transaction.hash.toHexString();
  loan.market = event.params.market.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.amount;
  loan.action = "WithdrawLoan";
  loan.date = date.toString()
  loan.save();

  user.loans.push(event.transaction.hash.toHex());
  user.save();
}

export function handleNewLoan(event: NewLoan): void {
  let user = User.load(event.params.account.toHex());
  if (!user) {
    user = new User(event.params.account.toHex());
    user.address = event.params.account;
    user.save();
  }  

  let date = new Date(event.params.time.toI64());
  let loan = new Loan(event.transaction.hash.toHex());

  loan.hash = event.transaction.hash.toHexString();
  loan.market = event.params.loanMarket.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.loanAmount;
  loan.action = "NewLoan";
  loan.date = date.toString();
  loan.save();

  user.loans.push(event.transaction.hash.toHex());
  user.save();
}

export function handleLoanRepaid(event: LoanRepaid): void {
  let user = User.load(event.params.account.toHex());
  if (!user) {
    log.error(
      `[handleLoanRepaid|${event.transaction.hash.toHexString()}] User not found`,
      []
    );
    return;
  }

  let date = new Date(event.params.timestamp.toI64());

  let loan = new Loan(event.transaction.hash.toHex());

  loan.hash = event.transaction.hash.toHexString();
  loan.market = event.params.market.toString();
  loan.commitment = event.params.commitment.toString();
  loan.amount = event.params.repaidAmount;
  loan.action = "LoanRepaid";
  loan.date = date.toString();
  loan.save();

  loan.save();

  user.loans.push(event.transaction.hash.toHex());
  user.save();
}
