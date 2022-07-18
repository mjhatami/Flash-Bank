import { Document, Model, model, Schema } from 'mongoose'
import {bcrypt} from  'bcrypt'
export interface IPerson extends Document {
  fullName: string
  email: string
  password: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export let PersonSchema: Schema = new Schema({
  fullName: {type: Schema.Types.String, required: true},
  email: {type: Schema.Types.String, required: true},
  password: {type: Schema.Types.String, required: true},
  status: {type: Schema.Types.String, default:'active',required: true},
  
},{
  collection: 'Person',
  timestamps:true,
  toJSON:{getters:true}
})
PersonSchema.pre('save', (next)=>{

  if(this.isModified('password') || this.isNew){
    const person = this

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(person.password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError)
          }

          person.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
}})
PersonSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(error, isMatch) {
    if (error) {
      return callback(error)
    } else {
      callback(null, isMatch)
    }
  })
}


export const Person: Model<IPerson> = model<IPerson>(
  'Person',
  PersonSchema,
)
