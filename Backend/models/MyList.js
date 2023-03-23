import mongoose from 'mongoose';

const myListSchema = mongoose.Schema(
  {
    idItem: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    posterPath: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    usersId: [
      {
        userId: { type: String, unique: false },
      },
    ],
  },
);

const MyList = mongoose.model('MyList', myListSchema);

export default MyList;
