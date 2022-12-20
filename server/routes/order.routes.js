const express = require("express")
const router = express.Router({ mergeParams: true })
const orderController = require("../controllers/orderController")
const authMiddleware = require("../middleware/authMiddleware")

//CREATE
router.post("/", orderController.create)
//UPDATE
router.put("/:id", orderController.update)
//DELETE
router.delete("/:id", orderController.remove)
//GET USER ORDERS
router.get("/find/:userId", orderController.getOne)
// //GET ALL
router.get("/", orderController.getAll)

module.exports = router;
