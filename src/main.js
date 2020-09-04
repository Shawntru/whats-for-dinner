var crockpot = document.querySelector('.crockpot');
var recipeOutput = document.querySelector('.recipe-output');
var clearButton = document.querySelector('.clear-button');
var cookButton = document.getElementById('cookingButton');
var footerView = document.querySelector('.footer');

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function recipeButton() {
  footerView.classList.toggle('hidden');
}

function submitRecipe() {
  event.preventDefault();
}

function letsCook() {
  var checkedButton = document.querySelector('input[name="meal"]:checked').value;
  if (checkedButton === 'side') displayFood(randomFood(sides));
  if (checkedButton === 'main') displayFood(randomFood(mains));
  if (checkedButton === 'dessert') displayFood(randomFood(desserts));
  if (checkedButton === 'entire') entireMeal();
}

function randomFood(foodItem) {
  return foodItem[getRandomIndex(foodItem)];
}

function entireMeal() {
  var wholeMeal = `${randomFood(mains)} with a side of ${randomFood(sides)} and a ${randomFood(desserts)} for dessert!`;
  displayFood(wholeMeal);
}

function displayFood(food) {
  crockpot.classList.add('hidden');
  recipeOutput.classList.remove('hidden');
  clearButton.classList.remove('hidden');
  document.querySelector('.recipe-text').innerText = food;
}

function enableCook() {
  cookButton.disabled = false;
  cookButton.classList.add('button');

}

function clearOutput() {
  crockpot.classList.remove('hidden');
  recipeOutput.classList.add('hidden');
  clearButton.classList.add('hidden');
}
