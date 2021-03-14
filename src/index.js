import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/lib/integration/react';



ReactDOM.render(
        <Provider store={store}>
            {/*<PersistGate loading={null} persistor={store.persistor}>*/}
                <App />
        {/*}/PersistGate>*/}
        </Provider>,
    document.getElementById('root')
);
