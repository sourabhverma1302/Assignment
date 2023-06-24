import { configureStore } from "@reduxjs/toolkit";
import FilterData from "./slices/FilterData";

const store=configureStore({
    reducer:{
        filteryoudata:FilterData
    }
})

export default store;