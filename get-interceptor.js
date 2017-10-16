export default function getInterceptor(initialState) {
  let state = initialState;
  return newState => {
    if (newState) {
      state = newState;
    }
    return state;
  };
}
