$(function () {
    const $dim = $(".dim");
    const $videoWrap = $(".video-wrap");
    const $video = $videoWrap.find(".video iframe");
    const $caption = $(".caption");
    const $btnClose = $(".btn-close");
    const $videoItem = $(".video-list li");

    $videoItem.on("click", function () {
        const videoLink = $(this).attr("data-link");
        console.log(videoLink);

        $video.attr("src", videoLink);

        $dim.fadeIn();
        $videoWrap.addClass("active");
    });

    $($btnClose).on("click", function () {
        $dim.fadeOut();
        $videoWrap.removeClass("active");
    });

    // setTimeout(function () {
    //     $dim.fadeIn();
    //     $videoWrap.addClass("active");
    // }, 3000);
});
