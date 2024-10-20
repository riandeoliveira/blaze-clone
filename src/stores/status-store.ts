import { makeAutoObservable } from "mobx";

export interface IStatusStore {
  isCrashed: boolean;
  isInGameQueue: boolean;
  isLoading: boolean;
  isPlaying: boolean;
  isReadyToStart: boolean;
  isWaitingToStart: boolean;
  isWinner: boolean;

  reset(): void;
  setIsCrashed(isCrashed: boolean): void;
  setIsInGameQueue(isInGameQueue: boolean): void;
  setIsLoading(isLoading: boolean): void;
  setIsPlaying(isPlaying: boolean): void;
  setIsReadyToStart(isReadyToStart: boolean): void;
  setIsWaitingToStart(isWaitingToStart: boolean): void;
  setIsWinner(isWinner: boolean): void;
}

export class StatusStore implements IStatusStore {
  public isCrashed: boolean = false;
  public isInGameQueue: boolean = false;
  public isLoading: boolean = false;
  public isPlaying: boolean = false;
  public isReadyToStart: boolean = false;
  public isWaitingToStart: boolean = false;
  public isWinner: boolean = false;

  public constructor() {
    makeAutoObservable(this);
  }
  public reset(): void {
    this.setIsCrashed(false);
    this.setIsInGameQueue(false);
    this.setIsLoading(false);
    this.setIsPlaying(false);
    this.setIsReadyToStart(false);
    this.setIsWaitingToStart(false);
    this.setIsWinner(false);
  }

  public setIsCrashed(isCrashed: boolean): void {
    this.isCrashed = isCrashed;
  }

  public setIsInGameQueue(isInGameQueue: boolean): void {
    this.isInGameQueue = isInGameQueue;
  }

  public setIsLoading(isLoading: boolean): void {
    this.isLoading = isLoading;
  }

  public setIsPlaying(isPlaying: boolean): void {
    this.isPlaying = isPlaying;
  }

  public setIsReadyToStart(isReadyToStart: boolean): void {
    this.isReadyToStart = isReadyToStart;
  }

  public setIsWaitingToStart(isWaitingToStart: boolean): void {
    this.isWaitingToStart = isWaitingToStart;
  }

  public setIsWinner(isWinner: boolean): void {
    this.isWinner = isWinner;
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
