$(function () {
    const $question = $(".faq-wrap > ul > li");
    const $answer = $(".answer-wrap");
    const duration = 300;

    $question.on("click", function () {
        $(this).toggleClass("on");
        // 선택자를 기준으로 다른 애들을 on클래스 삭제 시킴
        $(this).siblings().removeClass("on");
        $(this).find($answer).slideToggle(duration);
        $(this).siblings().find($answer).slideUp(duration);
    });
});
