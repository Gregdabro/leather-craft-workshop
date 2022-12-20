const express = require("express")
const router = express.Router({ mergeParams: true })
const authMiddleware = require("../middleware/authMiddleware")
const cartController = require("../controllers/cartController")

//CREATE
router.post("/", cartController.create);
//UPDATE
router.put("/:id", cartController.update);
//DELETE
router.delete("/:id", cartController.remove);
//GET USER CART
router.get("/find/:userId", cartController.getOne);
// //GET ALL
router.get("/", cartController.getAll);

module.exports = router;
