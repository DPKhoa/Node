const mongoose = require('mongoose');  
const Schema = mongoose.Schema;

const Course = new Schema({

    name: {type: String, maxlength: 255},
    slug:String,
    description: {type: String, maxlength: 255},
    image: {type: String, maxlength: 255},
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    videoId:String
  },
  // {
  //   collection:"courses"
  // }
  );

  module.exports = mongoose.model('courses', Course );