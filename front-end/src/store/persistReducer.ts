import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { RootState } from "./types";

export default (reducers) => {
    const persistedReducer = persistReducer<RootState>(
        {
            key: "dotaks",
            storage,
            whitelist: ["auth", "user"],
        },
        reducers
    );

    return persistedReducer;
};
