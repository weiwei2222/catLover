import express from "express";
import requireAuth from "../middeware/requireAuth.js";
import {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postsController.js";

const router = express.Router();

router.use(requireAuth);

// get all posts
router.get("/", getAllPosts);

// read
router.get("/:userId/posts", getPost);

// update
router.patch("/:id/like", updatePost);

// post a new post
router.get("/", createPost);

// delete a post
router.delete("/:userId", deletePost);

export default router;
