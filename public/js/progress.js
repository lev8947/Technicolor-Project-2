// const bar = document.querySelector(".bar");
// const percentageTag = document.querySelector(".percentage");
// const totalTag = document.querySelector("#num1");
// const solvedTag = document.querySelector("#num2");
// const addBtn = document.querySelector("#add");
// const total = 21;
// let solved = 0;

// const ruleOfThree = (num1, num2) => {
//   const proportion = (num2 * 100) / num1;
//   return Math.round(proportion * 10) / 10;
// };

// const updateBarLength = () => {
//   const percentage = ruleOfThree(total, solved);
//   bar.style.width = percentage + "%";
// };

// const updateText = () => {
//   solvedTag.textContent = solved;
//   percentageTag.textContent = ruleOfThree(total, solved) + "%";
// };

// addBtn.onclick = () => {
//   if (solved < total) {
//     solved++;
//     updateBarLength();
//     updateText();
//   }
// };


// totalTag.textContent = total;
// solvedTag.textContent = solved;
// percentageTag.textContent = ruleOfThree(total, solved) + "%";

const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");

const percentage1Tag = document.querySelector("#percentage1");
const percentage2Tag = document.querySelector("#percentage2");
const percentage3Tag = document.querySelector("#percentage3");

const totalTag1 = document.querySelector("#total1");
const totalTag2 = document.querySelector("#total2");
const totalTag3 = document.querySelector("#total3");

const goal1Input = document.querySelector("#goal1Input").textContent;
const goal2Input = document.querySelector("#goal2Input").textContent;
const goal3Input = document.querySelector("#goal3Input").textContent;

const total = 21;
// let solved = goal1Input;

const ruleOfThree = (num1, num2) => {
  const proportion = (num2 * 100) / num1;
  return Math.round(proportion * 10) / 10;
};

const updateBar1Length = () => {
  const percentage = ruleOfThree(total, goal1Input);
  bar1.style.width = percentage + "%";
};
const updateBar2Length = () => {
  const percentage = ruleOfThree(total, goal2Input);
  bar2.style.width = percentage + "%";
};
const updateBar3Length = () => {
  const percentage = ruleOfThree(total, goal3Input);
  bar3.style.width = percentage + "%";
};

// let solvedTag = goal1Input
const update1Text = () => {
  // solvedTag.textContent = solved;
  percentage1Tag.textContent = ruleOfThree(total, goal1Input) + "%";
};
const update2Text = () => {
  // solvedTag.textContent = solved;
  percentage2Tag.textContent = ruleOfThree(total, goal2Input) + "%";
};
const update3Text = () => {
  // solvedTag.textContent = solved;
  percentage3Tag.textContent = ruleOfThree(total, goal3Input) + "%";
};


$(window).on('load', updateBar1Length(), updateBar2Length(), updateBar3Length());
$(window).on('load', update1Text(), update2Text(), update3Text());

totalTag1.textContent = total;
totalTag2.textContent = total;
totalTag3.textContent = total;

percentage1Tag.textContent = ruleOfThree(total, goal1Input) + "%";
percentage2Tag.textContent = ruleOfThree(total, goal2Input) + "%";
percentage3Tag.textContent = ruleOfThree(total, goal3Input) + "%";