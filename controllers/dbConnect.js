const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'dkcb3166!',
  port: '3306',
  database: 'mydb',
});

connection.connect();
module.exports = connection;
