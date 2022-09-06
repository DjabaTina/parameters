const router = require("express").Router;
const {
  getPosts,
  updatePost,
  createPost,
  deletePost,
  getPost,
} = require("../controllers/posts.controller");

const postRouter = router();

postRouter.route("/").post(createPost).get(getPosts);
postRouter.route("/:postId/:userId/:key").get(getPost).patch(updatePost).delete(deletePost);

module.exports = postRouter;
