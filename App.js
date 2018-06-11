// アプリケーションの最上レベルのコンポーネントを定義するクラス

import React, { Component } from 'react';
// Navigator
import AppNavigator from './src/components/AppNavigator'
// redux
import { Provider } from 'react-redux';
import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component<Props> {
  render() {
    return (
      // Providerを最上位とする意図は以下2つ。
      //  ・Reactコンポーネント内でreact-reduxのconnect()関数を使えるようにする
      //  ・ラップしたコンポーネントにstore情報を渡す
      <Provider store={ store }>
        {/* storeをStorageに保存するためのコンポーネント */}
        <PersistGate loading={null} persistor={persistor}>
          {/* 画面遷移するためのコンポーネント */}
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}