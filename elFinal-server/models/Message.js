const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  subject: String,
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref:'User'
  },
},{
  timestamps:{
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
})

const message = mongoose.model('Message', messageSchema);
module.exports = message;