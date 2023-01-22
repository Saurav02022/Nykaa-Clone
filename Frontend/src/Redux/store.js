import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import { reducer as ProductReducer } from "./ProductReducer/reducer";
import { AuthenticationReducer } from "./LogReducer/reducer";
import { CartReducer } from './CartPage/reducer'
import {AddressReducer} from './AddressPage/reducer'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  ProductReducer,
  AuthenticationReducer,
  CartReducer,
  AddressReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
