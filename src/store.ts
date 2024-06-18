import { combineReducers, configureStore } from "@reduxjs/toolkit";
import flowSlice from "./redux/nodesSlice"; // Import default export if it is a slice

// Combine reducers
const rootReducer = combineReducers({
  flow: flowSlice, // Use a meaningful key name instead of flow_slice
});

// Configure the store with the combined reducer
export const store = configureStore({
  reducer: rootReducer, // Directly assign rootReducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
