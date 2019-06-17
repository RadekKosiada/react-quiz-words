const initialState = {
  score: 0
};

export default function quizApp(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_SCORE':
      return Object.assign({}, state, {
        score: state.score++
      });
    default:
      return state;
  }
}
