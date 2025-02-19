import { configureStore } from '@reduxjs/toolkit';
// We could use multiple reducers for bigger apps

const initialState = {
  good: 0,
  ok: 0,
  bad: 0, 
  notes: []
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
    case 'NEW_NOTE':
      return {
        ...state,
        notes: [...state.notes, action.payload] 
      };
      case 'TOGGLE_IMPORTANCE':
        return {
          ...state,
          notes: state.notes.map(note =>
            note.id === action.payload.id
              ? { ...note, important: !note.important } 
              : note 
          )
        };      
    default:
      return state;
  }
};

const store = configureStore({
  reducer: counterReducer
});

export default counterReducer;
 