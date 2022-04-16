class Person {
  constructor(age, name) {
    this.age = age
    this.name = name
  }

  nextYear() {
    return this.age += 1
  }

}

const newPerson = new Person(20, "Alex")
console.log(newPerson);

newPerson.nextYear()

console.log(newPerson);
