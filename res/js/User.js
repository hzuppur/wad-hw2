class User {
  constructor(firstname, lastname, birthdate, faculty, gpa=null) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthdate = birthdate;
    this.faculty = faculty;
    this.gpa = gpa | 0;
    this.courses = [];
  }
  add_courses(courses){
    this.courses = this.courses.concat(courses);
    this.calculate_gpa()
  }
  calculate_gpa(){
    this.gpa = this.courses.reduce(function(total, c){
      return total + (c.grade > 60 ? Math.floor((c.grade-51)/10) : c.grade > 50 ? 0.5 : 0)
    }, 0)/this.courses.length;
    return this.gpa
  }
}
