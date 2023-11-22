import { configureStore } from '@reduxjs/toolkit';

import employeesReducers from '../features/employees/employeeSlice';

export const store = configureStore({
  reducer: {
    employeesData: employeesReducers,
  },
});
