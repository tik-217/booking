"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const reducers = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setOpenMenu(state, actions: PayloadAction<boolean>) {
      state.openMenu = actions.payload;
    },
    setOpenMap(state, actions: PayloadAction<boolean>) {
      state.openMap = actions.payload;
    },
  },
});

export const { setOpenMenu, setOpenMap } = reducers.actions;

export default reducers.reducer;
