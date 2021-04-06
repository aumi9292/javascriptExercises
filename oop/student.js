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

let foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();