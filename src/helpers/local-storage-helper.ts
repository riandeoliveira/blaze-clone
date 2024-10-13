export class LocalStorageHelper {
  public static getItem<T>(key: string): T | null {
    const item: string | null = localStorage.getItem(key);

    try {
      if (item) return JSON.parse(item);

      return null;
    } catch {
      return null;
    }
  }

  public static setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
