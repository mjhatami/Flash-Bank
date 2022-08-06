import { User } from "@interfaces/users.interface";
import { Credit } from "@interfaces/credits.interface";
export interface Reliability {
  _id: string;
  user: User;
  totalCredit: number;
  credits: Credit[];
}
