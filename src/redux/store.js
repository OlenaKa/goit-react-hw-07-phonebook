import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import logger from "redux-logger"
import reducer from "./reducers"

const middleware = [
  ...getDefaultMiddleware(),
  // {
  // serializableCheck: {
  //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  // },
  // }
  logger,
]

const store = configureStore({
  reducer: reducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
})

export default store

// import { combineReducers } from "redux"
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist"
// import storage from "redux-persist/lib/storage"

// const persistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: "filter",
// }

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case "contacts/addContactSuccess":
//       return [...state, payload]
//     case "contacts/deleteContactSuccess":
//       return state.filter((item) => item.id !== payload)

//     default:
//       return state
//   }
// }

// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case "contacts/filter":
//       return payload

//     default:
//       return state
//   }
// }

// const reducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// })

// const persistedReducer = persistReducer(persistConfig, reducer)

// const persistor = persistStore(store)

// const exportobject = { store, persistor }
