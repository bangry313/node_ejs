const express = require("express");
const { home } = require("../controllers/HomeController");
const router = express.Router();

// 홈페이지 요청 라우트
router
.route("/")
.get(home);

module.exports = router;