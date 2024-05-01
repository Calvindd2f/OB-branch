import { createSlice } from '@reduxjs/toolkit';

// Example slice for organization details
export const organizationDetailsSlice = createSlice({
  name: 'organizationDetails',
  initialState: {},
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { updateField } = organizationDetailsSlice.actions;
export default organizationDetailsSlice.reducer;
