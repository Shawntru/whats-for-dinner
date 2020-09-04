var crockpot = document.querySelector('.crockpot');
var recipeOutput = document.querySelector('.recipe-output');
var clearButton = document.querySelector('.clear-button');

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function addRecipe() {

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
  document.getElementById('cookingButton').disabled = false;
}

function clearOutput() {
  crockpot.classList.remove('hidden');
  recipeOutput.classList.add('hidden');
  clearButton.classList.add('hidden');
}
