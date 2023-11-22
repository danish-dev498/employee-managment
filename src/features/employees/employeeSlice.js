import { createSlice, current } from '@reduxjs/toolkit';
import employeesData from '../../data/employee.json';

const initialState = {
  data: employeesData,
  modalOpen: false,
  employeeDetails: {},
  modalDetails: {
    title: '',
    type: '',
  },
  error: '',
};

export const employeesSlice = createSlice({
  name: 'employeesData',
  initialState,
  reducers: {
    handleSearch: (state, action) => {
      state.data = initialState.data.filter((employee) => {
        return (
          employee.firstName
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase()) ||
          employee.lastName
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase())
        );
      });
    },
    handleUpdateData: (state, action) => {
      const { email, contactNumber } = action.payload;
      const existedEmployee = state.data.find(
        (employee) =>
          employee.email === email || employee.contactNumber === contactNumber
      );

      // console.log('CHECK DATA EXISTED', current(existedEmployee));
      if (existedEmployee) {
        state.error = 'User already exited';
      } else {
        state.error = '';
        state.data.push(action.payload);
      }
    },
    handleOpenModal: (state, action) => {
      state.modalOpen = true;
      state.modalDetails = {
        title: action.payload.title,
        type: action.payload.type,
      };
    },
    handleCloseModal: (state, action) => {
      state.modalOpen = false;
    },
    setEmployeeDetails: (state, action) => {
      state.employeeDetails = action.payload;
    },
  },
});

export const {
  handleSearch,
  handleUpdateData,
  handleOpenModal,
  handleCloseModal,
  setEmployeeDetails,
} = employeesSlice.actions;

export default employeesSlice.reducer;
