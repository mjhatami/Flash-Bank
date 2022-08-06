import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema({
  fullName:{
    type: String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
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

const userModel = model<User & Document>('User', userSchema);

export default userModel;
