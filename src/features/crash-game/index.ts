import { LocalStorageStore } from "store/local-storage.store";
import { ControllerStore } from "./store/controller.store";
import { DisplayStore } from "./store/display.store";
import { StatusStore } from "./store/status.store";

class CrashGame {
  public constructor(
    public readonly controllerStore: ControllerStore,
    public readonly displayStore: DisplayStore,
    public readonly localStorageStore: LocalStorageStore,
    public readonly statusStore: StatusStore,
  ) {}

  public addPreviousCrashPoint(): void {
    const currentCrashPoint = Number(this.displayStore.multiplier.toFixed(2));

    this.localStorageStore.addToWalletBalance(currentCrashPoint);
  }

  public checkIfCanCrash(): boolean {
    return this.displayStore.multiplier >= this.displayStore.limit;
  }

  public crash(): void {
    this.statusStore.setIsCrashed(true);
    this.addPreviousCrashPoint();

    setTimeout(() => {
      this.displayStore.reset();
      this.statusStore.reset();
      this.statusStore.setIsLoading(true);
    }, 5000);
  }

  public generateCrashPoint(): number {
    const e: number = 2 ** 32;
    const [h] = crypto.getRandomValues(new Uint32Array(1));
    const crashPoint: number = Math.floor((100 * e - h) / (e - h)) / 100;

    return crashPoint;
  }

  public setCrashPoint(): void {
    this.displayStore.limit = this.generateCrashPoint();
  }
}

const controllerStore = new ControllerStore();
const displayStore = new DisplayStore();
const localStorageStore = new LocalStorageStore();
const statusStore = new StatusStore();

export const crashGame = new CrashGame(
  controllerStore,
  displayStore,
  localStorageStore,
  statusStore,
);
