type Person = {
  no: number;
  name: string;
  age: number;
  birthday: string;
};

type GroupedPeople = Record<string, { age: number; birthday: string }>;

function getGroupedPeople(people: Person[]): GroupedPeople {
  const result: GroupedPeople = {};
  for (const person of people) {
    result[person.name] = {
      age: person.age,
      birthday: person.birthday,
    };
  }
  return result;
}


const people: Person[] = [
  { no: 1, name: "Alden", age: 24, birthday: "1999.12.12" },
  { no: 2, name: "Briony", age: 32, birthday: "1990.05.10" },
  { no: 3, name: "Cedric", age: 28, birthday: "1995.08.20" },
];


console.log(getGroupedPeople(people));
