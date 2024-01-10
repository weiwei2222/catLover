import express from "express";
import requireAuth from "../middeware/requireAuth.js";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/usersController.js";

import { signup, login } from "../controllers/authController.js";

const router = express.Router();

router.use(requireAuth);

router.post("/login", login);

router.post("/signup", signup);

/* READ */
router.get("/:id", getUser);
router.get("/:id/friends", getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", addRemoveFriend);

export default router;
