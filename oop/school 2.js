const createStudent = require("./student.js");

const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th']

let school = {
  students: [],
  addStudent(name, grade) {
    if (VALID_YEARS.includes(grade)) {
      this.students.push({name, grade});
      return {name, grade};
    } else {
      console.log('WRONG');
    }
  },
  enrollStudent(student, course) {
    student.addCourse(course);
  },
  addGrade(student, course, grade) {
    student.courses.find(cs => cs.name === course.name).grade = grade;
  },
  getReportCard(course) {
    let selected = this.students.map(st => st.courses);
    selected.forEach 
  },
  courseReport() {

  },

}