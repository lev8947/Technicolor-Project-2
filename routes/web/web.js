const router = require('express').Router();
const { User, Goals } = require('../../models')

router.get('/', (req,res) =>{

    // TODO check if user is logged in
    res.render('login', {
        logged_in: false
    });
}),



// // GET all posts for homepage
// router.get('/', async (req, res) => {
//     try {
//         const postData = await Post.findAll({
//             include:[User],
//         });

//         const posts = postData.map((post) =>
//             post.get({ plain: true })    
//         );

//         res.render('home', {
//             posts,
//             logged_in: false,
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

module.exports = router;