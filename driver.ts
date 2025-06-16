import { prompts, Prompt } from "./prompts.js";

function generateRandomPrompt(): Prompt {
  const upperBound = prompts.length;
  const promptIndex = genRandomNumberBetween(0, upperBound);
  return prompts[promptIndex];
}

function genRandomNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

const path = window.location.pathname;

if (path.endsWith("prompt.html")) {
  let promptEl = document.getElementById("prompt");
  let pageEl = document.getElementById("page");
  let categoryEl = document.getElementById("category");
  let prompt = generateRandomPrompt();
  let width: number;
  if (promptEl) {
    promptEl.textContent = prompt.question;
    width = promptEl.getBoundingClientRect().width;
    promptEl.style.width = width.toString() + "px";
  } else {
    throw new Error("Prompt element not found");
  }
  if (pageEl) {
    pageEl.textContent = "Page " + prompt.pageNumber.toString();
    pageEl.style.width = width.toString() + "px";
  } else {
    throw new Error("Page number element not found");
  }
  if (categoryEl) {
    categoryEl.textContent = prompt.category;
    categoryEl.style.width = width.toString() + "px";
  } else {
    throw new Error("Category element not found");
  }
} else {
  const buttonEl = document.getElementById("button");
  if (buttonEl) {
    buttonEl.addEventListener("click", () => {
      window.location.href = "prompt.html";
    });
  }
}
