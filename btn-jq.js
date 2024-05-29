function btnController() {
    $('.drop').toggleClass('active');
    $('.overlay').toggleClass('active');
}

function removeActive() {
    $('.drop').removeClass('active');
    $('.overlay').removeClass('active');
}

$('.btn').on('click', btnController);
$('.overlay').on('click', removeActive);