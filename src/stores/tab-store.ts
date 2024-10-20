import { makeAutoObservable } from "mobx";

export type TabModeKey = "auto" | "free" | "normal";

export interface ITabStore {
  mode: TabModeKey;

  setMode(mode: TabModeKey): void;
}

export class TabStore implements ITabStore {
  public mode: TabModeKey = "normal";

  public constructor() {
    makeAutoObservable(this);
  }

  public setMode(mode: TabModeKey): void {
    this.mode = mode;
  }
}

// export const useTabStore = (): ITabStore => {
//   const [mode, setMode] = useState<TabModeKey>("normal");

//   return {
//     mode,

//     setMode,
//   };
// };
