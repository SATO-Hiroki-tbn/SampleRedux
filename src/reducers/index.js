import { combineReducers } from 'redux';
import topReducer from './TopReducer';
import settingReducer from './SettingReducer';

// ある程度の粒度でまとめた複数のreducerを、さらに一つのredurcerにまとめる
// combineReducers()がreducerを返す。storeで使用する。
export default combineReducers({
  topReducer, settingReducer
})