const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();
router.post('/save',(req,res,next)=>{
    console.log('일로옴', req.body);
    res.send('result 입니다');
})

module.exports = router;