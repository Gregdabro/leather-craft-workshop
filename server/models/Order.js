const {Schema, model} = require("mongoose")

const schema = new Schema({
  userId: {type: Schema.Types.ObjectId, required: true,ref: "User"},
  products: [
    {
      productId: { type: Schema.Types.ObjectId, required: true,ref: "Product" },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  amount: {type: Number, required: true},
  address: { type: Object, required: true },
  status: { type: String, default: "pending"}
}, {
  timestamps: true
})

module.exports = model("Order", schema)
