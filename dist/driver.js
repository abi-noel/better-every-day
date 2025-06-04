import { prompts } from "./prompts.js";
function generateRandomPrompt() {
    const upperBound = prompts.length;
    const promptIndex = genRandomNumberBetween(1, upperBound);
    return prompts[promptIndex];
}
function genRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let promptEl = document.getElementById("prompt");
let prompt = generateRandomPrompt();
promptEl.textContent = prompt.question;
