import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService } from "../services/userApi";
import { ILogin } from "../interface";
interface AuthState{
    isAuthenticated:boolean;
    user:string | null;
    loading:boolean;
    error:string | null;
}
const initialState:AuthState={
    isAuthenticated:false,
    user:null,
    loading:false,
    error:null
}

// async thunk for login
export const loginAsync = createAsyncThunk('auth/login', async ({ email, password }: ILogin) => {
  const response = await loginService({email,password}) 
  return response.data;
});
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      logout: (state) => {
        state.isAuthenticated =false;
        state.user=null
      },
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginAsync.pending, (state) => {
          state.loading = true;
        })
        .addCase(loginAsync.fulfilled, (state, action) => {
          state.user = action.payload;
          state.error = null;
          state.loading=false
        })
        .addCase(loginAsync.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Login Failed";
        });
      }
    
  });
  
  export const {  logout } = authSlice.actions;
  
  export default authSlice.reducer;