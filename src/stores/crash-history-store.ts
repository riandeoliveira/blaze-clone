import { LocalStorageHelper } from "@/helpers/local-storage-helper";
import { makeAutoObservable } from "mobx";
import { z } from "zod";

const crashHistorySchema = z
  .array(
    z
      .number()
      .positive()
      .refine((value) => value >= 1),
  )
  .nonempty();

const getCrashPoints = (): number[] => {
  const crashPoints: number[] | null = LocalStorageHelper.getItem("crash_history");

  try {
    return crashHistorySchema.parse(crashPoints);
  } catch {
    return [];
  }
};

export class CrashHistoryStore implements ICrashHistoryStore {
  public crashPoints: number[] = getCrashPoints();

  public constructor() {
    this.synchronize();

    makeAutoObservable(this);
  }

  private setList(crashPoints: number[]): void {
    LocalStorageHelper.setItem("crash_history", crashPoints);

    this.crashPoints = crashPoints;
  }

  private synchronize(): void {
    addEventListener("storage", () => {
      this.setList(getCrashPoints());
    });
  }

  public insert(crashPoint: number): void {
    this.setList([crashPoint, ...this.crashPoints]);
  }
}

export interface ICrashHistoryStore {
  crashPoints: number[];

  insert(crashPoint: number): void;
}

// export const useCrashHistoryStore = (): ICrashHistoryStore => {
//   const [crashPoints, setCrashPoints] = useState<number[]>(getCrashPoints());

//   const insert = (crashPoint: number): void => {
//     setStorageCrashPoints([crashPoint, ...crashPoints]);
//   };

//   const setStorageCrashPoints = (storageCrashPoints: number[]): void => {
//     LocalStorageHelper.setItem("crash_history", storageCrashPoints);

//     setCrashPoints(storageCrashPoints);
//   };

//   useEffect(() => {
//     const synchronize = (): void => setStorageCrashPoints(getCrashPoints());

//     addEventListener("storage", synchronize);

//     return (): void => removeEventListener("storage", synchronize);
//   }, []);

//   return {
//     crashPoints,

//     insert,
//   };
// };
