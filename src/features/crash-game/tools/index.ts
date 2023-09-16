export class CrashGameTool {
  public generateCrashPoint(): number {
    const e: number = 2 ** 32;
    const [h] = crypto.getRandomValues(new Uint32Array(1));
    const crashPoint: number = Math.floor((100 * e - h) / (e - h)) / 100;

    return crashPoint;
  }

  public toDisplay(crashValue: number): string {
    return `${crashValue.toFixed(2).replace(".", ",")}X`;
  }
}
