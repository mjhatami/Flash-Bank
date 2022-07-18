import { Document, Model, model, Schema } from 'mongoose'
import { SoftDeleteModel, SoftDeleteDocument } from 'mongoose-delete'
import * as MongooseDelete from 'mongoose-delete'

import { LOAN_REQUESTS_TYPES } from 'constants/loanRequestStatus.const'

export interface ILoanRequest extends SoftDeleteDocument {
  from: Schema.Types.ObjectId
  to: Schema.Types.ObjectId
  email: string
  amount: string
  password: string
  receivedAt: string
  debts: [Schema.Types.ObjectId]
  status: [{
    // TODO: LOAN_REQUESTS_TYPES
    title: string
    at: Date
  }]
  isAccepted: boolean
  acceptedAt: Date
  expireAt: Date
  createdAt: Date
  updatedAt: Date
}

export let loanRequestSchema: Schema = new Schema<ILoanRequest>({
  from: {type: Schema.Types.ObjectId, required: true, ref: 'Person'},
  to: {type: Schema.Types.ObjectId, required: true, ref: 'Person'},
  amount: {type: Schema.Types.String, required: true},
  receivedAt: {type: Schema.Types.String, required: true},
  debts: [{type: Schema.Types.ObjectId, required: true, ref:'Debt'}],  
  isAccepted: {type: Schema.Types.Boolean, default:false, required: true},
  status:[{

    title: {type: Schema.Types.String, enum: LOAN_REQUESTS_TYPES, required: true},
    at: {type: Schema.Types.Date, required: true},
  }],
  acceptedAt:{type: Schema.Types.Date},
  expireAt:{type: Schema.Types.Date},

},{
  collection: 'LoanRequest',
  timestamps:true
})

loanRequestSchema.plugin(MongooseDelete,{overrideMethods:true, deletedAt:true, deletedBy:true, deletedByType: String} );

export const Person: SoftDeleteModel = model<ILoanRequest>(
  'LoanRequest',
  loanRequestSchema,
)
