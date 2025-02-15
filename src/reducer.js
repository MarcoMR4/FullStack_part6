import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      return { ...state, good: state.good + 1 };
    case 'OK':
      return { ...state, ok: state.ok + 1 };
    case 'BAD':
      return { ...state, bad: state.bad + 1 };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const store = configureStore({
  reducer: counterReducer
});

export { store, counterReducer };
