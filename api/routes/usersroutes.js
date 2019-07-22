const userDb = require("../models/authmodel");
const bucketDb = require("../models/bucketitemmodel");
const friendsDb = require("../models/friendsmodel");

const express = require("express");

const router = express.Router();

router.get("/user/friends", (req, res) => {
  friendsDb
    .getFriends(req.user.id)
    .then(response => {
      if (response.length > 0) 
        res.status(200).json({ friends: response });
      else 
        res.status(404).json({ message: "No friends found" });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

router.post("/user/friends/:friend_id", (req, res) => {
  if (req.user.id == req.params.friend_id){
    res.status(403).json({ message: "Can not be friends with yourself.  Go find some." });
    return;
  }

  friendsDb
    .createFriend(req.user.id, req.params.friend_id)
    .then(response => {
      if (response.exists)
        res
          .status(400)
          .json({ message: "Already friends, find some new ones." });
      else if (response.bad_user)
        res.status(400).json({ error: "User ID is invalid." });
      else if (response.bad_friend)
        res.status(400).json({ error: "Friend ID is invalid." });
      else res.status(200).json({ message: "Friendship created" });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

router.delete("/user/friends/:friend_id", (req, res) => {
    friendsDb
      .deleteFriend(req.user.id, req.params.friend_id)
      .then(response => {
        if (response === 0)
            res.status(404).json({ message: "Friendship not found" });
        else
            res.status(200).json({ message: "Unfriended" });
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
  });
  
  // Get user currently logged in
router.get("/user", (req, res) => {
  userDb
    .getUserByEmail(req.user.email)
    .then(response => {
      if (response) res.status(200).json({ user: response });
      else res.status(404).json({ message: "User not found" });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Get all users
router.get("/users", (req, res) => {
  userDb
    .getUsers()
    .then(response => {
      if (response.length > 0) res.status(200).json({ users: response });
      else res.status(404).json({ message: "Not found" });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/user/:id", (req, res) => {
  userDb
    .getUserById(req.params.id)
    .then(response => {
      if (response) res.status(200).json({ user: response });
      else res.status(404).json({ message: "Not found" });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});



// Get all users bucket list items
router.get("/user/:user_id/items", (req, res) => {
  bucketDb
    .getBucketItemByUserId(req.params.user_id)
    .then(response => {
      if (response) res.status(200).json({ items: response });
      else res.status(404).json({ message: "No items for user found" });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

module.exports = router;
