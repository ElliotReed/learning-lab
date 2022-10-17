import { people } from "./data.js";

const blackboard = document.getElementById("blackboard");

let output = "";

function outputToScreen(output) {
  blackboard.textContent = output;
}

// Callbacks
function aCallbackFunction(output) {
  output += "The Callback \n";
  outputToScreen(output);
}

function theMainFunction(output, cb) {
  output += "The Main Function \n";
  cb(output);
}

// theMainFunction(output, aCallbackFunction);

// Errors
const a = 5;
try {
  // output += b;
} catch (err) {
  console.error(err);
} finally {
  output += a;
  outputToScreen(output);
}

// map & set
function learnMap() {
  const myMap = new Map([
    ["name", "Ellie Reed"],
    ["type", "child"],
    ["hobby", "Singing"],
  ]);

  myMap.set("stomach", "quesy");
  myMap.set("stomach", "nauseus");
  myMap.set(
    {
      height: 5.4,
      weight: 92,
    },
    11
  );

  output = myMap;
  output = myMap.size;
  output = myMap.has("stomach");
  output = myMap.delete("stomach");
  output = myMap.keys();
  output = myMap.values();
  output = myMap.entries();
  output = myMap.forEach((value, key) => {
    output = `The key is ${key}, and the value is ${value}`;
    outputToScreen(output);
  });
  // console.log('myMap: ', myMap);
  // console.log('myMap: ', myMap.keys());
  // console.log('myMap.values: ', myMap.values());
  console.log("myMap.entries: ", myMap.entries());
  // outputToScreen(output)
}

// learnMap()

// Loops
function runLoop() {
  people.forEach((person) => {
    console.log("person: ", person);
  });

  for (const person of people) {
    console.log("for of person: ", person);
  }
}

runLoop();
