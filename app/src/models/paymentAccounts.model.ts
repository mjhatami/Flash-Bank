import { model, Schema, Document } from 'mongoose';
import { PaymentAccount } from '@interfaces/paymentAccount.interface';
const paymentAccountSchema: Schema = new Schema({
  account:{
    type: Object,
  },
  provider: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    default: 'ACTIVE' ,
    required: true,
  },
  isActive: {
    type: String,
    default: true,
    required: true,
  },

});

const paymentAccountModel = model<PaymentAccount & Document>('PaymentAccount', paymentAccountSchema);

export default paymentAccountModel;
