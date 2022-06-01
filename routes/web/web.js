const router = require('express').Router();
const { User, Goals } = require('../../models')
const withAuth = require('../web/auth');

router.get('/', (req,res) =>{

    // TODO check if user is logged in
    res.render('map', {
        logged_in: req.session.logged_in,

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

router.get('/users/country', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: ['country_name'],
    });
    const countries = userData.map((item) => item.get({ plain: true }));

    const userCountry = [
      ['Country', 'EnviroHubbers'],
    ];
    countries.forEach(ct => {
      userCountry.push([ct.country_name, 1]);
  });
    res.status(200).json(userCountry);
  }
  catch {
    res.status(500).json({ error: "Error Message" });
  }
});

router.post('/users/signup', async (req, res) => {
    try {
      // create new entry in user table
      const userData = await User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        country_name: req.body.country_name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age
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
    console.log(req.session);
    const model = (await User.findByPk(req.session.user_id,{
          include: [
            {
              model: Goals,
              
            },
          ],
    }))
    console.log(model);
    const modelObj = model.get({plain:true});
    // const userDash = modelObj.goals.map((post) => post.get({ plain: true }));

    console.log(modelObj);
    res.render('dashboard', {
        logged_in: req.session.logged_in,
        goals: modelObj.goals,

    })

});
module.exports = router;