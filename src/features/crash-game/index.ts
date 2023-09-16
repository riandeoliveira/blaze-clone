import { LocalStorageStore } from "store/local-storage.store";
import { CrashGameStore } from "./store";
import { CrashGameTool } from "./tools";

class CrashGame {
  public constructor(
    public readonly localStorageStore: LocalStorageStore,
    public readonly store: CrashGameStore,
    public readonly tools: CrashGameTool,
  ) {}

  public addPreviousCrashPoint(): void {
    this.store.previousCrashList.push(this.store.multiplier);

    const currentCrashPoint = Number(this.store.multiplier.toFixed(2));

    this.localStorageStore.insert(currentCrashPoint);
  }

  public checkIfCanCrash(): boolean {
    return this.store.multiplier >= this.store.limit;
  }

  public crash(): void {
    this.store.setIsCrashed(true);
    this.addPreviousCrashPoint();

    setTimeout(() => {
      this.store.reset();
      this.store.setIsLoading(true);
    }, 5000);
  }

  public setCrashPoint(): void {
    this.store.setLimit(this.tools.generateCrashPoint());
  }
}

const localStorageStore = new LocalStorageStore();
const store = new CrashGameStore();
const tools = new CrashGameTool();

export const crashGame = new CrashGame(localStorageStore, store, tools);
