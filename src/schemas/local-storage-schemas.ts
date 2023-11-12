import { z } from "zod";

export const crashHistorySchema = z
  .array(
    z
      .number()
      .positive()
      .refine((value) => value >= 1),
  )
  .nonempty();

export const walletBalanceSchema = z.number().positive();
