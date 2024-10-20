import { LocalStorageHelper } from "@/helpers/local-storage-helper";
import { makeAutoObservable } from "mobx";
import { z } from "zod";

export const walletBalanceSchema = z.number().positive();

const getAmount = (): number => {
  const walletBalance: number | null = LocalStorageHelper.getItem("wallet_balance");

  try {
    return walletBalanceSchema.parse(walletBalance);
  } catch {
    return 0;
  }
};

export interface IWalletBalanceStore {
  amount: number;

  decrementWith(amount: number): void;
  incrementWith(amount: number): void;
}

export class WalletBalanceStore implements IWalletBalanceStore {
  public amount: number = getAmount();

  public constructor() {
    this.synchronize();

    makeAutoObservable(this);
  }

  private setAmount(amount: number): void {
    const incomingAmount: number = parseFloat(amount.toFixed(2));

    LocalStorageHelper.setItem("wallet_balance", incomingAmount);

    this.amount = incomingAmount;
  }

  private synchronize(): void {
    addEventListener("storage", () => {
      this.setAmount(getAmount());
    });
  }

  public decrementWith(amount: number): void {
    this.setAmount(this.amount - amount);
  }

  public incrementWith(amount: number): void {
    this.setAmount(this.amount + amount);
  }
}

// export const useWalletBalanceStore = (): IWalletBalanceStore => {
//   const [amount, setAmount] = useState<number>(getAmount());

//   const incrementWith = (value: number): void => {
//     setStorageAmount(amount + value);
//   };

//   const setStorageAmount = (storageAmount: number): void => {
//     LocalStorageHelper.setItem("wallet_balance", storageAmount);

//     setAmount(storageAmount);
//   };

//   useEffect(() => {
//     const synchronize = (): void => setStorageAmount(getAmount());

//     addEventListener("storage", synchronize);

//     return (): void => removeEventListener("storage", synchronize);
//   }, []);

//   return {
//     amount,

//     incrementWith,
//   };
// };
