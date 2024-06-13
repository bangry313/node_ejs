
/** 연락처 관련 요청 처리 컨트롤러 */

// Database Model 가져오기
const Contact = require("../models/ContactModel");

// 모든 연락처 목록 요청 처리
const getContacts = async (request, response) => {
    try {
        // 모델을 이용하여 몽고DB > 데이터베이스(fullstack) > 컬렉션(contacts)에서
        // 모든 도큐먼트 조회
        const contacts = await Contact.find().sort({createdAt: -1});
        // response.status(200).send(contacts); // JSON 전송
        // ejs 템플릿 엔진을 이용한 ejs 템플릿 파일 렌더링
        // response.render("list");
        response.render("./contact/list", { contacts: contacts });
        
    } catch (error) {
        response.send(error.message);
    }
}

// 연락처 상세 조회 요청 처리
const getContact = async (request, response) => {
    try {
        // 도큐먼트의 아이디로 연락처 조회
        const contact = await Contact.findById(request.params.id);
        response.render("./contact/view", {contact : contact});
    } catch (error) {
        response.send(error.message);
    }
}

// 연락처 등록 화면 요청 처리
const registerForm = (request, response) => {
    response.render("./contact/registerForm");
}

// 연락처 등록 요청 처리
const registerContact = async (request, response) => {
    try {
        console.log(request.body);
        const { name, email, phone } = request.body;
        if (!name || !email || !phone) {
            response.status(400).send("필수 항목이 입력되지 않았습니다.");
        }
        // 컬렉션에 새로운 도큐먼트 추가
        const contact = await Contact.create({ name, email, phone });
        // console.log(`새 연락처 등록 완료: ${contact}`);
        // response.status(201).send(`${name}님 새 연락처에 추가하였습니다!`);
        response.redirect("/contact");
    } catch (error) {
        response.send(error.message);
    }
}



// 연락처 수정 화면 요청 처리
const editForm = async (request, response) => {
    const contact = await Contact.findById(request.params.id);
    response.render("./contact/editForm", {contact : contact});
}


// 연락처 수정 요청 처리
const editContact = async (request, response) => {
    try {
        const id = request.params.id;
        const {email, phone} = request.body; 
        const updatedContact= await Contact.findByIdAndUpdate(id, {email, phone}, {new: true});
        // response.status(200).send(updatedContact);
        response.redirect("/contact");
    } catch (error) {
        response.send(error.message);
    }
}

// 연락처 삭제 요청 처리
const deleteContact = async (request, response) => {
    try {
        await Contact.findByIdAndDelete(request.params.id);
        //response.status(200).send(`${request.params.id}님 연락처를 삭제하였습니다.`);
        response.redirect("/contact");
    } catch (error) {
        response.send(error.message);
    }
}

module.exports = { getContacts, getContact, registerForm, registerContact, editForm, editContact, deleteContact };

