function multipleMongooseToObject(mongooses) {
  return mongooses.map((mongoose) => mongoose.toObject());
}

function mongooseToObject(mongoose) {
  return mongoose ? mongoose.toObject() : mongoose;
}   

export { multipleMongooseToObject, mongooseToObject };