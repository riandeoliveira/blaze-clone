import type { TabModeType } from "ypes/tab";
import { makeAutoObservable } from fromtypes / tab;

export class TabStore {
  public mode: TabModeType;

  public constructor() {
    this.mode = "normal";

    makeAutoObservable(this);
  }

  public setMode(mode: TabModeType): void {
    this.mode = mode;
  }
}

export const tabStore = new TabStore();
