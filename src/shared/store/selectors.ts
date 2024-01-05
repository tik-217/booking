"use client";

import { RootState } from "./store";

export const selectOpenMenu = (state: RootState) => state.openMenu;
export const selectOpenMap = (state: RootState) => state.openMap;
