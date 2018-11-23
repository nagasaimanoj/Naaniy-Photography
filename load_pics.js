let load_photos = () => {
    let folder = 'photos/';

    $.ajax({
        url: folder,
        success: (data) => {
            let i = 0;
            $(data).find('a').attr('href', (i, val) => {
                if (val.match(/\.(jpe?g|png|gif)$/)) {
                    let col = '#col' + (i % 4);

                    val = "'" + val + "'";

                    $(col).append('<img onclick="load_image(' + val + ')" src=' + val + ' >');

                    i++;
                }
            });
        }
    });
}


let load_image = (url) => {
    $('#image_viewer').attr('src', url);

    $('#myModal').css('display', 'block');
}


let close_full = () => {
    $('#myModal').css('display', 'none');
}


$(load_photos);
