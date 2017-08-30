import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import sagas from '../sagas/commits';
import reducers from './root';

export default (history) => {
  const routerMiddleware = createRouterMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const finalCompose = __DEVELOPMENT__ ? composeWithDevTools : compose;

  const store = createStore(
    reducers,
    finalCompose(
      applyMiddleware(
        routerMiddleware,
        sagaMiddleware,
      )
    ),
  );

  sagaMiddleware.run(sagas);

  return store;
};
