import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL,{
      serverSelectionTimeoutMS: 10000, 
    }); 
    console.log('Connected to the database 🚀🚀🚀....');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export default connectToDatabase;
