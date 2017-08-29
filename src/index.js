import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducers from './store';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(middleware)
  ),
);

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <div>
            <Route component={ Component } exact path="/" />
          </div>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App));
}
