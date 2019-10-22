$(document).ready(function () {

    /**
     * Sets copyright date in footer to current year
     */
    let date = new Date();
    $('#copyright-year').text('2008 - ' + date.getFullYear())

    /**
     * Changes direction of chevron when clicked
     */
    $('.chevron').click(function () {
        if ($('.chevron').hasClass('fa-chevron-down')) {
            $('.chevron').addClass('fa-chevron-up').removeClass('fa-chevron-down')
        } else {
            $('.chevron').addClass('fa-chevron-down').removeClass('fa-chevron-up')
        }

    })

    /**
     * Updates main listing image with src url from thumbnails when clicked.
     * Credit for replace() code: https://stackoverflow.com/questions/8809876/can-i-get-divs-background-image-url
     */
    $('.listing-img-thumbnail').click(function() {
        url = $(this).css('background-image').replace(/^url\(['"]?/,'').replace(/['"]?\)$/,'');
        $('#main-listing-img').attr("src", url);
    })

});