import { createSlice } from '@reduxjs/toolkit';

const contactToEditInitialState = {
  contactToEdit: null,
};

const contactEditSlice = createSlice({
  name: 'contactToEdit',
  initialState: contactToEditInitialState,
  reducers: {
    setContactToEditAction(state, action) {
      state.contactToEdit = action.payload;
    },
  },
});

export const { setContactToEditAction } = contactEditSlice.actions;
export const contactEditReducer = contactEditSlice.reducer;
