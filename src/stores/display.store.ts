import { makeAutoObservable } from "mobx";

export interface IDisplayStore {
  limit: number;
  multiplier: number;

  reset(): void;
  setLimit(limit: number): void;
  setMultiplier(multiplier: number): void;
}

export class DisplayStore implements IDisplayStore {
  public limit: number = 0;
  public multiplier: number = 1;

  public constructor() {
    makeAutoObservable(this);
  }

  public reset(): void {
    this.setLimit(0);
    this.setMultiplier(1);
  }

  public setLimit(limit: number): void {
    this.limit = limit;
  }

  public setMultiplier(multiplier: number): void {
    this.multiplier = multiplier;
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
