import { CrashGameStore } from "./store";
import { CrashGameTool } from "./tools";

class CrashGame {
  public constructor(
    public readonly store: CrashGameStore,
    public readonly tools: CrashGameTool,
  ) {}

  public checkIfCanCrash(): boolean {
    return this.store.multiplier >= this.store.limit;
  }

  public crash(): void {
    this.store.setIsCrashed(true);

    setTimeout(() => {
      this.store.reset();
      this.store.setIsLoading(true);
    }, 5000);
  }

  public getFormattedMultiplier(): string {
    return `${this.store.multiplier.toFixed(2).replace(".", ",")}X`;
  }

  public setCrashPoint(): void {
    this.store.setLimit(this.tools.generateCrashPoint());
  }
}

const store = new CrashGameStore();
const tools = new CrashGameTool();

export const crashGame = new CrashGame(store, tools);
