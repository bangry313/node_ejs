const express = require("express");
const router = express.Router();
const { 
    getContacts, 
    getContact,
    registerForm,
    registerContact, 
    editForm, 
    editContact, 
    deleteContact 
} = require("../controllers/ContactController");

// 연락처 목록 요청 라우트
router
.route("/")
.get(getContacts);

// 연락처 상세 요청 라우트
router
.route("/:id")
.get(getContact);

// 연락처 등록 화면 및 등록 요청 라우트
router
    .route("/register")
    .get(registerForm)
    .post(registerContact);

// 연락처 수정 화면 및 수정 요청 라우트
router
    .route("/edit/:id")
    .get(editForm)
    .post(editContact);


// 연락처 삭제 요청 라우트
router
    .route("/delete/:id")
    .get(deleteContact);

module.exports = router;

