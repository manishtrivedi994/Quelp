import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {QuelpAPIService} from '../../utils';

interface projectState {
  catFact: String;
  loading: boolean;
}

let initialState: projectState = {
  catFact: '',
  loading: false,
};

const getCatFact: any = createAsyncThunk(
  'getCatFact',
  async (data, {rejectWithValue}) => {
    try {
      let response: any = await QuelpAPIService.get('fact');
      return response.data;
    } catch (e: any) {
      return rejectWithValue(e.response.data);
    }
  },
);

const slice = createSlice({
  name: 'catFactReducer',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [getCatFact.fulfilled]: (state, action) => {
      console.log('success==>', action.payload);
      state.catFact = action.payload.fact;
      state.loading = false;
    },

    [getCatFact.rejected]: (state, action) => {
      console.log('error==>', action.payload);
      state.loading = false;
    },
  },
});

export const {setLoading} = slice.actions;
export {getCatFact};
export default slice.reducer;
