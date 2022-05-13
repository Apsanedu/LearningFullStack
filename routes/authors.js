const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})
// New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new')
})

//For creating author
router.post('/', (req, res) => {
    res.send('Create')
})
module.exports = router