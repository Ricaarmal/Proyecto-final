const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  pics:[
    {
    type: String,
    default: "http://estiloambientacion.com.ar/imagenes2/muebles/como-elegir-05b.jpg"
    }
  ]
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});


const Product = mongoose.model('Product', productSchema);
module.exports = Product;