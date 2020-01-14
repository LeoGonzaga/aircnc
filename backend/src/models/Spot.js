const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: String,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

SpotSchema.virtual("thumbnail_url").get(function() {
  return `http://localhost:3030/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Spot", SpotSchema);
