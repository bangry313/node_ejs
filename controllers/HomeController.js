
/** 홈페이지 관련 요청 처리 컨트롤러 */
const home = (request, response) => {
    response.status(200);
    response.render("index");
}

module.exports = { home };
