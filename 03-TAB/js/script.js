$(function () {
    // 대상을 변수에 저장
    const $tabMenu = $(".tab-menu > li");
    const $tabCon = $(".tab-con-item");
    const bgColor = ["red", "green", "blue"];

    console.log($tabMenu, $tabCon);
    tabAction(0);

    $tabMenu.on("click", function (e) {
        e.preventDefault();

        const tabIdx = $(this).index();
        tabAction(tabIdx);
    });
    function tabAction(index) {
        $tabCon.hide();
        $tabMenu.removeClass("on");
        $tabMenu.eq(index).addClass("on");
        $tabCon.eq(index).show();
        $("body").css({
            backgroundColor: bgColor[index],
        });
    }
});
