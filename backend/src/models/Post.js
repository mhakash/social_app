const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    minLength: 7
  },
  date: {
    type: Date,
    default: Date.now()
  }
})


const Post = mongoose.model('Post', postSchema)

module.exports = Post