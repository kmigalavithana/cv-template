import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cvReducer from '../store/cvSlice'
import authReducer from '../store/authSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cv'] // only auth and cv will be persisted
}

const rootReducer  = combineReducers( {
  cv: cvReducer,
  auth: authReducer,
})
const allPersistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: allPersistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),

});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.dispatch>;
export type AppDispatch = typeof store.dispatch;
export {store, persistor};
