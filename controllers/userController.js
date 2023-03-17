const connection = require('./dbConnect');

const userDB = {
  // 중복 회원 찾기
  userCheck: (userId, cb) => {
    connection.query(
      `SELECT * FROM mydb.user WHERE USER_ID = '${userId}'`,
      (err, data) => {
        if (err) throw err;
        console.log(data);
        cb(data);
      },
    );
  },
  // 회원 가입하기
  registerUser: (newUser, cb) => {
    connection.query(
      `INSERT INTO mydb.user (USER_ID, PASSWORD) values ('${newUser.id}','${newUser.password}');`,
      (err, data) => {
        if (err) throw err;
        cb(data);
      },
    );
  },
};
module.exports = userDB;
