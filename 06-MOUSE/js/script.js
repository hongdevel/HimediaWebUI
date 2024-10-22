$(function () {
    const $window = $(window);
    const $cursor = $(".cursor");

    $window.on("mousemove", function (e) {
        // console.log("x : " + e.pageX + ", y : " + e.pageY);

        // 마우스 x, y 좌표값을 받아서
        const mouseX = e.pageX - 4;
        const mouseY = e.pageY - 2;

        // 가짜 마우스의 left, top 값으로 적용
        $cursor.add(".circle").css({
            left: mouseX,
            top: mouseY,
        });
    });

    // $window.on("mousedown", function () {
    //     $cursor.addClass("click");
    // });
    // $window.on("mouseup", function () {
    //     $cursor.removeClass("click");
    // });
    $window.on("mousedown", () => $cursor.addClass("click"));
    $window.on("mouseup", () => $cursor.removeClass("click"));
});
