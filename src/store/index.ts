import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CatFacts from './getCatFacts/CatFacts';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];
const rootReducer = combineReducers({
  catFact: CatFacts,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['', '', '', ''],
  //Things you want to persist
  // blacklist: ['medGlobalSearch','brands','rapidResponse','news','notifications']
  //Things you don't want to persist
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware,
});
let persistor = persistStore(store);
export type RootState = ReturnType<typeof persistedReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
export {persistor};
