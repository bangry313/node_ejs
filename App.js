const path = require("path");
const express = require("express");
const dbConnect = require("./config/DBConnect");
const app = express();
const port = 3000;

// 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 익스프레스에 내장된 미들웨어인 express.static() 함수를 이용하여
// 정적파일(html, css, js 등)들이 어디에 있는지 알려준다.
app.use(express.static("./public"));

// 바디파서 미들웨어 등록
app.use(express.json());
app.use(express.urlencoded());

// 라우터 미들웨어 등록
app.use("/", require("./routes/HomeRoute"));
app.use("/contact", require("./routes/ContactRoute"));

// MongoDB 연결
const connection = dbConnect();

// app.get("/", (request, response) => {
//     response.status(200);
//     // response.send("<h1>Hello Express!</h1>");
//     // const filePath = path.join(__dirname, "./public", "index.html");
//     // response.sendFile(filePath);
//     response.render("index");
// });




app.listen(port, () => {
    console.log(`${port}번 포트에서 웹 서버 실행 중...`);
});



