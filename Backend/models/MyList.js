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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
);

const MyList = mongoose.model('MyList', myListSchema);

export default MyList;
