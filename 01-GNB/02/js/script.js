$(function () {
    const $header = $("header");
    const $menu = $(".gnb > li");
    const $submenu = $(".submenu");
    const duration = 300;
    const $window = $(window);

    // GNB
    $menu.on("mouseenter", function () {
        $(this).addClass("on");
        $header.addClass("active");
        $submenu.stop().slideDown(duration);
    });
    $menu.on("mouseleave", function () {
        $(this).removeClass("on");
        $header.removeClass("active");
        $submenu.stop().slideUp(duration);
    });
    // 마우스 휠을 조작했을 때
    $window.on("wheel", function (e) {
        console.log(e);
        if (e.originalEvent.wheelData > 0) {
            // 휠 올림
            $header.removeClass("hide");
        } else {
            // 휠 내림
            $header.addClass("hide");
        }
    });
});
