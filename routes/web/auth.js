const User = require("../../models/User");

const router = require("express").Router();

router.get("/login", (req, res) => {
  return res.render("login");
});

router.post("/api/users/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res.render("login", {
        error: "Invalid email or password",
      });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).render("login", {
        error: "Invalid email or password",
      });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.redirect('/dashboard');
      
    });
  } catch (err) {
    res.status(500).render("login", { error: err });
  }
});

router.post("/api/users/logout", (req, res)  => {
 
  // delete session if logging out
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});
module.exports = router;