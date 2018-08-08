function load_images() {
    var folder = "pics_for_site/";

    $.ajax({
        url: folder,
        success: function (data) {
            var i = 0;
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    switch (i % 4) {
                        case 0:
                            $("#col1").append("<img src='" + val + "'>");
                            break;
                        case 1:
                            $("#col2").append("<img src='" + val + "'>");
                            break;
                        case 2:
                            $("#col3").append("<img src='" + val + "'>");
                            break;
                        case 3:
                            $("#col4").append("<img src='" + val + "'>");
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

    $("body").show();
});