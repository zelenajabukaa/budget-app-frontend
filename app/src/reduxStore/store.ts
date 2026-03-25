import {combineReducers, configureStore} from '@reduxjs/toolkit';
import earningsReducer from './earningsSlice.ts';
import expensesReducer from './expensesSlice.ts';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['earnings','expenses'] // puts both the earnings and expenses into the whitelist, so that they persist and don't get deleted every page refresh
}

const rootReducer = combineReducers({
    earnings: earningsReducer,
    expenses: expensesReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;