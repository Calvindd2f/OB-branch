import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { chatReducer } from './features/chat/chatSlice';

const rootReducer = combineReducers({
  chat: chatReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

