import { Transaction } from "./transaction";

export interface TransactionPerDay {
  date: Date;
  total: number;
  transactions: Transaction[];
}
