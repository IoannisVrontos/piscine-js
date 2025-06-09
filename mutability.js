class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
}

const samePerson = person

const clone1 = new Person('Rick',77,'US')

const clone2 = clone1

person.age++
person.country = 'FR'