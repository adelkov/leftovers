import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import {configStore} from "./store/ConfigStore";
import App from "./components/App";


const store = configStore();

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
    , document.getElementById('root'));
