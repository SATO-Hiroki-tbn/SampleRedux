import { SAVE_NAME, SAVE_TOP_COLOR, SAVE_SETTING_COLOR } from '../constants/actionConstant';

// 名前を保存するアクション
export const saveNameAction = (editName) => {
  return {
    type: SAVE_NAME,
    name: editName
  }
}

// TOP画面の背景色(16進数)を保存するアクション
export const saveTopColorAction = (color) => {
  return {
    type: SAVE_TOP_COLOR,
    color: color
  }
}

// 設定画面の背景色(16進数)を保存するアクション
export const saveSettingColorAction = (color) => {
  return {
    type: SAVE_SETTING_COLOR,
    color: color
  }
}