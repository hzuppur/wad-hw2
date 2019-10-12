var courses = [
    new Course("Algorithms and data structures", 3, 89),
    new Course("Web application development", 3, 40),
    new Course("Object oriented programming", 2, 95),
    new Course("Underwater Basket Weaving", 3, 19)
];

var width = $(window).width();
var duration = 200;
var courses_count = 0;

function add_course_to_page(c){
    courses_count++;
    $("#course-list").append(`<tr>
                            <td>${courses_count}</td>
                            <td>${c.title}</td>
                            <td>${c.semester}</td>
                            <td>${c.grade}</td>
                        </tr>`);
}

$(document).ready(() => {
    courses.map(c => add_course_to_page(c));

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

    $("#add-course-button").click(() => {
        $("#add-course").hasClass("hidden") ? $("#add-course").removeClass("hidden") : $("#add-course").addClass("hidden");
    });
    $("#save-course").click(() => {
        add_course_to_page(new Course($("#title").val(), $("#semester").val(), $("#grade").val()))
    })
});