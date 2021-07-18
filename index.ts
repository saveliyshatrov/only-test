import { groupBy } from "./groupBy";


let res_1 = groupBy([1.2, 1.1, 2.3, 0.4], Math.floor);
let result_1 = {
  "0": [0.4],
  "1": [1.2, 1.1],
  "2": [2.3],
};

// complecated
let res_2 = groupBy(["one", "two", "three"], (el: any) => el.length);
let result_2 = {
  "3": ["one", "two"],
  "5": ["three"],
};

// types
enum Gender {
  Male,
  Female
}

let res_3 = groupBy(
  [
    { g: Gender.Male, n: "A" },
    { g: Gender.Female, n: "B" },
    { g: Gender.Female, n: "C" },
  ],
  (el: any) => el.g
);
let result_3 = {
  [Gender.Male]: [{ g: Gender.Male, n: "A" }],
  [Gender.Female]: [
    { g: Gender.Female, n: "B" },
    { g: Gender.Female, n: "C" },
  ],
};

//Простое тестирование
console.log('Рузультат 1:', JSON.stringify(res_1) === JSON.stringify(result_1))
console.log('Рузультат 2:', JSON.stringify(res_2) === JSON.stringify(result_2))
console.log('Рузультат 3:', JSON.stringify(res_3) === JSON.stringify(result_3))