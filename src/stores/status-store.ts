import { makeAutoObservable } from "mobx";

export interface IStatusStore {
  isCrashed: boolean;
  isLoading: boolean;

  reset(): void;
  setIsCrashed(isCrashed: boolean): void;
  setIsLoading(isLoading: boolean): void;
}

export class StatusStore implements IStatusStore {
  public isCrashed: boolean = false;
  public isLoading: boolean = false;

  public constructor() {
    makeAutoObservable(this);
  }

  public reset(): void {
    this.setIsCrashed(false);
    this.setIsLoading(false);
  }

  public setIsCrashed(isCrashed: boolean): void {
    this.isCrashed = isCrashed;
  }

  public setIsLoading(isLoading: boolean): void {
    this.isLoading = isLoading;
  }
}

// export const useStatusStore = (): IStatusStore => {
//   const [isCrashed, setIsCrashed] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const reset = (): void => {
//     setIsCrashed(false);
//     setIsLoading(false);
//   };

//   return {
//     isCrashed,
//     isLoading,

//     reset,
//     setIsCrashed,
//     setIsLoading,
//   };
// };
