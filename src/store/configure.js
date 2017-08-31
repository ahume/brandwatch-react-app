import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import sagas from '../sagas/commits';
import reducers from './root';

export default (history) => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);
  const middlewares = [sagaMiddleware, routerMiddleware];
  middlewares.push(createSagaMiddleware());

  if (typeof document !== 'undefined' && __MIXPANEL_TOKEN__) {
    middlewares.push(require('remimi')(__MIXPANEL_TOKEN__, {
      uniqueIdSelector: ({ profile }) => profile.id,
      personSelector: ({ profile }) => ({
        clientId: profile.id,
        clientName: null,
        salesForceId: null,
        $first_name: profile.name,
        $last_name: null,
        $email: profile.email,
      }),
    }));
  }

  const finalCompose = __DEVELOPMENT__ ? composeWithDevTools : compose;

  const store = createStore(
    reducers,
    finalCompose(
      applyMiddleware(...middlewares)
    ),
  );

  sagaMiddleware.run(sagas);

  return store;
};
