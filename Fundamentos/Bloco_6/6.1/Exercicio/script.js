function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}
createStateOptions();

function handleSubmit(event) {
  event.preventDefault();

  let validation = validateData();

  clearDivs();

  if (validation.errorQtd === 0) {
    renderData();
  } else {
    validation.messages.unshift('Dados Inválidos')

    renderErrorMessages(validation.messages)
  }
}


function clearFields() {
  let formElements = document.querySelectorAll('input');
  let textArea = document.querySelector('textarea')
  let div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    let userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}


window.onload = function() {
  createStateOptions();
  let submitButton = document.querySelector('.submit-button');
  submitButton.addEventListener('click', handleSubmit);

  let clearButton = document.querySelector('.clear-button');
  clearButton.addEventListener('click', clearFields)
}
