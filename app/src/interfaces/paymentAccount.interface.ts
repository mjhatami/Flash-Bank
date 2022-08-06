import { User } from "@interfaces/users.interface";
import { Credit } from "@interfaces/credits.interface";
export interface PaymentAccount {
  _id: string;
  account: any;
  provider: string;
  user: User;
  status: string;
  isActive: boolean;
  
}
