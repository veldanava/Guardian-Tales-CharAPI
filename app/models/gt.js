module.exports = mongoose => {
  // schema
  const schema = mongoose.Schema(
    {
      charname: String,
      gender: String,
      race: String,
      world: String,
      stars: String,
      element: String,
      exclusiveweapon: String,
      lore: String,
      specialskills: String,
      chainskills: String
    }
  );
  schema.method("toJSON", function(){
    const {__v, __id, ...object} = this.toObject();
    object.id = __id;
    return object;
  });
  return mongoose.model("gt", schema);
}