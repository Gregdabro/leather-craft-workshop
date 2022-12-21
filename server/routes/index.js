const express = require("express")
const router = express.Router({ mergeParams: true })

router.use("/auth", require("./auth.routes"))
router.use("/comment", require("./comment.routes"))
router.use("/product", require("./product.routes"))
router.use("/category", require("./category.routes"))
router.use("/color", require("./color.routes"))
router.use("/cart", require("./cart.routes"))
router.use("/cart-item", require("./cart.item.routes"))
router.use("/order", require("./order.routes"))

module.exports = router
