import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 1000, required: true },
    image: { type: String, maxLength: 255, required: true },
  },
  { timestamps: true }
);

// Custom query helpers
Course.query.sortable = function (sortInfo) {
  if (sortInfo && sortInfo.enabled) {
    const sort = {};
    sort[sortInfo.column] = sortInfo.type === "asc" ? 1 : -1;
    return this.sort(sort);
  }
  return this;
};

// Add plugins
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all"
});

export default mongoose.models.Course || mongoose.model("Course", Course);
