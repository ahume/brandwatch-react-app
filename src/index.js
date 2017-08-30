import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import BrandwatchReactAuth from 'brandwatch-react-auth';
import configureStore from './store/configure';
import App from './containers/App';

const history = createHistory();
const store = configureStore(history);

function render(Component) {
  ReactDOM.render(
    <BrandwatchReactAuth
        audience={ __AUTH_AUDIENCE__ }
        domain={ __AUTH_DOMAIN__ }>
      <AppContainer>
        <Provider store={ store }>
          <ConnectedRouter history={ history }>
            <Component />
          </ConnectedRouter>
        </Provider>
      </AppContainer>
    </BrandwatchReactAuth>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => render(App));
}
