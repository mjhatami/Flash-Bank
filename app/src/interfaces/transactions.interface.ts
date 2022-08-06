import { User } from "@interfaces/users.interface";
import { Credit } from "@interfaces/credits.interface";
import { PaymentAccount } from "@interfaces/paymentAccount.interface";
export interface Transaction {
  _id: string;
  paymentAccount: PaymentAccount;
  provider: string;
  transactionDetail: any;
  amount: number;
  status: string;
  isActive: boolean;
}
