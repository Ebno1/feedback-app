import { configureStore } from "@reduxjs/toolkit";

import formDataReducer from "./FormdataReducer";

const mainStore =  configureStore({
    reducer: {
        formdata : formDataReducer,
    }
})

export default mainStore;