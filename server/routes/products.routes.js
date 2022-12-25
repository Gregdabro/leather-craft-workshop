const express = require("express")
const router = express.Router({ mergeParams: true })
const productController = require("../controllers/productController")
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware")

router.post("/", productController.create)
router.patch("/:productId", productController.update)
router.delete("/:productId", productController.remove)
router.get("/",  productController.getAll)
router.get("/:id",productController.getOne)

module.exports = router
