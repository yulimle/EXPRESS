const mongoClient = require('./mongoConnect');

// 코드 리팩토링
const UNEXPECTED_MSG =
  '알 수 없는 문제 발생<br><a href="/register">회원가입으로 이동</a>';

const DUPLICATED_MSG =
  '동일한 ID를 가지는 회원이 존재합니다.<br><a href="/register">회원가입으로 이동</a>';
const SUCCESS_MSG = '회원가입 성공!<br><a href="/login">로그인으로 이동</a>';

const LOGIN_UNEXPECTED_MSG =
  '알 수 없는 문제 발생<br><a href="/login">로그인으로 이동</a>';
const LOGIN_NOT_REGISTERED_MSG =
  '입력하신 ID를 가지는 회원이 존재하지 않습니다.<br><a href="/register">회원가입으로 이동</a>';
const LOGIN_WRONG_PASSWORD_MSG =
  '비밀번호가 틀렸습니다.<br><a href="/login">로그인으로 이동</a>';
const registerUser = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const user = client.db('kdt5').collection('user');
    const duplicatedUser = await user.findOne({ id: req.body.id });
    if (duplicatedUser) return res.status(400).send(DUPLICATED_MSG);
    await user.insertOne(req.body);
    res.status(200).send(SUCCESS_MSG); // 원래는 json으로 메세지 보냄, html로 보내려고 send 씀
  } catch (err) {
    console.error(err);
    res.status(500).send(UNEXPECTED_MSG);
  }
};

// 로그인
const loginUser = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const user = client.db('kdt5').collection('user');
    const findUser = await user.findOne({
      id: req.body.id,
    });
    // 아디가 없으면?
    if (!findUser) return res.status(400).send(LOGIN_NOT_REGISTERED_MSG);
    if (findUser.password !== req.body.password)
      return res.status(400).send(LOGIN_WRONG_PASSWORD_MSG);
    // 있으면
    req.session.login = true;
    req.session.userId = req.body.id;
    res.cookie('user', req.body.id, {
      maxAge: 1000 * 30,
      httpOnly: true,
      signed: true, // 암호화
    });
    res.status(200);
    res.redirect('/dbBoard');
  } catch (err) {
    console.error(err);
    res.status(500).send(LOGIN_UNEXPECTED_MSG);
  }
};
module.exports = { registerUser, loginUser };

// const userDB = {
//   // 중복 회원 찾기
//   userCheck: async (userId) => {
//     try {
//       const client = await mongoClient.connect();
//       const user = client.db('kdt5').collection('user');
//       const findUser = await user.findOne({ id: userId });
//       return findUser;
//     } catch (err) {
//       console.error(err);
//     }
//   },

//   // 회원 가입하기
//   registerUser: async (newUser) => {
//     try {
//       const client = await mongoClient.connect();
//       const user = client.db('kdt5').collection('user');
//       await user.insertOne(newUser);
//       return true;
//     } catch (err) {
//       console.error(err);
//     }
//   },
// };
// module.exports = userDB;
