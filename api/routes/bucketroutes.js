const bucketDb = require("../models/bucketitemmodel")
const bucketPostDb = require("../models/bucketitempostmodel")
const bucketPostImageDb = require("../models/bucketitempostimagemodel")
const express = require("express")

const router = express.Router()

router.get("/item/:id", (req, res) => {
  bucketDb
    .getBucketItemById(req.params.id)
    .then(response => {
      if (response) res.status(200).json({ item: response })
      else res.status(404).json({ message: "Bucket item not found" })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.post("/item", (req, res) => {
  bucketDb
    .createBucketItem(req.body)
    .then(response => {
      res.status(200).json({ id: response })
    })
    .catch(({ message }) => {
      res.status(500).json({ message })
    })
})

router.put("/item/:id", (req, res) => {
  bucketDb
    .updateBucketItem(req.params.id, req.body)
    .then(response => {
      res.status(200).json({ id: response })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.delete("/item/:id", (req, res) => {
  bucketDb
    .deleteBucketItem(req.params.id)
    .then(response => {
      res.status(200).json({ message: `deleted id ${req.params.id}` })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.get("/item/:item_id/posts", (req, res) => {
  bucketPostDb
    .getBucketItemPostByItemId(req.params.item_id)
    .then(response => {
      if (response) res.status(200).json({ posts: response })
      else res.status(404).json({ message: "No posts for this item found" })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.get("/item/post/:id", (req, res) => {
  bucketPostDb
    .getBucketItemPostById(req.params.id)
    .then(response => {
      if (response) res.status(200).json({ post: response })
      else res.status(404).json({ message: "Post not found" })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.post("/item/post", (req, res) => {
  bucketPostDb
    .createBucketItemPost(req.body)
    .then(response => {
      res.status(200).json({ id: response })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.put("/item/post/:id", (req, res) => {
  bucketPostDb
    .updateBucketItemPost(req.params.id, req.body)
    .then(response => {
      res.status(200).json({ id: response })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.delete("/item/post/:id", (req, res) => {
  bucketPostDb
    .deleteBucketItemPost(req.params.id)
    .then(response => {
      res.status(200).json({ message: `deleted id ${req.params.id}` })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.get("/item/post/:post_id/images", (req, res) => {
  bucketPostImageDb
    .getBucketItemPostImageByPostId(req.params.post_id)
    .then(response => {
      if (response) res.status(200).json({ images: response })
      else res.status(404).json({ message: "No images for this post found" })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.get("/item/post/image/:id", (req, res) => {
  bucketPostImageDb
    .getBucketItemPostImageById(req.params.id)
    .then(response => {
      if (response) res.status(200).json({ image: response })
      else res.status(404).json({ message: "Image not found" })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.post("/item/post/image", (req, res) => {
  bucketPostImageDb
    .createBucketItemPostImage(req.body)
    .then(response => {
      res.status(200).json({ id: response })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.put("/item/post/image/:id", (req, res) => {
  bucketPostImageDb
    .updateBucketItemPostImage(req.params.id, req.body)
    .then(response => {
      res.status(200).json({ id: response })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

router.delete("/item/post/image/:id", (req, res) => {
  bucketPostImageDb
    .deleteBucketItemPostImage(req.params.id)
    .then(response => {
      res.status(200).json({ message: `deleted id ${req.params.id}` })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

module.exports = router
