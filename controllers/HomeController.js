
/** 홈페이지 관련 요청 처리 컨트롤러 */
const home = (request, response) => {
    const message = "안녕하세요";
    response.status(200);
    response.render("index", {message: message});
}

module.exports = { home };
