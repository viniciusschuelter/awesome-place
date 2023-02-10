import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { CitiesInterface } from '@/models/awesome-place.model';

import type { AppState } from './store';

// Type for our state
export interface AwesomePlacesState {
  overall: CitiesInterface[];
  cost: CitiesInterface[];
  internet: CitiesInterface[];
  fun: CitiesInterface[];
  safety: CitiesInterface[];
}

// Initial state
const initialState: AwesomePlacesState = {
  overall: [],
  cost: [],
  internet: [],
  fun: [],
  safety: [],
};

// Actual Slice
export const awesomePlaceSlice = createSlice({
  name: 'awesomePlaces',
  initialState,
  reducers: {
    setAwesomePlacesOverall: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.overall = action.payload;
    },
    setAwesomePlacesCost: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.cost = action.payload;
    },
    setAwesomePlacesInternet: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.internet = action.payload;
    },
    setAwesomePlacesFun: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.fun = action.payload;
    },
    setAwesomePlacesSafety: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.safety = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log(
        'hidrate',
        action.payload?.awesomePlaces?.data?.cities?.length
      );
      if (!action.isInitialHydrate) return state;
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setAwesomePlacesOverall } = awesomePlaceSlice.actions;
export const { setAwesomePlacesCost } = awesomePlaceSlice.actions;
export const { setAwesomePlacesInternet } = awesomePlaceSlice.actions;
export const { setAwesomePlacesFun } = awesomePlaceSlice.actions;
export const { setAwesomePlacesSafety } = awesomePlaceSlice.actions;

export const selectAwesomePlacesOverall = (state: AppState) =>
  state.awesomePlaces.overall;
export const selectAwesomePlacesCost = (state: AppState) =>
  state.awesomePlaces.cost;
export const selectAwesomePlacesInternet = (state: AppState) =>
  state.awesomePlaces.internet;
export const selectAwesomePlacesFun = (state: AppState) =>
  state.awesomePlaces.fun;
export const selectAwesomePlacesSafety = (state: AppState) =>
  state.awesomePlaces.safety;

export default awesomePlaceSlice.reducer;
