const router = require('express').Router();

module.exports = router;

router.get('/list', (req, res) => {

    res.send([
        {
            name: '123',
            prince: 100
        }
    ])
})