import { Platform } from 'react-native';
import { 
  createStore, 
  applyMiddleware, 
  compose 
} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, promise, logger);

// Add RootReducer as argument when RootReducer is set-up
const Store = createStore(
  compose(
    middleware, 
    devTools({
      name: Platform.OS,
      hostname: "localhost",
      port: 5678
  }))
)

export default Store;