import { makeAutoObservable } from "mobx";
import type { TabModeType } from "../types";

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
