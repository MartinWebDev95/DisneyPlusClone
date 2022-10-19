import mongoose from 'mongoose';

const connectToDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${db.connection.host}:${db.connection.port}`);
  } catch (error) {
    console.log(`Error trying to connect to db: ${error}`);
    process.exit(1);
  }
};

export default connectToDB;
