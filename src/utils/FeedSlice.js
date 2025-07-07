import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload;
        },
        removeUserFromFeed:(state,action)=>{
            const users = state.filter((ele)=>ele._id!==action.payload);
            return users;
        }
    }
});
export const {addFeed,removeUserFromFeed}=FeedSlice.actions;
export default FeedSlice.reducer;