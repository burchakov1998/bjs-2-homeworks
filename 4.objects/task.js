
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks != undefined) {
    this.marks.push(...marks);
  }
}
Student.prototype.getAverage = function () {
  let sum, result = 0;

  if (this.marks === undefined || this.marks.length === 0) {
    return 0;
  } else {
    
    return this.marks.reduce( ( a, v ) => a + v, 0 ) / this.marks.length;

  }

}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5

