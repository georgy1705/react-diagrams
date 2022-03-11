module.exports = (req, res, next) => {
    res.header('Content-Range', 'task1 0-10/10')
    next()
}