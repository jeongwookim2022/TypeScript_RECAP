class Person {
  static instanceId: number = 0;
  name: string;
  id: number;
  constructor(nameInput: string) {
    Person.instanceId++;
    this.id = Person.instanceId;
    this.name = nameInput;
  }
}

let person1 = new Person("Kim");
let person2 = new Person("Lee");

console.log(person1.id, person2.id);

// Q1
class Car {
  model: string;
  price: number;
  tax: () => number;

  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
    this.tax = function () {
      return this.price / 10;
    };
  }

  tax2(): number {
    return this.price / 10;
  }
}

let car1 = new Car("Volvo", 5000);
console.log(car1);
console.log(car1.tax());
console.log(car1.tax2());

// Q2
class Word {
  args: (string | number)[];
  num: number[];
  str: string[];
  constructor(...params: (string | number)[]) {
    this.args = params;
    this.num = [];
    this.str = [];

    this.args.forEach((param) => {
      if (typeof param == "string") this.str.push(param);
      else this.num.push(param);
    });
  }
}

let wordObj = new Word(1, "Sky", "Hi", 5, 6, 7);
console.log(wordObj.str);
console.log(wordObj.num);
