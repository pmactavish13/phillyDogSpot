$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top + (-100)
            }, 500);
        }
    });
    // Create the dropdown base
    //$("<select />").appendTo("nav");

    // Create default option "Go to..."
    // $("<option />", {
    //     // "selected": "selected",
    //     // "value": "",
    //     // "text": "Go to..."
    // }).appendTo("nav select");

    // Populate dropdown with menu items
    // $("nav a").each(function () {
    //     var el = $(this);
    //     $("<option />", {
    //         "value": el.attr("href"),
    //         "text": el.text()
    //     }).appendTo("nav select");
    // });

    // $("nav select").change(function() {
    //     window.location = $(this).find("option:selected").val();
    //   });
});