import * as serviceWorker from './serviceWorker';

//React
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './redux/store/rootReducers';

//Componente principal
import App from './componentes/App';

//Se crea el store principal de nuestro Redux
const store = createStore(rootReducers);

const Main = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Main, document.getElementById('root'));

serviceWorker.unregister();
