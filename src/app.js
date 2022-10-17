"use strict";
import loadScript from "./assets/js/loadScript.js";

const blackboard = document.getElementById("blackboard");
const sidebar = document.getElementById("sidebar");
const runner = loadScript();
let content = runner.mapArgumentFunction();

let html = "";

// output the new script
function runScript(e) {
  console.log("e.target: ", e.target);
  const script = e.target.textContent;
  content = runner[script]();
  outputToScreen(content);
}
// get all script names
const scripts = Object.keys(runner);
console.log("scripts: ", scripts);
//create buttons for each script
function createScriptButtons() {
  sidebar.innerHTML = "";
  scripts.map((script) => {
    const button = document.createElement("button");
    button.textContent = script;
    button.addEventListener("mouseup", runScript);
    sidebar.appendChild(button);
  });
}

function outputToScreen(html) {
  blackboard.innerHTML = "";

  blackboard.appendChild(content);
}

createScriptButtons();
outputToScreen(html);
