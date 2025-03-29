// 1. Creating an Object
let person = {
    name: "Sai Kiran", // String property
    age: 25, // Number property
    city: "Hyderabad", // String property
    skills: ["JavaScript", "React", "Node.js"] // Array property
  };
  
  // 2. Accessing Object Properties
  // Using dot notation
  console.log(person.name); // Output: Sai Kiran
  
  // Using bracket notation
  console.log(person["age"]); // Output: 25
  
  // 3. Adding, Updating & Deleting Properties
  // Adding a new property
  person.country = "India";
  
  // Updating an existing property
  person.age = 26;
  
  // Deleting a property
  delete person.city;
  console.log(person); // 'city' will be removed
  
  // 4. Checking for Property Existence
  // Using hasOwnProperty()
  console.log(person.hasOwnProperty("name")); // Output: true
  console.log(person.hasOwnProperty("salary")); // Output: false
  
  // Using 'in' Operator
  console.log("age" in person); // Output: true
  console.log("salary" in person); // Output: false
  
  // 5. Iterating Over an Object
  // Using for...in loop
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  // 6. Object Methods
  // Object.keys() – Get an Array of Keys
  console.log(Object.keys(person)); // Output: ["name", "age", "skills", "country"]
  
  // Object.values() – Get an Array of Values
  console.log(Object.values(person)); // Output: ["Sai Kiran", 26, ["JavaScript", "React", "Node.js"], "India"]
  
  // Object.entries() – Get an Array of Key-Value Pairs
  console.log(Object.entries(person)); // Output: [["name", "Sai Kiran"], ["age", 26], ["skills", [...]], ["country", "India"]]
  
  // 7. Copying Objects
  // Using Object.assign()
  let newPerson = Object.assign({}, person);
  newPerson.age = 30; // Changes only in newPerson
  console.log(person.age); // Output: 26 (original remains unchanged)
  
  // Using Spread Operator {...}
  let copiedPerson = { ...person };
  console.log(copiedPerson);
  
  // 8. Freezing and Sealing Objects
  // Object.freeze() – Prevents Modification
  Object.freeze(person);
  person.age = 40; // No effect
  delete person.name; // No effect
  console.log(person.age); // Output: 26 (unchanged)
  
  // Object.seal() – Allows Modification but No Addition/Deletion
  Object.seal(person);
  person.age = 30; // Allowed
  delete person.name; // Not allowed
  console.log(person); // Name still exists, but age changed
  
  // 9. Merging Objects
  let obj1 = { a: 1, b: 2 };
  let obj2 = { b: 3, c: 4 };
  
  // Using spread operator to merge
  let mergedObj = { ...obj1, ...obj2 }; 
  console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }
  
  // 10. Converting Objects to JSON and Back
  // JSON.stringify() – Convert Object to String
  let jsonString = JSON.stringify(person);
  console.log(jsonString);
  
  // JSON.parse() – Convert String Back to Object
  let parsedObject = JSON.parse(jsonString);
  console.log(parsedObject);
  