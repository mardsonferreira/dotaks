import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { ApplicationState } from "./types";

export default (reducers) => {
    const persistedReducer = persistReducer<ApplicationState>(
        {
            key: "dotaks",
            storage,
            whitelist: ["auth", "user"],
        },
        reducers
    );

    return persistedReducer;
};
