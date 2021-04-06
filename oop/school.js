function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${name} is a ${year} year student`);
    },
    addCourse(course) {
      this.courses.push(course);
    },
    listCourses() {
      console.log(this.courses);
    },
    addNote(code, note) {
      let specified = this.courses.find(course => course.code === code);
      specified.note ? specified.note += `; ${note}` : specified.note = note;
    },
    updateNote(code, note) {
      let specified = this.courses.find(course => course.code === code);
      specified.note = note;
    },
    viewNotes() {
      let coursesWithNotes = this.courses.filter(course => course.note);
      let notes = coursesWithNotes.map(course => `${course.name}: ${course.note}`)
      Object.values(notes).forEach(note => console.log(note));
    },
  };
}

let school = (function() {
  let years = ['1st', '2nd', '3rd', '4th', '5th'];
  let students = [];
  return {
    addStudent(student) {
      if (years.includes(student.year)) {
        students.push(student);
      } else {
        console.log("Invalid Year.");
      }
    },
    enrollStudent(student, course, code) {
      student.addCourse({course, code});
    },
    addGrade(student, course, grade) {
      let who = students.find(st => st === student);
      let what = who.courses.find(crs => crs.name === course.name);
      what.grade = grade;
    },
    getReportCard(student) {
      student.courses.forEach(course => {
        if (course.grade) {
          this.logGrade(course);
        } else  {this.logProgress(course)}
      });
    },
    logGrade(course) {
      console.log(`${course.name}: ${course.grade}`);
    },
    logProgress(course) {
      console.log(`${course.name}: In Progress`);
    },
    courseReport(courseName) {
      let grades = [];
      console.log(`=${courseName} Grades=`);
      students.forEach(({name, courses}) => {
        let selected = courses.find(course => course.name === courseName);
        if (selected && selected.grade) {
          grades.push(selected.grade);
          console.log(`${name}: ${selected.grade}`);
        }
      });
      let avg = this.getCourseAvg(grades);
      console.log(`---\nCourse Average: ${avg}`);
    },
    getCourseAvg(grades) {
      let total = grades.reduce((sum, curr) => sum + curr, 0);
      return Math.round(total / grades.length);
    },
  };
})();

let foo = createStudent('foo', '3rd');
foo.addCourse({ name: 'Math', code: 101, grade: 95, });
foo.addCourse({ name: 'Advanced Math', code: 102, grade: 90, });
foo.addCourse({ name: 'Physics', code: 202, });

let jane = createStudent('jane', '3rd');
jane.addCourse({ name: 'Math', code: 101, grade: 99, });
jane.addCourse({ name: 'Advanced Math', code: 102, grade: 60, });
jane.addCourse({ name: 'Physics', code: 202, grade: 100});

school.addStudent(foo);
school.addStudent(jane);
school.getReportCard(foo);
school.getReportCard(jane);
school.courseReport('Advanced Math');
