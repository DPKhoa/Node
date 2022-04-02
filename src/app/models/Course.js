const mongoose = require('mongoose');  
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Course = new Schema({

    name: {type: String, required: true},
    slug: { type: String, slug: 'name', unique: true  },
    description: {type: String, maxlength: 255},
    image: { type: String },
    videoId: {type: String, required: true},
    level: {type: String}
   
    
  }, {
    timestamps: true
  }
  // {
  //   collection:"courses"
  // }
  );

  //Add plugins
  mongoose.plugin(slug);
  Course.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all' });

  module.exports = mongoose.model('courses', Course );