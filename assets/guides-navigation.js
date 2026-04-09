document.addEventListener("DOMContentLoaded",
    function () {
        $("a.guides_navigation-a").click(function () { $(".guides_navigation-ul").hasClass("open") ? ($("a.guides_navigation-a").html("open"), $(".guides_navigation-ul").removeClass("open")) : ($("a.guides_navigation-a").html("hide"), $(".guides_navigation-ul").addClass("open")) });
    }
)