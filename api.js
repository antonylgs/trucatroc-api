const express = require("express");
const Post = require("./models/post");
const Offer = require("./models/offer");
const User = require("./models/user");

const router = express.Router();

// POST query to create a new post
router.post("/post", async (req, res) => {
  try {
    const newItem = new Post(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET query to get all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET query to get a post by its id
router.post("/user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET query to get all users
router.get("/users", async (req, res) => {
  try {
    const posts = await User.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET query to get a user by its id
router.get("/user/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User non trouvé" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET query to get a post by its id
router.get("/post/:id", async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post non trouvé" });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST query to create a new offer on a post and add it to the post offersId list
router.post("/offer", async (req, res) => {
  const { name, desciption, pictures, opened, userId, postId } = req.body;

  try {
    const newOffer = new Offer({ name, userId, postId });
    await newOffer.save();

    // Update of the post offersId list with the new offer id
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post non trouvé" });
    }
    post.offersId.push(newOffer._id);
    await post.save();

    res.json(newOffer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
