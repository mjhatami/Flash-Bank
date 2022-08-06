import { User } from "@interfaces/users.interface";
import { Reliability } from "@interfaces/reliabilities.interface";
export interface Credit {
  _id: string;
  description: string;
  reliability: Reliability;
  creditor: User;
  user: User;
  amount: number;
}
