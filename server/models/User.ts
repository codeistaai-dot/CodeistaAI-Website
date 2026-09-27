import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  timezone: string;
  status: 'ACTIVE' | 'DELETED' | 'ONHOLD';
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, unique: true, trim: true },
    countryCode: { type: String, default: '+91' },
    timezone: { type: String, default: 'Asia/Kolkata' },
    status: { type: String, enum: ['ACTIVE', 'DELETED', 'ONHOLD'], default: 'ACTIVE' },
  },
  { timestamps: true }
);

UserSchema.index({ createdAt: -1 });

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
