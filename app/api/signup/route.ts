import { NextRequest } from 'next/server';
import connectToDatabase from '@/server/config/db';
import { UserController } from '@/server/controllers/user.controller';
import { UserService } from '@/server/services/user.service';
import { UserRepository } from '@/server/repositories/user.repository';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
  } catch (err: any) {
    const isMissingEnv = err.message && err.message.includes('MONGODB_URI');
    return new Response(
      JSON.stringify({
        success: false,
        code: 'DATABASE_ERROR',
        message: isMissingEnv
          ? 'Database configuration is not set up yet. Please check environment variables.'
          : 'Unable to connect to database. Please try again later.',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  return userController.signup(req);
}
