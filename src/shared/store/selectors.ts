import { RootState } from "./store";

export const selectOpenMenu = (state: RootState) => state.openMenu;
export const selectOpenMap = (state: RootState) => state.openMap;
export const selectIsAllFiltList = (state: RootState) => state.isAllFiltList;
export const selectMaxFiltListElem = (state: RootState) =>
  state.maxFiltListElem;
export const selectHotelIndexPage = (state: RootState) => state.hotelIndexPage;
export const selectPollInterval = (state: RootState) => state.pollInterval;
