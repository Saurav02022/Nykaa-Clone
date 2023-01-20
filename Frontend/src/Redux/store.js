import {
    legacy_createStore,
    applyMiddleware,
    combineReducers,
    compose,
  } from "redux";
  import {reducer as ProductReducer} from "./ProductReducer/reducer"
  import {reducer as AuthReducer} from "./AuthReducer/reducer";
  import {reducer as LogReducer} from "./LogReducer/reducer";
  import thunk from "redux-thunk"

  const rootReducer=combineReducers({ProductReducer,AuthReducer, LogReducer})

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

  export const store = legacy_createStore(rootReducer, 
    composeEnhancers(applyMiddleware(thunk)))