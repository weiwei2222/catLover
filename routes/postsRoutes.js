import express from "express";
import {
  getAllPosts,
  getUserPosts,
  likePost,
} from "../controllers/postsController.js";
import { verifyToken } from "../middeware/requireAuth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getAllPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;
