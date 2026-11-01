import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICourseEnquiryInfo extends Document {
  userId: mongoose.Types.ObjectId;
  course?: 'Python' | 'Python Full Stack' | 'Gen AI' | string;
  experienceLevel?: 'new' | 'basics' | 'practice';
  pythonStartingPoint: 'new' | 'basics' | 'practice';
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

const CourseEnquiryInfoSchema: Schema<ICourseEnquiryInfo> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User', index: true },
    course: { type: String, required: false, enum: ['Python', 'Python Full Stack', 'Gen AI'], trim: true },
    experienceLevel: { type: String, required: false, enum: ['new', 'basics', 'practice'], trim: true },
    pythonStartingPoint: { type: String, required: false, enum: ['new', 'basics', 'practice'], trim: true },
    message: { type: String, required: false, trim: true },
  },
  {
    timestamps: true,
  }
);

const CourseEnquiryInfo: Model<ICourseEnquiryInfo> =
  mongoose.models.CourseEnquiryInfo || mongoose.model<ICourseEnquiryInfo>('CourseEnquiryInfo', CourseEnquiryInfoSchema, 'course_enquiry_infos');

export default CourseEnquiryInfo;
