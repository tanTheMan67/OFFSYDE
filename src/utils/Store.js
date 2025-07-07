import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice.js';
import FeedReducer from './FeedSlice.js';
import connectionReducer from './connectionSlice.js'; 
import RequestReducer from './RequestSlice.js';

const appStore =configureStore({
    reducer:{
     user:userReducer,
     feed:FeedReducer,
     connections:connectionReducer,
     requests:RequestReducer
    }
});
export default appStore;