const express = require('express') //web 라이브러리
const path = require('path') //현재경로 라이브러리
const morgan = require('morgan')
const nunjucks= require('nunjucks')


const app = express();
const indexRouter = require('./route')
const usersRouter = require('./route/users')
// const commentsRouter = require('./route/comments')
app.set('port',process.env.PORT || 3001);
app.set('view engine','html')
nunjucks.configure('view',{
    express : app,
    watch : true
})
app.use('/',indexRouter);
app.use('/users',usersRouter);
// app.use('/comments',commentsRouter);

app.use(morgan('dev')) //개발 시에 로그 확인하는 라이브러리 (터미널에 뜨는것)
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())


app.use(express.urlencoded({extended:false}))
app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 서버 시작')
})
