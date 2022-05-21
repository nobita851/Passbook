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
import { Deposit, Loan, User, Action } from "../generated/schema"

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
  let action = new Action(event.transaction.hash.toHex());

  action.hash = event.transaction.hash.toHexString();
  action.market = event.params.market.toString();
  action.commitment = event.params.commitment.toString();
  action.amount = event.params.amount;
  action.action = "AddToDeposit";
  action.date = date.toString();
  action.save();

  deposit.actions.push(event.transaction.hash.toHexString());
  deposit.save();

  user.deposits.push(event.transaction.hash.toHexString());
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
  let action = new Action(event.transaction.hash.toHex());

  action.hash = event.transaction.hash.toHexString();
  action.market = event.params.market.toString();
  action.commitment = event.params.commitment.toString();
  action.amount = event.params.amount;
  action.action = "WithdrawDeposit";
  action.date = date.toString();
  action.save();

  deposit.actions.push(event.transaction.hash.toHexString());
  deposit.save();

  user.deposits.push(event.transaction.hash.toHexString());
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
  let action = new Action(event.transaction.hash.toHex());

  action.hash = event.transaction.hash.toHexString();
  action.market = event.params.market.toString();
  action.commitment = event.params.commitment.toString();
  action.amount = event.params.amount
  action.action = "NewDeposit"
  action.date = date.toString();
  action.save();

  deposit.actions.push(event.transaction.hash.toHexString());
  deposit.save()

  user.deposits.push(event.transaction.hash.toHexString());
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
  let action = new Action(event.transaction.hash.toHex());

  action.hash = event.transaction.hash.toHexString();
  action.market = event.params.market.toString();
  action.commitment = event.params.commitment.toString();
  action.amount = event.params.amount;
  action.action = "Liquidated";
  action.date = date.toString();
  action.save();

  loan.actions.push(event.transaction.hash.toHexString());
  loan.save();

  user.loans.push(event.transaction.hash.toHexString());
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
  let action = new Action(event.transaction.hash.toHex());

  action.hash = event.transaction.hash.toHexString();
  action.market = event.params.market.toString();
  action.commitment = event.params.commitment.toString();
  action.amount = event.params.amount;
  action.action = "AddCollateral";
  action.date = date.toString()
  action.save();

  loan.actions.push(event.transaction.hash.toHexString());
  loan.save();

  user.loans.push(event.transaction.hash.toHexString());
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
  let action = new Action(event.transaction.hash.toHex());

  action.hash = event.transaction.hash.toHexString();
  action.market = event.params.currentMarket.toString();
  action.commitment = event.params.commitment.toString();
  action.amount = event.params.amount;
  action.action = "SwappedLoan";
  action.date = date.toString()
  action.save();

  loan.actions.push(event.transaction.hash.toHexString());
  loan.save();

  user.loans.push(event.transaction.hash.toHexString());
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
  let action = new Action(event.transaction.hash.toHex());

  action.hash = event.transaction.hash.toHexString();
  action.market = event.params.market.toString();
  action.commitment = event.params.commitment.toString();
  action.amount = event.params.amount;
  action.action = "WithdrawCollateral";
  action.date = date.toString()
  action.save();

  loan.actions.push(event.transaction.hash.toHexString());
  loan.save();

  user.loans.push(event.transaction.hash.toHexString());
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
  let action = new Action(event.transaction.hash.toHex());

  action.hash = event.transaction.hash.toHexString();
  action.market = event.params.market.toString();
  action.commitment = event.params.commitment.toString();
  action.amount = event.params.amount;
  action.action = "WithdrawLoan";
  action.date = date.toString()
  action.save();

  loan.actions.push(event.transaction.hash.toHexString());
  loan.save();

  user.loans.push(event.transaction.hash.toHexString());
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
  let action = new Action(event.transaction.hash.toHex());

  action.hash = event.transaction.hash.toHexString();
  action.market = event.params.loanMarket.toString();
  action.commitment = event.params.commitment.toString();
  action.amount = event.params.loanAmount;
  action.action = "NewLoan";
  action.date = date.toString();
  action.save();

  loan.actions.push(event.transaction.hash.toHexString());
  loan.save();

  user.loans.push(event.transaction.hash.toHexString());
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
  let action = new Action(event.transaction.hash.toHex());

  action.hash = event.transaction.hash.toHexString();
  action.market = event.params.market.toString();
  action.commitment = event.params.commitment.toString();
  action.amount = event.params.repaidAmount;
  action.action = "LoanRepaid";
  action.date = date.toString();
  action.save();

  loan.actions.push(event.transaction.hash.toHexString());
  loan.save();

  user.loans.push(event.transaction.hash.toHexString());
  user.save();
}
