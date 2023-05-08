const mongoose = require("mongoose")

const cinemaSchema = mongoose.Schema(
  {
    
    name: {
        type: String,
        required: [true, "Please add an name"],
      },
      description: {
        type: String,
        required: [true, "Please add an description "],
      },
      dateCreation: {
        type: String,
      },
    capacite: {
        type: Number,
        required: [true, "Please add an Capacite "],
      },
      address: {
        type: String,
        required: [true, "Please add an address "],
      },
      email: {
        type: String,
       // required: [true, "Please add an address "],
      },
      tel: {
        type: String,
       // required: [true, "Please add an tel "],
      },
      site: {
        type: String,
       // required: [true, "Please add an site "],
      },
      urlLogo: {
        type: String,
    //    required: [true, "Please add an logo "],
      },
},
    {
      timestamps: true,
    },

  )
  module.exports = mongoose.model("cinemas", cinemaSchema)