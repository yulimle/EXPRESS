const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs'); // 어떤 view engine으로 웹페이지를 그릴 것인지 express에게 알려줌
app.use(express.static('public')); // 브라우저에서 접근이 가능한 폴더의 위치를 지정해 주는 역할 localhost:4000/public/에서 시작
app.use('/uploads', express.static('uploads'));
app.use(cookieParser('lim'));
app.use(
  session({
    secret: 'tetz',
    resave: false,
    saveUninitialized: true,
  }),
);

const mainRouter = require('./routes'); // index파일 생략 가능
const userRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const dbRouter = require('./routes/db');
const dbBoardRouter = require('./routes/dbBoard');
const cookieRouter = require('./routes/cookie');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/board', boardRouter);
app.use('/db', dbRouter);
app.use('/dbBoard', dbBoardRouter);
app.use('/cookie', cookieRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
});

// 문제가 있을때 서버를 키면 안되기 때문에 서버 키는 것은 제일 하단에 위치
app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 실행 중입니다.`);
});
