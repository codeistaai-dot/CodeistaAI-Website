import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICourseEnquiryInfo extends Document {
  userId: mongoose.Types.ObjectId;
  pythonStartingPoint: 'new' | 'basics' | 'practice';
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CourseEnquiryInfoSchema: Schema<ICourseEnquiryInfo> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User', index: true },
    pythonStartingPoint: { type: String, required: true, enum: ['new', 'basics', 'practice'], trim: true },
    message: { type: String, required: false, trim: true },
  },
  {
    timestamps: true,
  }
);

const CourseEnquiryInfo: Model<ICourseEnquiryInfo> =
  mongoose.models.CourseEnquiryInfo || mongoose.model<ICourseEnquiryInfo>('CourseEnquiryInfo', CourseEnquiryInfoSchema, 'course_enquiry_infos');

export default CourseEnquiryInfo;
