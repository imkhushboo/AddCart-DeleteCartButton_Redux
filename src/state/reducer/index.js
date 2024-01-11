import { combineReducers } from 'redux';
import { reducer } from './amountReducer';


export const reducers = combineReducers(
    {
        amount: reducer
    }
)