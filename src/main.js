var crockpot = document.querySelector('.crockpot');
var recipeOutput = document.querySelector('.recipe-output');
var clearButton = document.querySelector('.clear-button');
var outputBox = document.querySelector('.output-box');
var footer = document.querySelector('.footer');
var typeInput = document.getElementById('type');
var recipeInput = document.getElementById('recipe');

function randomFood(foodItem) {
  var i = Math.floor(Math.random() * foodItem.length)
  return foodItem[i];
}

function showRecipeEntry() {
  document.querySelector('.footer').classList.toggle('footer-hidden');
  document.querySelector('.footer').classList.toggle('footer-visible');
}

function submitRecipe() {
  event.preventDefault();
  var typeTextBox = document.getElementById('type').value.toLowerCase();
  var nameTextBox = document.getElementById('recipe').value.toLowerCase();
  if (typeTextBox == 'side' && !sides.includes(nameTextBox)) {
    sides.push(nameTextBox);
  } else if (typeTextBox == 'main' && !mains.includes(nameTextBox)) {
    mains.push(nameTextBox);
  } else if (typeTextBox == 'dessert' && !desserts.includes(nameTextBox)) {
    desserts.push(nameTextBox);
  } else {
    shakeMe(footer);
    typeInput.value = '';
    recipeInput.value = '';
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
    typeInput.value = '';
    recipeInput.value = '';
  });
}

function displayFood(food) {
  crockpot.classList.add('hidden');
  recipeOutput.classList.remove('hidden');
  clearButton.classList.remove('hidden');
  expandMe(outputBox);
  document.querySelector('.recipe-text').innerText = food;
}

function enableCook() {
  document.getElementById('cookingButton').disabled = false;
  document.getElementById('cookingButton').classList.add('button');
}

function clearOutput() {
  crockpot.classList.remove('hidden');
  recipeOutput.classList.add('hidden');
  clearButton.classList.add('hidden');
  shakeMe(outputBox);
}
