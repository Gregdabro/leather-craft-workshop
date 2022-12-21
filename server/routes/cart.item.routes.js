const express = require("express")
const router = express.Router({ mergeParams: true })
const authMiddleware = require("../middleware/authMiddleware")
const cartIemController = require("../controllers/cartItemController")

//CREATE
router.post("/", cartIemController.create);
//UPDATE
router.put("/:id", cartIemController.update);
//DELETE
router.delete("/:id", cartIemController.remove);
//GET USER CART
router.get("/find/:userId", cartIemController.getOne);
// //GET ALL
router.get("/", cartIemController.getAll);

module.exports = router;
