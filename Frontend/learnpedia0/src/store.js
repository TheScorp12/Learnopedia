import { createStore, combineReducers } from "redux";

 import learnpedia from "./reducer/learnpedia";

 const rootReducer = combineReducers({
    learnpedia,
 })

 const store = createStore(
    rootReducer
 )

 export default store;