// Navigator
import { StackNavigator } from 'react-navigation'
// Screen
import TopScreen from '../screens/TopScreen';
import SettingScreen from '../screens/SettingScreen';
// redux
import store from '../store.js';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/action.js';

// 初期画面を設定
const config = { initialRoute: 'Top' };
// 全体の画面遷移ルータのコンポーネント
const AppNavigator = StackNavigator({
  Top: {screen: TopScreen, navigationOptions: {title: 'トップ'},},
  Setting: {screen: SettingScreen, navigationOptions: {title: '設定'},},
}, config);

// ここは同一ボタンを連続で押下した場合に発生する多重遷移を解決するためのコード
const original = AppNavigator.router.getStateForAction;
AppNavigator.router.getStateForAction = (action, state) => {
  // stateがundefined -> 初期ページ
  // action.routeName -> 遷移先のページ名
  // state.routes[state.index].routeName -> 遷移元のページ名
  // 初期ページでなくて、遷移先と遷移元が同一なら何もしない
  if (state && action.routeName === state.routes[state.index].routeName) {
    return state;
  }
  // それ以外であれば通常通りの動作
  return original(action, state);
}

// コンポーネントからstoreにアクセスするために必要
// this.props.xxxxでstoreに保持するstate, dispatchを使用できる
//   mapStateToProps: storeに持つstateをコンポーネントに渡す
//   mapDispatchToProps: storeに持つdispatchをコンポーネントに渡す
export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);