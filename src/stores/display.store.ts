import { makeAutoObservable } from "mobx";

export interface IDisplayStore {
  earnedAmount: number;
  limit: number;
  multiplier: number;
  multiplierOnWinning: number

  reset(): void;
  setEarnedAmount(earnedAmount: number): void;
  setLimit(limit: number): void;
  setMultiplier(multiplier: number): void;
  setMultiplierOnWinning(multiplierOnWinning: number): void
}

export class DisplayStore implements IDisplayStore {
  public earnedAmount: number = 0;
  public limit: number = 0;
  public multiplier: number = 1;
  public multiplierOnWinning: number = 0;

  public constructor() {
    makeAutoObservable(this);
  }

  public reset(): void {
    this.setLimit(0);
    this.setMultiplier(1);
  }

  public setEarnedAmount(earnedAmount: number): void {
    this.earnedAmount = earnedAmount;
  }

  public setLimit(limit: number): void {
    this.limit = limit;
  }

  public setMultiplier(multiplier: number): void {
    this.multiplier = multiplier;
  }

  public setMultiplierOnWinning(multiplierOnWinning: number): void {
    this.multiplierOnWinning = multiplierOnWinning;
  }
}

// export const useDisplayStore = (): IDisplayStore => {
//   const [limit, setLimit] = useState<number>(0);
//   const [multiplier, setMultiplier] = useState<number>(1);

//   const reset = (): void => {
//     setLimit(0);
//     setMultiplier(1);
//   };

//   return {
//     limit,
//     multiplier,

//     reset,
//     setLimit,
//     setMultiplier,
//   };
// };
