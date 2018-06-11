import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Button,
  TextInput,
  Text,
  View
} from 'react-native';
// redux
import store from '../store.js';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/action.js';

class TopScreen extends Component<Props> {
  // storeで管理しないstateは、localStateとして扱う
  constructor(props) {
    super(props);
    this.state = {
      editName: this.props.topReducer.name
    }
  }

/* 確認ダイアログ */
  showAlert() {
    Alert.alert(
      'Save', // ダイアログのタイトル
      `Name will be saved...`, // ダイアログの説明文
      [
        { text: 'Cancel', onPress: () => {}, style: 'default' },
        { text: 'OK', onPress: () => this.props.saveName(this.state.editName), style: 'default' },
      ],
      { cancelable: true } // trueの場合、ダイアログの外側をタップで閉じる
    )
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={{ flex:1, backgroundColor: `#${this.props.topReducer.topColor}` }}>
        <Text>Name</Text>
        <TextInput
          onChangeText={ (val) => this.setState({ editName: val }) }
          value={this.state.editName}
          maxLength={10}
          placeholder={'10桁まで入力可能'}
          placeholderTextColor={'gray'}
        />
        <Button
          // style={styles.button}
          onPress={ () => this.showAlert() }
          title="save"
          color="#841584"
        />
        <Text style={{ fontSize:20, margin:'5%' }}>{this.props.topReducer.name}</Text>
        <Button
          onPress = {() => navigate('Setting')}
          title="Setting"
          color="#be0032"
        />

      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopScreen)