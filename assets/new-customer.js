$('.account_sidebar_profile-button div').on('click', function () {
    $('.account_sidebar_profile-button div').removeClass('active');
    $(this).addClass('active');
    $('.account_main-wrapp_item').removeClass('active');
    var mainid = $(this).attr('id');
    if (mainid === 'orders') {
        $(".breadcrumbs_main").text("Orders");
        $(".account_main-title").text("Orders");
     } else if (mainid === 'credits') {
        $(".breadcrumbs_main").text("Credits");
        $(".account_main-title").text("Credits");
     } else if (mainid === 'profile') {
        $(".breadcrumbs_main").text("Profile");
        $(".account_main-title").text("Profile");
     }
     else {
        $(".breadcrumbs_main").text("");
        $(".account_main-title").text("");
     }
    var mainid_find = ".account_main-wrapp_" + mainid;
    $(mainid_find).addClass('active');
});

$('div#showAll').on('click', function () {
    $(this).parent('.account_main-wrapp_order').toggleClass('active');
});

$(document).ready(function() {
$('input, select').styler();
});