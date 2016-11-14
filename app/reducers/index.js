export default (state = { time: new Date().toString() }, action) => {
  switch (action.type) {
    case 'UPDATE_TIME':
      return Object.assign({}, state, {
        time: new Date().toString()
      });
    default:
      return state;
  }
};

