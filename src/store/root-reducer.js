import {combineReducers} from 'redux';
import {data} from './data/data';
import {localState} from './local-state/local-state';

export const NameSpace = {
  DATA: `DATA`,
  LOCAL: `LOCAL`
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.LOCAL]: localState
});
