import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchGroups = createAsyncThunk(
//   'groups/fetchGroups',
//   async (_, thunkAPI) => {
//     const response = await fetch('/api/groups', {
//       headers: {
//         'Authorization': `Bearer ${thunkAPI.getState().user.token}`,
//       },
//     });
//     const data = await response.json();
//     return data;
//   }
// );

const groupSlice = createSlice({
  name: 'groups',
  initialState: {
    groups: [],
    status: 'idle',
  },
  reducers: {},
  // extraReducers: (builder) => {
  //   builder.addCase(fetchGroups.fulfilled, (state, action) => {
  //     state.groups = action.payload;
  //   });
  // },
});

export default groupSlice.reducer;
