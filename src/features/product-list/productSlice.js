import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductsByFilters,fetchProductsById, fetchBrands,fetchCategories,createProduct,updateProduct } from './productAPI';

const initialState = {
  products : [],
  totalItems: 0,
  brands: [],
  categories: [],
  status: 'idle',
  selectedProduct: null,
  selectLoggedInUser: null,
};


export const  fetchProductsByFiltersAsync = createAsyncThunk(
  'products/fetchProductsByFilters',
  async ({filter,sort,pagination}) => {
    const response = await fetchProductsByFilters(filter,sort,pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const  fetchProductByIdAsync = createAsyncThunk(
  'products/fetchProductsById',
  async (id) => {
    const response = await fetchProductsById(id);
    return response.data;
  }
);



export const  fetchBrandsAsync = createAsyncThunk(
  'products/fetchBrands',
  async () => {
    const response = await fetchBrands();
    return response.data;
  }
);
export const  fetchCategoriesAsync = createAsyncThunk(
  'products/fetchCategories',
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);

export const  createProductAsync = createAsyncThunk(
  'products/createProduct',
  async (product) => {
    const response = await createProduct(product);
    return response.data;
  }
);

export const  updateProductAsync = createAsyncThunk(
  'products/update',
  async (update) => {
    const response = await updateProduct(update);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  //The name field is used to generate action types, reducer names, and selector names.
  //The initialState field is the initial state value for the reducer.

  initialState,
  reducers: {
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  //The reducers field lets us define reducers and generate associated actions and action creators.
  extraReducers: (builder) => {

    builder
      .addCase(fetchProductsByFiltersAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.selectedProduct = action.payload;
      })
      .addCase(createProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products.push(action.payload);
      })
      .addCase(updateProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const index = state.products.findIndex(product=>product.id===action.payload.id)
        state.products[index]=(action.payload);
        state.selectedProduct = action.payload;

      })
      ;
  },
}); 

export const { clearSelectedProduct } = productSlice.actions;
//actions are functions in the reducer logic that trigger changes to the state.
//The action creator is the function that returns the action object.
//The action object is the actual action being dispatched.
//The action type is the type property of the action object.
//The action payload is the payload property of the action object.
//The action type is the type of action being dispatched.

export const selectAllProducts = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;
export const selectCategories = (state) => state.product.categories;
export const selectProductById = (state) => state.product.selectedProduct;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectLoggedInUser = (state) => state.product.selectLoggedInUser;
export const selectProductListStatus = (state) => state.product.status;
export default productSlice.reducer;
//The reducer function is the reducer logic that actually updates the state when actions are dispatched.
