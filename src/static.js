import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { ConnectedRouter } from 'react-router-redux';
import BrandwatchReactAuth from 'brandwatch-react-auth';
import template from './index.ejs';
import configureStore from './store/configure';
import App from './containers/App';

if (typeof document !== 'undefined') {
  const history = createBrowserHistory();
  const store = configureStore(history);

  ReactDOM.render(
    <BrandwatchReactAuth
        audience={ __AUTH_AUDIENCE__ }
        domain={ __AUTH_DOMAIN__ }>
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <App />
        </ConnectedRouter>
      </Provider>
    </BrandwatchReactAuth>,
    document.getElementById('root')
  );
}

export default ({ path, webpackStats }) => {
  const { hash } = webpackStats;
  const history = createMemoryHistory();
  const store = configureStore(history);

  return template({
    htmlWebpackPlugin: {
      options: {
        stylesheet: `/assets/bundle.${hash}.min.css`,
        script: `/assets/bundle.${hash}.min.js`,
        html: renderToString(
          <Provider store={ store }>
            <StaticRouter location={ path }>
              <App />
            </StaticRouter>
          </Provider>
        ),
      },
    },
  });
};
