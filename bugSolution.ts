function greeter(person: string | string[]): string {
  if (Array.isArray(person)) {
    return `Hello, ${person.join(' ')}!`;
  } else {
    return `Hello, ${person}!`;
  }
}

let user = ["Jane", "Doe"];
console.log(greeter(user)); //This will output 'Hello, Jane Doe!' 
let user2 = "Jane Doe";
console.log(greeter(user2)); //This will output 'Hello, Jane Doe!' 