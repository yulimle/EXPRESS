const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const mainRouter = require('./routes'); // index파일 생략 가능
const userRouter = require('./routes/users');
const boardRouter = require('./routes/board');

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/board', boardRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
});

// 문제가 있을때 서버를 키면 안되기 때문에 서버 키는 것은 제일 하단에 위치
app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 실행 중입니다.`);
});
