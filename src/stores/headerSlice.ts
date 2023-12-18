import { createSlice } from "@reduxjs/toolkit";

interface HeaderState {
  setCurrent: string;
}

const initialState: HeaderState = {
  setCurrent: "Trang chủ",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setCurrentLink(state, action) {
      state.setCurrent = action.payload;
    },
  },
});

export const { setCurrentLink } = headerSlice.actions;
export default headerSlice.reducer;
