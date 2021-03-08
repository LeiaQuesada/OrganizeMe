import {FETCH_TODOS} from '../actions/types';
const def = (state = {}, action) => {
    switch(action.type) {
      case FETCH_TODOS:
        return action.payload;
      default:
        return state;
    }
  };
export default def