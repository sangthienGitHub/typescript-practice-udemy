const add = (a: number, b: number): number => {
  return a + b;
};

const joinStrings = (a: string, b: string): string => {
  return a + b;
};

// interface and function

interface Post {
  title: string;
  daysOld: number;
  published: boolean;
}

const post = {
  title: "Typescript news",
  daysOld: 10,
  published: true,
};

const printPost = (postToPrint: Post) => {
  return `${postToPrint.title} (${postToPrint.daysOld} days old)`;
};

printPost(post);

//classes and properties
class Car {
  color: string;
  year: number;

  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }

  drive() {
    console.log("Vroom");
  }
}

const myCar = new Car("red", 2000);
myCar.drive();

console.log(myCar.color, myCar.year);
