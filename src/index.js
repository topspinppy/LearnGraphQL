import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'

const store = createStore(
  reducers,
  applyMiddleware(thunk ,promiseMiddleware())
)
// store.subscribe(() => { console.log('subscribe', store.getState())})
// console.log('before dispatch', store.getState())

// store.dispatch({
//   type: 'INCREMENT'
// })

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
