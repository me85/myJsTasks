const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

//    Take the school object and create the following methods to
// that object:
// 1. A method called “findPerson” that takes two arguments,
// a type (either a student or teacher), and an id.
// It will return a particular object of that person.

// function findPerson(type, id) {
//   const person = type.find((b) => b.id === id);
//   return person;
// }
// console.log(findPerson(school.teachers, 2));

// 2. method called “assignStudent” that takes two
// arguments, a student’s id and a subject.
// Assign all of the students to the first available teacher who
// teaches that subject and who is not in full capacity. If all of
// the teachers are in full capacity log to the console “Sorry,
// no available teachers left”.

// function assignStudent(id, subject) {
//   school.teachers.forEach((teacher) => {
//     if (teacher.subjects[subject] === subject && teacher.capacityLeft > 0) {
//       const student = students.find((student) => student.id === id);
//       console.log(student);
//       school.teachers.students.push(student);
//       teacher.capacityLeft--;
//       return;
//     } else {
//       console.log("no available teachers left");
//     }
//   });
// }

// assignStudent(12, "history");

// not working
// console.log(school.teachers);

// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that
// subject doesn’t exist in their array of subjects

function assignTeachersSubject(id, newSubject) {
  for (let index = 0; index < school.teachers.length; index++) {
    if (school.teachers.id === id) {
      let teacher = school.teachers[index];
      console.log(teacher);
    }
    if (school.teachers.subjects?? === undefined) {
      teacher.subjects.push(newSubject);
    } else {
      console.log(" there is such subject allready");
    }
  }

  console.log(school.teachers);
}

assignTeachersSubject(1, "google");

// not working
