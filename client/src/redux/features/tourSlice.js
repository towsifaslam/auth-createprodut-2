import {createSlice,createAsyncThunk} from'@reduxjs/toolkit'

import * as api from'../api';

export const crateTour = createAsyncThunk('tour/createTour',
async({updateTourData,navigate,toast},{rejectWithValue})=>{  
  console.log({updateTourData})
 
  try {
     const response = await api.createTour(updateTourData)
     toast.success('Tour Added successfully')
     navigate('/')
     return response.data
  } catch (error) {
    return rejectWithValue(error.response.data)
  }

})
export const getTour = createAsyncThunk('tour/getTour', async(_,{rejectWithValue})=>{
  try {
     const response = await api.getTours();
     return response.data
  } catch (error) {
     return rejectWithValue(error.response.data)
  }
})


export const getTou = createAsyncThunk('get/getTou',async(id,{rejectWithValue})=>{
     try {
      const response = await api.getTour(id)
      return response.data
     } catch (error) {
       return rejectWithValue(error.response.data)
     }
})
export const getTourByUser = createAsyncThunk('/get/getTourUserById',async(userId,{rejectWithValue})=>{
    try {
       const response = await api.getToursByuser(userId)
      return response.data;
       } catch (error) {
         return rejectWithValue(error.response.data)
    }
})
const tourSlice = createSlice({
  name:'tour',
  initialState:{
     tour:{},
     tours:[],
     userTours:[],
     error:'',
     loading:false
  },
  extraReducers:{
    [crateTour.pending] :(state,action)=>{
      state.loading = true
    },
    [crateTour.fulfilled]:(state,action)=>{
      state.loading=false;
      state.tours=[action.payload]
    },
    [crateTour.rejected]:(state,action)=>{
     state.loading = false;
     state.error = action.payload.message
    },
    [getTour.pending]:(state,action)=>{
         state.loading = false;
    },
  [getTour.fulfilled]:(state,action)=>{
    state.loading= false;
    state.tours = action.payload;
  },
  [getTour.rejected]:(state,action)=>{
    state.loading = false;
    state.error = action.payload.message
  },
  [getTou.pending]:(state,action)=>{
    state.loading = true
  },
  [getTou.fulfilled]:(state,action)=>{
    state.loading = false;
    state.tour = action.payload
  },
  [getTou.rejected]:(state,action)=>{
    state.error = action.payload.message;
    state.loading = false
  },
  [getTourByUser.pending]:(state,action)=>{
    state.loading = true;
  },
  [getTourByUser.fulfilled]:(state,action)=>{
    state.loading = false;
    state.userTours =  action.payload;
  },
  [getTourByUser.rejected]:(state,action)=>{
    state.error = action.payload.message;
    state.loading = false
  }
  }
})

 

export default tourSlice.reducer