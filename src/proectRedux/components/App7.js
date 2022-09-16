import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from '../reducers/Reducer'
import initialState from "../store/initialState2";
import Continents from "./Continents";

export default async function App7(){
    
    const store = createStore(rootReducer, initialState)

    return(
        <>
            <Provider store={store}>
                <Continents />
            </Provider>
        </>
    )
}