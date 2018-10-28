function load_images() {
    var folder = 'photos/';

    $.ajax({
        url: folder,
        success: function (data) {
            var i = 0;
            $(data).find('a').attr('href', function (i, val) {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    var col = '#col' + (i % 4);

                    $(col).append('<img class="each_img" src="' + val + '" >');

                    i++;
                }
            });
        }
    });
}

function load_model() {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');

    $('.each_img').click(
        function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
        }
    );

    $('.close').click(
        function () {
            modal.style.display = 'none';
        }
    );
}

$(
    function () {
        load_images();

        load_model();
    }
);
