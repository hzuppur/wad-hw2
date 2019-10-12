var courses = [
    new Course("Algorithms and data structures", 3, 89),
    new Course("Web application development", 3, 40),
    new Course("Probability theory", 2, 70),
    new Course("Object oriented programming", 2, 95)
];

var width = $(window).width();
var duration = 200;

$(document).ready(() => {
    $("#courses-container").css("margin-left", -width).css("margin-right", width);

    $("#profile-button").click(() => {
        $("#courses-container")
            .animate({marginLeft: width, marginRight: -width}, {
                duration: duration, queue: false, complete: () => {
                    $("#courses-container").removeClass("active").css("margin-left", -width).css("margin-right", width);
                    console.log("hi");
                    $("#profile-container").addClass("active").animate({
                        marginLeft: 0,
                        marginRight: 0
                    }, {duration: duration, queue: false});
                }
            });
        $("#courses-button").removeClass("active");
        $("#profile-button").addClass("active");
    });

    $("#courses-button").click(() => {
        $("#profile-container")
            .animate({marginLeft: width, marginRight: -width}, {
                duration: duration, queue: false, complete: () => {
                    $("#profile-container").removeClass("active").css("margin-left", -width).css("margin-right", width);
                    console.log("hi");
                    $("#courses-container").addClass("active").animate({
                        marginLeft: 0,
                        marginRight: 0
                    }, {duration: duration, queue: false});
                }
            });

        $("#profile-button").removeClass("active");
        $("#courses-button").addClass("active");
    });
});