import * as ActionCreator from './actionCreator.js';

/* Storeがもつstateをどのようにpropsに混ぜ込むかを決める
 * connect関数により、各コンポーネントがpropsを通じてここで定義したstateの中身を取り出せる
 */
export function mapStateToProps(state) {
  return state; // stateをすべてpropsに渡す
}

/* アクションの生成からdispatchの実行までを行う関数を定義
 * connect関数により、各コンポーネントがpropsを通じてここで定義した関数を呼び出せる
 */
export function mapDispatchToProps(dispatch) {
  return {
    // 名前を保存する
    saveName: (name) => {
      dispatch( ActionCreator.saveNameAction(name) );
    },
    // Top画面の背景色(16進数)を保存する
    saveTopColor: (color) => {
      dispatch( ActionCreator.saveTopColorAction(color) );
    },
    // 設定画面の背景色(16進数)を保存する
    saveSettingColor: (color) => {
      dispatch( ActionCreator.saveSettingColorAction(color) );
    },
  }
}