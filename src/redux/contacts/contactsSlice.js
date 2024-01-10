import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';
import { handlePending, handleRejected } from './helpers';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  contactToEdit: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    setContactToEditAction(state, action) {
      state.contactToEdit = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.unshift(action.payload);
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const editedItemindex = state.items.findIndex(
          ({ id }) => id === action.payload.id
        );
        state.items = state.items.with(editedItemindex, action.payload);
      })
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== action.payload.id);
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const {
  addContactAction,
  removeContactAction,
  editContactAction,
  setContactToEditAction,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
