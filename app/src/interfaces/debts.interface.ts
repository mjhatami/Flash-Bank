import { User } from "@interfaces/users.interface";
import { Credit } from "@interfaces/credits.interface";
export interface Debt {
  _id: string;
  creditor: User;
  debtor: User;
  amount: number;
  clearingDate: Date;
  clearAt: Date;

  credits: Credit[];
}
