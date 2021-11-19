import React from 'react';
import ReactDOM from 'react-dom';


import  'bootstrap/dist/css/bootstrap.min.css';
import './sass/main.scss'
import './sass/main-admin.scss'



import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReduser";
import 'react-toastify/dist/ReactToastify.css';
import thunk from "redux-thunk";

import MainRoot from "./Components/MainRoot";
import MainParts from "./Components/HomePage/MainParts";

// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store =createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ));





ReactDOM.render(
    <Provider store={store}>
    <MainRoot/>
    </Provider>
    , document.getElementById('root'));


