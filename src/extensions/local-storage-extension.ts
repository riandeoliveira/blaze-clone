import type { LocalStorageKeys } from "@/types/local-storage";

export class LocalStorageExtension {
  private storage: Storage;

  public constructor() {
    this.storage = localStorage;
  }

  public getItem<T>(key: LocalStorageKeys): T | null {
    const storageItem: string | null = this.storage.getItem(key);

    try {
      if (storageItem) return JSON.parse(storageItem);

      return null;
    } catch {
      return null;
    }
  }

  public setItem<T>(key: LocalStorageKeys, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }
}

export const localStorageExtension = new LocalStorageExtension();
