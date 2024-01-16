import express from "express";
import {
  getAllPosts,
  getUserPosts,
  likePost,
  deletePost,
  updatePost,
  editPost,
} from "../controllers/postsController.js";
import { verifyToken } from "../middeware/requireAuth.js";

const router = express.Router();

// read
router.get("/", verifyToken, getAllPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// update post
router.get("/edit/:id", verifyToken, editPost);
// router.patch("/:id", verifyToken, updatePost);

// update like
router.patch("/:id/like", verifyToken, likePost);

// delete posts
router.delete("/:id", verifyToken, deletePost);

export default router;
