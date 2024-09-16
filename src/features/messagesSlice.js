import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action for sending messages
// export const sendMessage = createAsyncThunk(
//     'messages/sendMessage',
//     async (messageData, thunkAPI) => {
//         const response = await fetch('/api/messages', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${thunkAPI.getState().user.token}`,
//             },
//             body: JSON.stringify(messageData),
//         });
//         const data = await response.json();
//         return data;
//     }
// );

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [],
        status: 'idle',
    },
    reducers: {},
    // extraReducers: (builder) => {
    //     builder.addCase(sendMessage.fulfilled, (state, action) => {
    //         state.messages.push(action.payload);
    //     });
    // },
});

export default messageSlice.reducer;
