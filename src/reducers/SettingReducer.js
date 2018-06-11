// @flow
import { SAVE_SETTING_COLOR } from '../constants/actionConstant';

const initialState: SettingState = {
  settingColor: 'cca01d'
};

export default function settingReducer(state: SettingState = initialState, action: any) {
  switch(action.type) {
    
    case SAVE_SETTING_COLOR:
      return{ ...state, settingColor: action.color}

    default:
      return state
  }
}