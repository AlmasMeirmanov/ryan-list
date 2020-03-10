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
router.get("/category/:id", (req, res, next) => {
  const id = req.params.id
  const sql =
    "SELECT p.id, p.name, p.posting, p.time_created FROM posts p LEFT JOIN categories c ON p.category_id = c.parent.id WHERE c.id = ?"

  conn.query(
    "SELECT name FROM categories WHERE id = ?",
    [id],
    (err1, results1, fields1) => {
      conn.query(sql, [id], (err, results, fields) => {
        const categoryName = results1[0].name
        res.json({
          catName: categoryName,
          post: results
        })
      })
    }
  )
})

// router.post("/post", (req, res, next) => {
//   const sql = `INSERT * INTO post`
//   const posting = req.body.posting
//   const description = req.body.description
//   conn.query(sql, (err, results, fields) => {
//     const data = results
//   })

//   res.json()
// })
module.exports = router
