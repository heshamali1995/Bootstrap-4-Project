$(document).ready(() => {
    // Get the carousel height
    let windowHeight = $(window).height(),
        upperHeader = $(".upper-head").innerHeight(),
        navHeight = $(".navbar-light").innerHeight();
    $(".bot-head, .carousel-item").height(windowHeight - (upperHeader + navHeight));

    // Switch Between the Featured Buttons
    $(".feat-work .lists .row button").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === "all") {
            $(".feat-work .works .grid img").css("opacity", 1)
        }
        else {
            $(".feat-work .works .grid img").css("opacity", 0.1)
            $($(this).data("class")).css("opacity", 1);
        }
    })
});