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
    setIsAllFiltList(state, actions: PayloadAction<boolean>) {
      state.isAllFiltList = actions.payload;
    },
    setMaxFiltListElem(state, actions: PayloadAction<number>) {
      state.maxFiltListElem = actions.payload;
    },
    setHotelIndexPage(state, actions: PayloadAction<number>) {
      state.hotelIndexPage = actions.payload;
    },
    setPollInterval(state, actions: PayloadAction<number>) {
      state.pollInterval = actions.payload;
    },
  },
});

export const {
  setOpenMenu,
  setOpenMap,
  setIsAllFiltList,
  setMaxFiltListElem,
  setHotelIndexPage,
} = reducers.actions;

export default reducers.reducer;
