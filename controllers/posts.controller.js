exports.getPosts = (req, res) => {
  res.status(200).send(`Get All Posts filtered by "${req.query.title}"`);
};

exports.getPost = (req, res) => {
  res.status(200).send("Get Single Post");
};

exports.createPost = (req, res) => {
  res.status(200).send("Create post");
};

exports.updatePost = (req, res) => {
  res.status(201).send("Delate a Post ${req,params.postId} has been updated successfully.");
};

exports.deletePost = (req, res) => {
  res
    .status(200)
    .send("Delate a Post ${req,params.postId} has been deleted successfully.");
};

exports.deletePost = (req, res) => {};
