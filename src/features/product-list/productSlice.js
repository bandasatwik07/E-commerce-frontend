import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts,fetchProductsByFilters } from './productAPI';

const initialState = {
  products : [],
  status: 'idle',
};

export const  fetchAllProductsAsync = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
export const  fetchProductsByFiltersAsync = createAsyncThunk(
  'products/fetchProductsByFilters',
  async (filter) => {
    const response = await fetchProductsByFilters(filter);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  //The name field is used to generate action types, reducer names, and selector names.
  //The initialState field is the initial state value for the reducer.

  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  //The reducers field lets us define reducers and generate associated actions and action creators.
  extraReducers: (builder) => {
    //The extraReducers field lets the slice handle actions defined outside of the slice, including actions generated by createAsyncThunk and createSlice.
    //The builder callback object contains methods to define how the reducer handles actions and generate action types, action creators, and selectors. 

    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
        //action.payload is the data payload associated with the action (in this case, the result of the asynchronous operation).
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
        //action.payload is the data payload associated with the action (in this case, the result of the asynchronous operation).
      });
  },
}); 

export const { increment } = productSlice.actions;
//actions are functions in the reducer logic that trigger changes to the state.
//The action creator is the function that returns the action object.
//The action object is the actual action being dispatched.
//The action type is the type property of the action object.
//The action payload is the payload property of the action object.
//The action type is the type of action being dispatched.
export const selectAllProducts = (state) => state.product.products;
//Selectors are functions that know how to extract specific pieces of information from a store state value.
//The selectAllProducts selector function returns the products array from the state.
export default productSlice.reducer;
//The reducer function is the reducer logic that actually updates the state when actions are dispatched.
