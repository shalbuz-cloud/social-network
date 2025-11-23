import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from "@/redux/profile-reducer.js";
import messengerReducer from "@/redux/messenger-reducer.js";
import sidebarReducer from "@/redux/sidebar-reducer.js";
import usersReducer from "@/redux/users-reducer.js";

let reducers = combineReducers({
    profile: profileReducer,  // название как ветка в state
    messenger: messengerReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
})

export const store = configureStore({reducer: reducers});

export default store;