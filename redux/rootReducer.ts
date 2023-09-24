import { combineReducers } from "@reduxjs/toolkit";
import localForage from "localforage";
import { persistReducer } from "redux-persist";
import pageBarcodePrintingSlice from "../screens/BarcodePrinting/slice";
import pageCashbooksSlice from "../screens/Cashbook/slice";
import pageContactEditSlice from "../screens/ContactDetail/slice";
import pageContactsSlice from "../screens/Contacts/slice";
import dashboardSlice from "../screens/Dashboard/slice";
import pageInventorySlice from "../screens/Inventory/slice";
import pageInventoryCreateSlice from "../screens/InventoryCreate/slice";
import pageInventoryDetailSlice from "../screens/InventoryDetail/slice";
import pageOrderDetailSlice from "../screens/OrderDetail/slice";
import pageOrdersSlice from "../screens/Orders/slice";
import pagePosSlice from "../screens/POS/slice";
import pageProductEditSlice from "../screens/ProductEdit/slice";
import pageProductsSlice from "../screens/Products/slice";
import pageAnalysisSlice from "../screens/ReportAndAnalysis/slice";
import pageSettingsSlice from "../screens/Settings/slice";
import appSlice from "./app";
import authSlice from "./auth";
import categorySlice from "./category";
import contactSlice from "./contact";
import loginSlice from "./login";
import notificationSlice from "./notification";
import { default as pendingOrderSlice, default as posSlice } from "./pos";
import productSlice from "./product";
import promotionSlice from "./promotion";
import toastSlice from "./toast";

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
  [authSlice.name]: persisAppReducer(authSlice, [
    "user_info",
    "business",
    "permissions",
  ]),
  [contactSlice.name]: persisAppReducer(contactSlice, ["ids", "byId"]),
  [pendingOrderSlice.name]: persisAppReducer(pendingOrderSlice, ["orders"]),
  [loginSlice.name]: persisAppReducer(loginSlice, [
    "device_id",
    "challenge",
    "cooldown",
  ]),
  [toastSlice.name]: toastSlice.reducer,
  [posSlice.name]: persisAppReducer(posSlice, [
    "pendingOrders",
    "fastProducts",
  ]),
  [notificationSlice.name]: notificationSlice.reducer,
  [appSlice.name]: persisAppReducer(appSlice, ["sidebar"]),
  [categorySlice.name]: persisAppReducer(categorySlice, [
    "ids",
    "byId",
    "categoryDrafts",
  ]),
  [productSlice.name]: persisAppReducer(productSlice, [
    "ids",
    "byId",
    "productDrafts",
  ]),
  [promotionSlice.name]: persisAppReducer(promotionSlice, [
    "ids",
    "byId",
    "promotionDrafts",
  ]),
  [dashboardSlice.name]: dashboardSlice.reducer,
  // pages
  [pageProductsSlice.name]: pageProductsSlice.reducer,
  [pageOrdersSlice.name]: pageOrdersSlice.reducer,
  [pageOrderDetailSlice.name]: pageOrderDetailSlice.reducer,
  [pageCashbooksSlice.name]: pageCashbooksSlice.reducer,
  [pageContactsSlice.name]: pageContactsSlice.reducer,
  [pageProductEditSlice.name]: pageProductEditSlice.reducer,
  [pagePosSlice.name]: pagePosSlice.reducer,
  [pageContactEditSlice.name]: pageContactEditSlice.reducer,
  [pageInventorySlice.name]: pageInventorySlice.reducer,
  [pageInventoryDetailSlice.name]: pageInventoryDetailSlice.reducer,
  [pageAnalysisSlice.name]: pageAnalysisSlice.reducer,
  [pageInventoryCreateSlice.name]: pageInventoryCreateSlice.reducer,
  [pageSettingsSlice.name]: pageSettingsSlice.reducer,
  [pageBarcodePrintingSlice.name]: pageBarcodePrintingSlice.reducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
