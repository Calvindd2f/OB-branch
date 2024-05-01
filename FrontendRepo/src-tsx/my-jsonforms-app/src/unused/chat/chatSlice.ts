import { createSlice } from '@reduxjs/toolkit';

interface Message {
  text: string;
}

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [],
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state: ChatState, action: { payload: Message }) => {
      state.messages.push(action.payload);
    },
    clearMessages: (state: ChatState) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;

