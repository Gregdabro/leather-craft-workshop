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
    ]
}, {
    timestamps: true
})

module.exports = model("Cart", schema)
