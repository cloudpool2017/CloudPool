function tag() {
    var url = '<%= config.url %>/<%= page.path %>';
    $('#article-banner').geopattern(url);
    $('.header').removeClass('fixed-header');

    var tag = location.hash.replace('#', '');
    if (tag) {
        var tagId = "#tag-" + tag;
        $("html, body").animate({
            scrollTop: $(tagId).offset().top
        }, 400);
    }
}