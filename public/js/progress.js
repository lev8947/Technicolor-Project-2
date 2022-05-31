const bar = document.querySelector(".bar");
const percentageTag = document.querySelector(".percentage");
const totalTag = document.querySelector("#num1");
const solvedTag = document.querySelector("#num2");
const addBtn = document.querySelector("#add");
const total = 21;
let solved = 0;

const ruleOfThree = (num1, num2) => {
  const proportion = (num2 * 100) / num1;
  return Math.round(proportion * 10) / 10;
};

const updateBarLength = () => {
  const percentage = ruleOfThree(total, solved);
  bar.style.width = percentage + "%";
};

const updateText = () => {
  solvedTag.textContent = solved;
  percentageTag.textContent = ruleOfThree(total, solved) + "%";
};

addBtn.onclick = () => {
  if (solved < total) {
    solved++;
    updateBarLength();
    updateText();
  }
};


totalTag.textContent = total;
solvedTag.textContent = solved;
percentageTag.textContent = ruleOfThree(total, solved) + "%";