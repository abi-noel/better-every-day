import { prompts } from "./prompts.js";
function generateRandomPrompt() {
    const upperBound = prompts.length;
    const promptIndex = genRandomNumberBetween(1, upperBound);
    return prompts[promptIndex];
}
function genRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const path = window.location.pathname;
if (path.endsWith("prompt.html")) {
    let promptEl = document.getElementById("prompt");
    let prompt = generateRandomPrompt();
    if (promptEl) {
        promptEl.textContent = prompt.question;
    }
    else {
        throw new Error("Error: prompt element not found");
    }
}
