import { createSlice } from "@reduxjs/toolkit";
const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    selectedMessage: null,
    isRead: false,
    inboxNumber: 7,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    openMessage: (state, actions) => {
      state.selectedMessage = actions.payload;
    },
    markAsRead: (state) => {
      state.isRead = true;
    },
    incrementInboxNumber: (state) => {
      state.inboxNumber += 1;
    },
  },
});

export const {
  openSendMessage,
  closeSendMessage,
  openMessage,
  markAsRead,
  incrementInboxNumber,
} = mailSlice.actions;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectedMail = (state) => state.mail.selectedMessage;
export const selectRead = (state) => state.mail.isRead;
export const selectInboxNumber = (state) => state.mail.inboxNumber;

export default mailSlice.reducer;
