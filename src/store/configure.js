import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './root';

export default (history) => {
  const middleware = routerMiddleware(history);
  const finalCompose = __DEVELOPMENT__ ? composeWithDevTools : compose;

  return createStore(
    reducers,
    finalCompose(
      applyMiddleware(middleware)
    ),
  );
};
