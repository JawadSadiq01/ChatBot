import { configureStore } from '@reduxjs/toolkit';
import studentReducer from '../reducer';

export default configureStore({
  reducer: {
    student: studentReducer,
  },
});
