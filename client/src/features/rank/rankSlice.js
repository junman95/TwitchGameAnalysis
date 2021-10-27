import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rankItem: null,
};

const rankSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {
    setRank: (state, action) => {
      state.rankItem = action.payload.rankItem;
    },
  },
});

export const { setRank } = rankSlice.actions;

export const selectRankItem = (state) => state.rank.rankItem;

export default rankSlice.reducer;
