import { configureStore } from '@reduxjs/toolkit';
import reducer from './todo.reducer';

export const store = configureStore({
    reducer,
});
