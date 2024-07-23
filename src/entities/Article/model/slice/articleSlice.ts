import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IArticle } from '../types/article';
import { IArticleSchema } from '../types/articleSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: IArticleSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchArticleById.fulfilled,
      (state, action: PayloadAction<IArticle>) => {
        state.isLoading = false;
        state.data = action.payload;
      },
    );
    builder.addCase(fetchArticleById.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions: articleActions, reducer: articleReducer } = articleSlice;
