const mongoose = require("mongoose")

const countrySchema = mongoose.Schema(
  {
    
    name: {
        type: String,
        required: [true, "Please add an name"],
      }, 
      cinema: {
        type: [String],
        required: [true, "Please add an cinema"],
      },
},
    {
      timestamps: true,
    },

  )
  module.exports = mongoose.model("countries", countrySchema)