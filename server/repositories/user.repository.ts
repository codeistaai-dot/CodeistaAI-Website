import User, { IUser } from '@/server/models/User';
import UtmCampaign from '@/server/models/UtmCampaign';
import CourseEnquiryInfo from '@/server/models/CourseEnquiryInfo';
import mongoose from 'mongoose';

export class UserRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    if (!email) return null;
    return User.findOne({ email: email.toLowerCase().trim() });
  }

  async findByPhone(phone: string): Promise<IUser | null> {
    if (!phone) return null;
    return User.findOne({ phone: phone.trim() });
  }

  async createUser(
    userData: Partial<IUser>,
    campaignData: Record<string, any> | null,
    courseEnquiryData: Record<string, any>
  ): Promise<IUser> {
    let session: mongoose.ClientSession | null = null;
    let inTransaction = false;

    try {
      session = await mongoose.startSession();
      try {
        session.startTransaction();
        inTransaction = true;
      } catch {
        // Transactions not supported in standalone MongoDB; proceed without session
        session = null;
      }
    } catch {
      session = null;
    }

    try {
      const createOptions = session && inTransaction ? { session } : undefined;

      const [user] = await User.create([userData], createOptions);

      const tasks: Promise<any>[] = [];

      if (campaignData && Object.keys(campaignData).length > 0) {
        tasks.push(
          UtmCampaign.create([{ userId: user._id, ...campaignData }], createOptions)
        );
      }

      if (courseEnquiryData && Object.keys(courseEnquiryData).length > 0) {
        tasks.push(
          CourseEnquiryInfo.create(
            [{ userId: user._id, ...courseEnquiryData }],
            createOptions
          )
        );
      }

      await Promise.all(tasks);

      if (session && inTransaction) {
        await session.commitTransaction();
      }

      return user;
    } catch (error) {
      if (session && inTransaction && session.inTransaction()) {
        await session.abortTransaction();
      }
      throw error;
    } finally {
      if (session) {
        await session.endSession();
      }
    }
  }

  async updateExistingUser(
    userId: mongoose.Types.ObjectId,
    userData: Partial<IUser>,
    campaignData: Record<string, any> | null,
    courseEnquiryData: Record<string, any>
  ): Promise<boolean> {
    let session: mongoose.ClientSession | null = null;
    let inTransaction = false;

    try {
      session = await mongoose.startSession();
      try {
        session.startTransaction();
        inTransaction = true;
      } catch {
        session = null;
      }
    } catch {
      session = null;
    }

    try {
      const updateOptions = session && inTransaction ? { session } : undefined;

      if (userData && Object.keys(userData).length > 0) {
        await User.findByIdAndUpdate(
          userId,
          {
            $set: {
              ...(userData.name ? { name: userData.name } : {}),
              ...(userData.countryCode ? { countryCode: userData.countryCode } : {}),
              ...(userData.timezone ? { timezone: userData.timezone } : {}),
            },
          },
          updateOptions
        );
      }

      const tasks: Promise<any>[] = [];

      if (campaignData && Object.keys(campaignData).length > 0) {
        tasks.push(
          UtmCampaign.create([{ userId, ...campaignData }], updateOptions)
        );
      }

      if (courseEnquiryData && Object.keys(courseEnquiryData).length > 0) {
        tasks.push(
          CourseEnquiryInfo.create(
            [{ userId, ...courseEnquiryData }],
            updateOptions
          )
        );
      }

      await Promise.all(tasks);

      if (session && inTransaction) {
        await session.commitTransaction();
      }

      return true;
    } catch (error) {
      if (session && inTransaction && session.inTransaction()) {
        await session.abortTransaction();
      }
      throw error;
    } finally {
      if (session) {
        await session.endSession();
      }
    }
  }
}
