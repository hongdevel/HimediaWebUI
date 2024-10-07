$(function () {
    // 대상을 변수에 저장
    const $tabMenu = $(".tab-menu > li");
    const $tabCon = $(".tab-con-item");

    console.log($tabMenu, $tabCon);

    $tabMenu.removeClass("on");
    $tabMenu.eq(0).addClass("on");

    $tabCon.hide();
    $tabCon.eq(0).show();

    $tabMenu.on("click", function (e) {
        e.preventDefault();

        const tabIdx = $(this).index();
        console.log(tabIdx);
        $tabCon.hide();
        $tabMenu.removeClass("on");
        $tabMenu.eq(tabIdx).addClass("on");
        $tabCon.eq(tabIdx).show();
    });
});
