import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import {configStore} from "./store/ConfigStore";
import MainRoutes from "./components/MainRoutes";


const store = configStore();

ReactDOM.render(
        <Provider store={store}>
            <MainRoutes />
        </Provider>
    , document.getElementById('root'));
