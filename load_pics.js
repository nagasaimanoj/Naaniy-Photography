let load_images = () => {
    let folder = 'photos/';

    $.ajax({
        url: folder,
        success: (data) => {
            let i = 0;
            $(data).find('a').attr('href', (i, val) => {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    let col = '#col' + (i % 4);

                    $(col).append('<img class="each_img" src="' + val + '" >');

                    i++;
                }
            });
        }
    });
}

let load_model = () => {
    $('.each_img').click(
        () => {
            $('#myModal').css('display', 'block');
            $('#img01').attr('src', this.src);
        }
    );

    $('.close').click(
        () => {
            $('#myModal').css('display', 'none');
        }
    );
}

$(
    () => {
        load_images();

        load_model();
    }
);
