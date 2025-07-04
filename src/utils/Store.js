import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import FeedReducer from './FeedSlice.js'; 

const appStore =configureStore({
    reducer:{
     user:userReducer,
     feed:FeedReducer
    }
});
export default appStore;