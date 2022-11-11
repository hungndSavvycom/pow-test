import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { rootReducer } from './reducers';
import { apiSlice } from './slices/api';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
  devTools: true,
});

export type PAppState = ReturnType<typeof rootReducer>;
export type PAppThunk<ReturnType = void> = ThunkAction<ReturnType, PAppState, unknown, Action<string>>;

const persistor = persistStore(store);

export { persistor, store };
