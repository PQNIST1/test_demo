import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const uploadImage = createAsyncThunk(
  'image/uploadImage',
  async (file, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/classify/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    className: '',
    probabilities: [],
    imageUrl: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.loading = false;
        state.className = action.payload.class_name;
        state.probabilities = action.payload.probabilities;
        state.imageUrl = action.payload.image_url;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Upload failed';
      });
  },
});

export default imageSlice.reducer;
