import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export enum Type {
  Meeting = 'MeetingNote',
  Call = 'Phone',
  Beer = 'Beer',
  Coffee = 'Coffee',
  Note = 'Message',
}

export interface FeedItem {
  id: number;
  type: Type;
  from: string;
  to: string;
  message: string;
  timestamp: string;
}

export interface feedState {
  data: FeedItem[];
}

const initialState: feedState = {
  data: [
    {
      id: 1,
      type: Type.Meeting,
      message: 'And a more formal meeting',
      timestamp: '6d',
    },
    {
      id: 2,
      type: Type.Call,
      message: 'And a more formal meeting',
      timestamp: '6d',
    },
    {
      id: 3,
      type: Type.Coffee,
      message: 'And a more formal meeting',
      timestamp: '6d',
    },
    {
      id: 4,
      type: Type.Beer,
      message: 'And a more formal meeting',
      timestamp: '6d',
    },
    {
      id: 5,
      type: Type.Note,
      message: 'And a more formal meeting',
      timestamp: '6d',
    },
  ].map((el) => ({ ...el, from: 'You', to: 'Milton Romaguera' })),
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    removeById: (state, action: PayloadAction<number>) => {
      const idx = state.data.findIndex((el) => el.id === action.payload);
      state.data.splice(idx, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeById } = feedSlice.actions;

export default feedSlice.reducer;

export const baseFeedSelector = (state: RootState) => state.feed;
export const feedSelector = createSelector([baseFeedSelector], (feed): FeedItem[] => feed.data);
