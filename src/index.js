import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import 'react-notifications/lib/notifications.css';
import './assets/styles/index.css'


import {configStore} from "./store/ConfigStore";
import App from "./components/App";
import {NotificationContainer} from "react-notifications";


const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <NotificationContainer/>
            <App/>
        </div>
    </Provider>
    , document.getElementById('root'));
