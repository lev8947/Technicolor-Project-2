const User = require("../../models/user");
const Goals = require("../../models/goals");
const withAuth = require("../../utils/auth");
const { response } = require("express");
const router = require("express").Router();

router.get("/login", (req, res) => {
  return res.render("login");
});

router.post("/users/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log(userData);
    if (!userData) {
      res.render("login", {
        message: "Invalid email or password",
      });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res.status(400).render("login", {
        message: "Invalid email or password",
      });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log("SESSION" + req.session.user_id);
      res.json({userData, message: "You are logged in"})
      // res.redirect('/dashboard');

    });
  } catch (err) {
    res.status(500).render("login", { error: err });
  }
});

router.post("/users/logout", (req, res) => {

  // delete session if logging out
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/user/goals", async (req, res) => {
  try {
    const createdGoal = await Goals.create(
      {
        user_id: req.session.user_id,
        goal1: req.body.goal1,
        goal2: req.body.goal2,
        goal3: req.body.goal3,
      }
    );
    if (!createdGoal) {
      console.log(createdGoal);
    } else {
      res.status(300).redirect('/dashboard');
    }
  }
  catch
  {
    res.status(500).json({ Error: "error" });
  }
})

router.get('/dashboard', withAuth, async (req, res) => {
  await Goals.findOne({
    where: {
      user_id: req.session.user_id
    }
  }).then((goals) => {
    return res.json(goals);
  });
});

router.put('/dashboard/:id', async (req, res) => {
  await Goals.update(
    req.body, 
    {
    where: {
      id: req.params.id
    }
  }
  ).then((goals) => {
    // console.log(res.json(goals))
    return res.json(goals);
  });
});

router.get('/dashboard/:id', async (req, res) => {
  await Goals.findOne( 
    {
    where: {
      id: req.params.id
    }
  }
  ).then((goals) => {
    // console.log(res.json(goals))
    return res.json(goals);
  });
});

module.exports = router;