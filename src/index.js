import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import 'react-notifications/lib/notifications.css';
import './assets/styles/index.css'


import {configStore} from "./store/ConfigStore";
import App from "./components/App";
import {NotificationContainer} from "react-notifications";
import LeftoverMap from "./components/views/Admin/Map/LeftoverMap";


const store = configStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <NotificationContainer/>
            <App
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC_YLBHJrEc36MdARSyS_qpqWHp8OBkyhA&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{height: `100%`}}/>}
            />
        </div>
    </Provider>
    , document.getElementById('root'));
