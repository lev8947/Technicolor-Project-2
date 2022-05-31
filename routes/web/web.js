const router = require('express').Router();
const { User, Goals } = require('../../models')
const withAuth = require('../web/auth');

router.get('/', (req,res) =>{

    // TODO check if user is logged in
    res.render('map', {
        logged_in: false,

    });
}),

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // This is the withAuth spelled out
    console.log(req.session);
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.post('/api/users/signup', async (req, res) => {
    try {
      // create new entry in user table
      const userData = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        country_name: req.body.country_name,
        email: req.body.email,
        password: req.body.password,
      });
  
      // save user.id and set loggedIn status to true
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.status(200).json(userData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  

  router.get('/dashboard', withAuth, async (req, res) => {

    const model = (await User.findByPk({
        
        where: {
            // use the ID from the session
            user_id: req.session.user_id,
          },
          include: [
            {
              model: Goals,
            },
          ],
    }))
    const userDash = model.map((post) => post.get({ plain: true }));

    console.log(userDash);
    res.render('dashboard', {
        logged_in: req.session.logged_in,
        userDash,

    })

});
module.exports = router;