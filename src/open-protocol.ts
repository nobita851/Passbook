import { BigInt } from "@graphprotocol/graph-ts"
import {
  OpenProtocol,
  BorrowAprAccrued,
  LoanFee,
  WithdrawCollateralFee,
  SavingsAprAccrued,
  BorrowInterestRateUpdated,
  DepositInterestRateUpdated,
  APRupdated,
  CollateralFactorUpdated,
  CollateralPreClosureFeesUpdated,
  CollateralReleaseFeesUpdated,
  CommitmentAdded,
  DepositPreClosureFeesUpdated,
  DepositWithdrawalFeesUpdated,
  LoanClosureFeesUpdated,
  LoanIssuanceFeesUpdated,
  LoanPreClosureFeesUpdated,
  MarketSwapFeesUpdated,
  MaxWithdrawalUpdated,
  PauseState,
  ReserveFactorUpdated,
  TimelockValidityDeposit,
  YieldConversionFeesUpdated,
  savingsAPRupdated,
  DepositAdded,
  DepositWithdrawal,
  NewDeposit,
  PauseState1,
  DiamondCut,
  PauseState2,
  BorrowInterestUpdated,
  DepositInterestUpdated,
  InterestFactorsUpdated,
  InterestsUpdated,
  PauseState3,
  TokenSupportAdded,
  TokensIssued,
  DiamondCut1,
  Liquidation,
  PauseState4,
  AddCollateral,
  MarketSwapped,
  PauseState5,
  WithdrawCollateral,
  WithdrawPartialLoan,
  NewLoan,
  PauseState6,
  LoanRepaid,
  PauseState7,
  PauseState8,
  PauseState9,
  Market2Added,
  Market2Removed,
  Market2Updated,
  MarketSupportAdded,
  MarketSupportRemoved,
  MarketSupportUpdated,
  PauseState10
} from "../generated/OpenProtocol/OpenProtocol"
import { ExampleEntity } from "../generated/schema"

export function handleBorrowAprAccrued(event: BorrowAprAccrued): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.account = event.params.account
  entity.market = event.params.market

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // None
}

export function handleLoanFee(event: LoanFee): void {}

export function handleWithdrawCollateralFee(
  event: WithdrawCollateralFee
): void {}

export function handleSavingsAprAccrued(event: SavingsAprAccrued): void {}

export function handleBorrowInterestRateUpdated(
  event: BorrowInterestRateUpdated
): void {}

export function handleDepositInterestRateUpdated(
  event: DepositInterestRateUpdated
): void {}

export function handleAPRupdated(event: APRupdated): void {}

export function handleCollateralFactorUpdated(
  event: CollateralFactorUpdated
): void {}

export function handleCollateralPreClosureFeesUpdated(
  event: CollateralPreClosureFeesUpdated
): void {}

export function handleCollateralReleaseFeesUpdated(
  event: CollateralReleaseFeesUpdated
): void {}

export function handleCommitmentAdded(event: CommitmentAdded): void {}

export function handleDepositPreClosureFeesUpdated(
  event: DepositPreClosureFeesUpdated
): void {}

export function handleDepositWithdrawalFeesUpdated(
  event: DepositWithdrawalFeesUpdated
): void {}

export function handleLoanClosureFeesUpdated(
  event: LoanClosureFeesUpdated
): void {}

export function handleLoanIssuanceFeesUpdated(
  event: LoanIssuanceFeesUpdated
): void {}

export function handleLoanPreClosureFeesUpdated(
  event: LoanPreClosureFeesUpdated
): void {}

export function handleMarketSwapFeesUpdated(
  event: MarketSwapFeesUpdated
): void {}

export function handleMaxWithdrawalUpdated(event: MaxWithdrawalUpdated): void {}

export function handlePauseState(event: PauseState): void {}

export function handleReserveFactorUpdated(event: ReserveFactorUpdated): void {}

export function handleTimelockValidityDeposit(
  event: TimelockValidityDeposit
): void {}

export function handleYieldConversionFeesUpdated(
  event: YieldConversionFeesUpdated
): void {}

export function handlesavingsAPRupdated(event: savingsAPRupdated): void {}

export function handleDepositAdded(event: DepositAdded): void {}

export function handleDepositWithdrawal(event: DepositWithdrawal): void {}

export function handleNewDeposit(event: NewDeposit): void {}

export function handlePauseState1(event: PauseState1): void {}

export function handleDiamondCut(event: DiamondCut): void {}

export function handlePauseState2(event: PauseState2): void {}

export function handleBorrowInterestUpdated(
  event: BorrowInterestUpdated
): void {}

export function handleDepositInterestUpdated(
  event: DepositInterestUpdated
): void {}

export function handleInterestFactorsUpdated(
  event: InterestFactorsUpdated
): void {}

export function handleInterestsUpdated(event: InterestsUpdated): void {}

export function handlePauseState3(event: PauseState3): void {}

export function handleTokenSupportAdded(event: TokenSupportAdded): void {}

export function handleTokensIssued(event: TokensIssued): void {}

export function handleDiamondCut1(event: DiamondCut1): void {}

export function handleLiquidation(event: Liquidation): void {}

export function handlePauseState4(event: PauseState4): void {}

export function handleAddCollateral(event: AddCollateral): void {}

export function handleMarketSwapped(event: MarketSwapped): void {}

export function handlePauseState5(event: PauseState5): void {}

export function handleWithdrawCollateral(event: WithdrawCollateral): void {}

export function handleWithdrawPartialLoan(event: WithdrawPartialLoan): void {}

export function handleNewLoan(event: NewLoan): void {}

export function handlePauseState6(event: PauseState6): void {}

export function handleLoanRepaid(event: LoanRepaid): void {}

export function handlePauseState7(event: PauseState7): void {}

export function handlePauseState8(event: PauseState8): void {}

export function handlePauseState9(event: PauseState9): void {}

export function handleMarket2Added(event: Market2Added): void {}

export function handleMarket2Removed(event: Market2Removed): void {}

export function handleMarket2Updated(event: Market2Updated): void {}

export function handleMarketSupportAdded(event: MarketSupportAdded): void {}

export function handleMarketSupportRemoved(event: MarketSupportRemoved): void {}

export function handleMarketSupportUpdated(event: MarketSupportUpdated): void {}

export function handlePauseState10(event: PauseState10): void {}
