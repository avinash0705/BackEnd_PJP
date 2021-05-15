const mongoose = require('mongoose');
const ProductModel = require('./Product.model');


const inventorySchema = new mongoose.Schema({
    status: {
      type: String,
      allowNull : true,
      enum: {
        values: ["active","deleted"],
        message: '{VALUE} is not supported'
      },
      default : "active"
    },
    name: {
      type: String,
      allowNull: true
    },
    type: {
      type: String,
      required: true
    }
  });

  const InventoryModel = mongoose.model('Inventory', inventorySchema);
  module.exports = InventoryModel;