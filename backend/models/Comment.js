const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
  bookID: String,
	comment: String,
	userID: String,
  userName: String,
	date: Date
})

module.exports = mongoose.model("Comment", commentSchema)
