import { combineReducers } from "@reduxjs/toolkit";
import localForage from "localforage";
import { persistReducer } from "redux-persist";


export const persistentStorage = localForage;

function persisAppReducer<State, TReducer>(
  slice: {
    name: string;
    reducer: TReducer;
  },
  whitelist: Array<keyof State>
) {
  return persistReducer(
    {
      key: slice.name,
      storage: persistentStorage,
      whitelist: whitelist as Array<string>,
      timeout: undefined,
    },
    slice.reducer as ExpectedAny
  ) as ExpectedAny as TReducer;
}

const rootReducer = combineReducers({
  
  // pages

});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
