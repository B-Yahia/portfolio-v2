import { createSlice } from "@reduxjs/toolkit";

const MediaSlice = createSlice({
  name: "media",
  initialState: {
    mediaList: [],
    selectedMedia: null,
    selectedMediaIndex: null,
  },
  reducers: {
    addMediaToList(state, action) {
      const media = action.payload.media;
      state.mediaList.push(media);
      if (state.mediaList.length === 1) {
        state.selectedMedia = media;
        state.selectedMediaIndex = 0;
      }
    },
    selectNewMedia(state, action) {
      const index = action.payload.index;
      state.selectedMedia = state.mediaList[index];
      state.selectedMediaIndex = index;
    },
  },
});

export const { addMediaToList, selectNewMedia } = MediaSlice.actions;
export default MediaSlice.reducer;
