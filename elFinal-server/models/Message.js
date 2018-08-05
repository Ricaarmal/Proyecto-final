const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  clientName: String,
  address: String,
  phone: Number,
  quantity:{
    type: Number,
    min: 0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref:'User'
  }
},{
  timestamps:{
    updatedAt: 'updated_at',
    createdAt: 'created_at'
  }
})

module.exports = mongoose.model('Message', messageSchema);
