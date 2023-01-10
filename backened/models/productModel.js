const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please Enter product Name"],
    // trim: true,
    // value : '',
  },
  description: {
    type: String,
    // required: [true, "Please Enter product Description"],
  },
  price: {
    type: Number,
    // required: [true, "Please Enter product Price"],
    // maxLength: [8, "Price cannot exceed 8 characters"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        // required: [true,"product image is required"]
      },
      url: {
        type: String,
        // required: [true,"image url is required"]
      },
    },
  ],
  category: {
    type: String,
    // required: [true, "Please Enter Product Category"],
  },
  Stock: {
    type: Number,
    // required: [true, "Please Enter product Stock"],
    // maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: [true,"user is required"],
        // value:'',
      },
      name: {
        type: String,
        // required: [true,"Name is required"],
        // value : '',
      },
      rating: {
        type: Number,
        // required: [true, "rating is required"]
      },
      comment: {
        type: String,
        // required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    // required: [true,"user is required"]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
