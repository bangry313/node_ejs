const mongoose = require("mongoose");

// 스키마 생성
const contactSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, },
        phone: { type: String, required: [true, "전화번호는 필수 입력항목입니다."], }
    },
    // 옵션 설정
    {
        // 데이터베이스에 연락처 자료를 추가하거나 수정하면 시간이 자동으로 기록된다.
        timestamps: true,
    }
);

// 생성된 스키마를 이용해서 Contact 모델 생성
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
// module.exports = mongoose.model("Contact", contactSchema);






