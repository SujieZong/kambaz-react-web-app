import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer.ts";
const store = configureStore({ reducer: { helloReducer } });
export default store;
