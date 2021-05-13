import {createAction} from '@reduxjs/toolkit';
import {INITIAL_TABLE} from '../const.js';

export const ActionType = {
  LOAD_VALUTE_LAST_DAY: `data/lastDay`,
  LOAD_SOME_LAST_DAY: `data/lastDays`,
  ADD_VALUE_IN_TABLE: `localState/addValueInTable`,
  DELETE_LAST_VALUE: `localState/deleteLastValue`,
  RESET_TABLE: `localState/resetTable`
};

export const loadValuteLastDay = createAction(ActionType.LOAD_VALUTE_LAST_DAY, (data) => {
  return {
    payload: data
  };
});

export const loadSomeLastDay = createAction(ActionType.LOAD_SOME_LAST_DAY, (data) => {
  return {
    payload: data
  };
});

export const addValueInTable = createAction(ActionType.ADD_VALUE_IN_TABLE, (date, valueInput, valuteInput, valueOutput, valuteOutput) => {
  return {
    payload: {
      date,
      valueInput,
      valuteInput,
      valueOutput,
      valuteOutput
    }
  };
});

export const resetTable = createAction(ActionType.RESET_TABLE, (table = INITIAL_TABLE) => {
  return {
    payload: table
  };
});
