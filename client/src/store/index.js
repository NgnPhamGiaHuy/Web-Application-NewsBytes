import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, combineReducers, applyMiddleware } from "redux";

const rootReducer = combineReducers({

})


const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persist = persistStore(store);

export { store, persist };