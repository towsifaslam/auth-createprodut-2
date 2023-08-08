import mongoose from'mongoose'
const tourShema =  mongoose.Schema({
  title: String,
  description: String,
  name: String,
  creatore: String,
  tags:[String],
  imageFile:String,
  createdAt:{
    type: Date,
    default: new Date()
  },
  likeCount:{
    type: Number,
    default:0
  },
})

const tourModel = mongoose.model('Tour',tourShema)
export default tourModel