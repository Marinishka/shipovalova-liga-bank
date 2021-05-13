import {addValueInTable, resetTable} from '../action';
import {createReducer} from '@reduxjs/toolkit';

const initialState = {
  table: []
};

const localState = createReducer(initialState, (builder) => {
  builder.addCase(addValueInTable, (state, action) => {
    if (state.table.length < 10) {
      state.table.unshift(action.payload);
    } else {
      state.table.pop();
      state.table.unshift(action.payload);
    }
  });
  builder.addCase(resetTable, (state, action) => {
    state.table = action.payload;
  });
});

export {localState};
