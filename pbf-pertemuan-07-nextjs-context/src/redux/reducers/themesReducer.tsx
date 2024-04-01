import { createSlice } from '@reduxjs/toolkit';
import { themes } from "@/utilities/themes/mythemes";

const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    theme: themes.light,
  },
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === themes.dark ? themes.light : themes.dark;
    },
  },
});

export const { toggleTheme } = themesSlice.actions;
export default themesSlice.reducer;
