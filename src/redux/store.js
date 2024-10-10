import {createStore } from '@reduxjs/toolkit';
import combineReducer from './reducer';

const store = createStore(combineReducer)

export default store;