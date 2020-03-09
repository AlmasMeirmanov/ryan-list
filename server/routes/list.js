const express = require("express")
const router = express.Router()
const conn = require("../db")

router.get("/categories", (req, res, next) => {
  const sql = `SELECT * FROM categories`
  //parent cats
  //find sub cats that have the same parent id that matches parent_id
  conn.query(sql, (err, results, fields) => {
    const categories = results
      .filter(cat => cat.parent_id == null)
      .map(parent => {
        return {
          ...parent,
          sub: results.filter(subcat => subcat.parent_id == parent.id)
        }
      })

    res.json(categories)
  })
})

router.post("/post", (req, res, next) => {
  const sql = `INSERT * INTO post`
  const posting_title = req.body.posting_title
  const description = req.body.description
  conn.query(sql, (err, results, fields) => {
    const data = results
  })

  res.json()
})
module.exports = router
