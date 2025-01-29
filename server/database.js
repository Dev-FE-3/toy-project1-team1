import sqlite3 from "sqlite3";

const databaseName = "toy-project_team-1";
const database = new sqlite3.Database(`./${databaseName}.db`);

database.serialize(() => {
  console.log("Database is created!");
  // 사용자 테이블 생성
  database.run(`
    CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL
    );
  `);
  // 자료게시판 테이블 생성
  database.run(`
    CREATE TABLE IF NOT EXISTS DataBoard (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title VARCHAR(100) NOT NULL,
      content VARCHAR(500) NOT NULL,
      writer VARCHAR(10) NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);
});

export default database;
