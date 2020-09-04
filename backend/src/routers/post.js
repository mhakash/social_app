const express = require('express')
const auth = require('../middleware/auth')
const Post = require('../models/Post')
const router = express.Router()

router.post('/add', auth, async (req, res) => {
  // console.log(req.user.name)
  // console.log(req.body.post)
  try {
    const post = new Post({
      content: req.body.post,
      author: req.user.name
    })
    await post.save();
  } catch (error) {
    res.status(400).json({
      error: 'internal error'
    })
  }
  res.json({
    success: true
  })
})

module.exports = router;