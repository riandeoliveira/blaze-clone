import type { IBaseLocalStorageExtension } from "./types";

export class BaseLocalStorageExtension implements IBaseLocalStorageExtension {
  public length: number;

  public constructor() {
    this.length = localStorage.length;
  }

  public clear(): void {
    localStorage.clear();

    this.length = localStorage.length;
  }

  public getItem<K extends string, T>(key: K): T | null {
    const storageItem: string | null = localStorage.getItem(key);

    try {
      if (storageItem) return JSON.parse(storageItem);
    } catch (error: unknown) {
      console.error(error);
    }

    return null;
  }

  public key(index: number): string | null {
    return localStorage.key(index);
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key);

    this.length = localStorage.length;
  }

  public setItem<K extends string, T>(key: K, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));

    this.length = localStorage.length;
  }
}

export const baseLocalStorageExtension = new BaseLocalStorageExtension();
