const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR'
const RANDOM_COLOR = 'RANDOM_COLOR';

const nextColor = () => ({
  type: NEXT_COLOR,
});

const previousColor = () => ({
  type: PREVIOUS_COLOR,
});

const randomColor = () => ({
  type: RANDOM_COLOR,
});

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = ESTADO_INICIAL, action) => {
  const { index, colors } = state;
  switch (action.type) {
    case NEXT_COLOR:

      return {
        ...state,
        index: index === colors.length -1 ? 0 : index + 1  
      };

    case PREVIOUS_COLOR:

      return {
        ...state,
        index: index === 0 ? colors.length -1 : index -1 
      };

      case RANDOM_COLOR:

      return {
        ...state,
        colors: [...colors, criarCor()],
        index: colors.length
      };

    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.querySelector('#container').style.backgroundColor = colors[index];
  document.querySelector('#value').innerHTML = colors[index];
})

document.querySelector('#next').addEventListener('click', () => {
  store.dispatch(nextColor());
})
document.querySelector('#previous').addEventListener('click', () => {
  store.dispatch(previousColor());
})

document.querySelector('#random').addEventListener('click', () => {
  store.dispatch(randomColor());
})