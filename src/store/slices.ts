import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { AwesomePlaceDataResponse } from '@/models/awesome-place.model';

import type { AppState } from './store';

// Type for our state
export interface AwesomePlacesState {
  data: AwesomePlaceDataResponse;
}

// Initial state
const initialState: AwesomePlacesState = {
  data: { cities: [], slugs: [], temperaturesC: {} },
};

// Actual Slice
export const awesomePlaceSlice = createSlice({
  name: 'awesomePlaces',
  initialState,
  reducers: {
    setAwesomePlacesState: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.data = action.payload;
    },

    extraReducers: {
      // @ts-ignore
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.data,
        };
      },
    },
  },
});

export const { setAwesomePlacesState } = awesomePlaceSlice.actions;

export const selectAwesomePlacesState = (state: AppState) =>
  state.awesomePlaces.data;

export default awesomePlaceSlice.reducer;
