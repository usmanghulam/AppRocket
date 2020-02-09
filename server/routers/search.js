const router = require('express').Router();
const SignUp = require("../MongoDb/Schemas/signUp");

router.post("/",(req,res) => {
  const { search } = req.body;
  SignUp.find({email:{$regex:new RegExp(search)}},{_v:0})
  .then(resp => res.status(200).json(resp))
  .catch(err => res.status(400).json(err))
})


module.exports = router;