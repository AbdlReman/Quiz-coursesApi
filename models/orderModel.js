const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  payment: {},
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    default: "Not Process",
    enum: ["Not Process", "Processing", "Shipped", "delivered", "cancel"],
  },
});

module.exports = mongoose.model("Order", orderSchema);
