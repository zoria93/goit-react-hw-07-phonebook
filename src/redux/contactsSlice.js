import { createSlice } from '@reduxjs/toolkit';
import { phoneNumber } from 'redux/constants';

const contactsInitialState = phoneNumber;

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts(state, action) {
      state.push(action.payload);
    },
    deleteContacts(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
