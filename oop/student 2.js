function createStudent(name, grade) {
  let courses = [];
  return {
    info() {
      console.log(`${name} is a ${grade} year student.`)
    },
    addCourse(course) {
      courses.push(course);
    },
    listCourses() {
      console.log(courses);
    },
    addNote(code, note) {
      let selected = courses.find(course => course.code === code)
      if (!selected['notes']) selected['notes'] = [];
      selected.notes.push(note);
    },
    viewNotes() {
      courses.filter(course => course.notes).forEach(course => 
        console.log(`${course.name}: ${course.notes.join('; ')}`))
    },
    updateNote(code, note) {
      let selected = courses.find(course => course.code === code)
      selected['notes'] = [];
      selected.notes.push(note);
    }
  }
}

// let foo = createStudent('Foo', '1st');
// foo.info();
// foo.listCourses();
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();

module.exports = createStudent;