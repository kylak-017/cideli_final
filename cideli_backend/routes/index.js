const express = require('express');
const router = express.Router();

//api routing
router.use('/api/user', require('./user'))

router.post('/login', async (req, res)=> {
  res.send({'result': 'Login Successful'})
})


module.exports = router;
