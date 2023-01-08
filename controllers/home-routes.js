const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        title: 'Handlebars Docs',
        created_at: new Date(),
        user: {
            username: 'test_user'
        }
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;