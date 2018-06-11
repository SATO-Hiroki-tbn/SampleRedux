import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createWhitelistFilter, createBlacklistFilter } from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    // ここで明示しないreducerはローカルストレージに保存されてしまう
    // 第一引数にreducer名、第二引数にreducerで扱うstateの配列を渡す
    // ローカルストレージに保存するステートを指定(第二引数に渡さないstateはローカルストレージに保存されない)
    createWhitelistFilter('topReducer', ['', 'topColor']),
    // // ローカルストレージに保存しないステートを指定(第二引数に渡さないstateはローカルストレージに保存される)
    createBlacklistFilter('settingReducer', ['settingColor']),
  ]
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;