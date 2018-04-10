import mongoose from 'mongoose';

var ProductSchema = mongoose.Schema({
  name: String,
  budget: String,
  status: String,
  description: String,
},
{
  timestamps: true
});

export default mongoose.model('Product', ProductSchema);
