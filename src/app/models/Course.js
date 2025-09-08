import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 1000, required: true },
    image: { type: String, maxLength: 255, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Course", Course);
