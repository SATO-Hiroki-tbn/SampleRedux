// @flow
import { SAVE_NAME, SAVE_TOP_COLOR } from '../constants/actionConstant';

const initialState: TopState = {
  name: '',
  topColor: '036635'
};

export default function topReducer(state: TopState = initialState, action: any) {
  switch(action.type) {
    
    case SAVE_NAME:
      return { ...state, name: action.name }

    case SAVE_TOP_COLOR:
      return{ ...state, topColor: action.color}

    default:
      return state
  }
}