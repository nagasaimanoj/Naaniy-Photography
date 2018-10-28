function full_screen_preview(url) {
    $('html').html('<img style="max-width:100%; max-height:100%; object-fit: none" src="' + url + '" />')
}

function load_images() {
    var folder = "photos/";

    $.ajax({
        url: folder,
        success: function (data) {
            var i = 0;
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    switch (i % 4) {
                        case 0:
                            $("#col1").append("<img onclick=full_screen_preview('" + val + "') src='" + val + "'>");
                            break;
                        case 1:
                            $("#col2").append("<img onclick=full_screen_preview('" + val + "') src='" + val + "'>");
                            break;
                        case 2:
                            $("#col3").append("<img onclick=full_screen_preview('" + val + "') src='" + val + "'>");
                            break;
                        case 3:
                            $("#col4").append("<img onclick=full_screen_preview('" + val + "') src='" + val + "'>");
                            break;
                    }
                    i++;
                }
            });
        }
    });
}

$(document).ready(function () {
    load_images();
});
