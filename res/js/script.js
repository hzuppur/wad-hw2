var guy = new User('John', 'Doe', '11/10/1990', 'Software Engineering');

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
    courses = [
        new Course("Algorithms and data structures", 3, 89),
        new Course("Web application development", 3, 40),
        new Course("Object oriented programming", 2, 95),
        new Course("Underwater Basket Weaving", 3, 19)
    ];
    guy.add_courses(courses);
    courses.map(c => add_course_to_page(c));
    $("#gpa > strong").text(`${guy.gpa}`);
    $("#name").text(`${guy.firstname} ${guy.lastname}`);
    $("#birthdate").text(guy.birthdate);
    $("#faculty").text(guy.faculty);

    $("#courses-container").css("margin-left", -width).css("margin-right", width);

    $("#profile-button").click(() => {
        $("#courses-container")
            .animate({marginLeft: width, marginRight: -width}, {
                duration: duration, queue: false, complete: () => {
                    $("#courses-container").removeClass("active").css("margin-left", -width).css("margin-right", width);
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
    $("#cancel-course").click(() => {
        $("#add-course > input").val("");
        $("#add-course").addClass("hidden");
    });
    $("#save-course").click(() => {
        c = new Course($("#title").val(), $("#semester").val(), parseInt($("#grade").val()));
        guy.add_courses([c]);
        add_course_to_page(c);
        $("#gpa").text(guy.gpa);
        $("#add-course > input").val("");
        $("#add-course").addClass("hidden");
    })
});