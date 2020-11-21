import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Employee = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    attitude: {
      type: String,
      required: true,
    },
    team: {
      type: String,
      required: true,
    },
    birth: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model(`Employee`, Employee, `Employee`);
