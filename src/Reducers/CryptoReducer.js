import { 
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS, 
  FETCHING_COIN_DATA_FAIL 
} from '../Utils/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
};

export default function(state=[], action){
  switch(action.type){
    case FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null
      })
    default:
      return state;
  }
}