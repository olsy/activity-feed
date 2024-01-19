import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export enum Type {
  Meeting = 'MeetingNote',
  Call = 'Phone',
  Beer = 'Beer',
  Coffee = 'Coffee',
  Note = 'Message',
  List = 'New',
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
  count: number;
  data: FeedItem[];
}

const mock = [
  {
    id: 1,
    type: Type.Meeting,
  },
  {
    id: 2,
    type: Type.Call,
  },
  {
    id: 3,
    type: Type.Coffee,
  },
  {
    id: 4,
    type: Type.Beer,
  },
  {
    id: 5,
    type: Type.Note,
  },
].map((el) => ({
  ...el,
  from: 'You',
  to: 'Milton Romaguera',
  timestamp: new Date().toISOString(),
  message: 'And a more formal meeting',
}));

const initialState: feedState = {
  count: mock.length || 0,
  data: mock || [],
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<FeedItem, 'id'>>) => {
      state.count++;
      state.data.unshift({ ...action.payload, id: state.count });
    },
    removeById: (state, action: PayloadAction<number>) => {
      const idx = state.data.findIndex((el) => el.id === action.payload);
      state.data.splice(idx, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { removeById, add } = feedSlice.actions;

export default feedSlice.reducer;

export const baseFeedSelector = (state: RootState) => state.feed;
export const feedSelector = createSelector([baseFeedSelector], (feed): FeedItem[] => feed.data);
