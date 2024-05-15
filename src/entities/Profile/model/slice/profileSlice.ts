import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { IProfile, IProfileSchema } from '../types/profile';

const initialState: IProfileSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, { payload }: PayloadAction<boolean>) => {
      state.readonly = payload;
    },
    updateProfile: (state, { payload }: PayloadAction<IProfile>) => {
      state.form = { ...state.form, ...payload };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      },
    );
    builder.addCase(fetchProfileData.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(updateProfileData.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(
      updateProfileData.fulfilled,
      (state, action: PayloadAction<IProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
      },
    );
    builder.addCase(updateProfileData.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
