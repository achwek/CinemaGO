const mongoose = require("mongoose")

const filmSchema = mongoose.Schema(
  {
    filmId: { type: mongoose.Schema.Types.ObjectId, ref: "Film" },

    title: {
      type: String,
      required: [true, "Please add an title"],
    },
    description: {
      type: String,
      required: [true, "Please add an description"],
    }, 
    country: {
      type: String,
      required: [true, "Please add a end Country"],
    },
    cinema: {
      type: String,
      required: [true, "Please add a end cinema"],
    },
    categorie: {
      type: String,
      required: [true, "Please add a end cinema"],
    },
    partner: {
      type: String,
      required: [true, "Please add partner"],
    },
    age: {
      type: Number,
      default: 0,
      required: [true, "Please add a end type"],
    },
    type: {
      type: String,
      required: [true, "Please add a end type"],
    },
    date: {
      type: Date,
          
      required: [true, "Please add an start time"],
    }, 
    timestart: {
      type: String,
      required: [true, "Please add an start time"],
    },
    timeend: {
      type: String,
      required: [true, "Please add a end time"],
    }, 
    image: {
      type: String,
      required: [true, "Please add a image"],
    }, 
    video: {
      type: String,
      //equired: [true, "Please add a video"],
    },
    imagesStars:{
      type: [String],
      //equired: [true, "Please add a video"],
    },
    listDate: {
      date: { type: Date },
      timestart: { type: String },
      timeend: { type: String },
    }
    
  },

  {
    timestamps: true,
  },
)
module.exports = mongoose.model("films", filmSchema)