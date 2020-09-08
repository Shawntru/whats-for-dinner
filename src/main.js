var clearButton = document.querySelector('.clear-button');
var cookingButton = document.getElementById('cookingButton');
var crockpot = document.querySelector('.crockpot');
var footer = document.querySelector('.footer');
var outputBox = document.querySelector('.output-box');
var recipeOutput = document.querySelector('.recipe-output');

function randomFood(foodItem) {
  var i = Math.floor(Math.random() * foodItem.length)
  return foodItem[i];
}

function showRecipeEntry() {
  footer.classList.toggle('footer-hidden');
  footer.classList.toggle('footer-visible');
}

function submitRecipe() {
  event.preventDefault();
  var typeInput = document.getElementById('type').value.toLowerCase();
  var recipeInput = document.getElementById('recipe').value.toLowerCase();
  if (typeInput === 'side' && !sides.includes(recipeInput)) {
    sides.push(recipeInput);
  } else if (typeInput === 'main' && !mains.includes(recipeInput)) {
      mains.push(recipeInput);
  } else if (typeInput === 'dessert' && !desserts.includes(recipeInput)) {
      desserts.push(recipeInput);
  } else {
      shakeMe(footer);
      clearUserInput();
      return;
  }
  animateExit();
}

function letsCook() {
  var checkedButton = document.querySelector('input[name="meal"]:checked').value;
  if (checkedButton === 'side') displayFood(randomFood(sides));
    else if (checkedButton === 'main') displayFood(randomFood(mains));
    else if (checkedButton === 'dessert') displayFood(randomFood(desserts));
    else if (checkedButton === 'entire') entireMeal();
}

function entireMeal() {
  var wholeMeal = `${randomFood(mains)} with a side of ${randomFood(sides)} and a ${randomFood(desserts)} for dessert!`;
  displayFood(wholeMeal);
}

function shakeMe(element) {
  element.classList.toggle('shake');
  setTimeout(function() {
    element.classList.toggle('shake');
  }, 820);
}

function expandMe(element) {
  element.classList.toggle('zoom');
  setTimeout(function() {
    element.classList.toggle('zoom');
  }, 500);
}

function animateExit() {
  showRecipeEntry();
  footer.classList.add('fly-out');
  document.body.addEventListener('animationend', function() {
    footer.classList.remove('fly-out');
    clearUserInput();
  });
}

function clearUserInput() {
  document.getElementById('type').value = '';
  document.getElementById('recipe').value = '';
}

function displayFood(food) {
  crockpot.classList.add('hidden');
  recipeOutput.classList.remove('hidden');
  clearButton.classList.remove('hidden');
  expandMe(outputBox);
  document.querySelector('.recipe-text').innerText = food;
}

function enableCook() {
  cookingButton.disabled = false;
  cookingButton.classList.add('button');
}

function clearOutput() {
  crockpot.classList.remove('hidden');
  recipeOutput.classList.add('hidden');
  clearButton.classList.add('hidden');
  shakeMe(outputBox);
}
