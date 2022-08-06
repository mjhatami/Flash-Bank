import { User } from "@interfaces/users.interface";
import { Credit } from "@interfaces/credits.interface";
import { Debt } from "@interfaces/debts.interface";
export interface Loan {
  _id: string;
  loaner: User;
  debtor: User;
  amount: number;
  debts: Debt[];
  credits: Credit[];
  creditRequested: Credit;
  status: string;
  isActive: boolean;
}
