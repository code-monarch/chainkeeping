import { combineReducers } from "@reduxjs/toolkit";
// slices
import { baseAPI } from "./api/base-api";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import storage from "redux-persist/lib/storage";

export const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "Oolom-",
    // whitelist: [],
    stateReconciler: hardSet,
};

const rootReducer = combineReducers({
    [baseAPI.reducerPath]: baseAPI.reducer
});

export default rootReducer;
