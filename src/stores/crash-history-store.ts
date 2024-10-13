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

export interface ICrashHistoryStore {
  list: number[];

  insert(crashPoint: number): void;
}

export class CrashHistoryStore implements ICrashHistoryStore {
  public list: number[] = this.getList();

  public constructor() {
    this.synchronize();

    makeAutoObservable(this);
  }

  private getList(): number[] {
    const list: number[] | null = LocalStorageHelper.getItem("crash_history");

    try {
      return crashHistorySchema.parse(list);
    } catch {
      return [];
    }
  }

  private setList(list: number[]): void {
    LocalStorageHelper.setItem("crash_history", list);

    this.list = list;
  }

  private synchronize(): void {
    addEventListener("storage", () => {
      this.setList(this.getList());
    });
  }

  public insert(crashPoint: number): void {
    this.setList([crashPoint, ...this.list]);
  }
}
