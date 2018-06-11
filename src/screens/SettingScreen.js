import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';
// redux
import store from '../store.js';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../actions/action.js';

class SettingScreen extends Component<Props> {
  // storeで管理しないstateは、localStateとして扱う
  constructor(props) {
    super(props);
    this.state = {
      editTopColor: this.props.topReducer.topColor,
      editSettingColor: this.props.settingReducer.settingColor
    }
  }

  render() {
    return(
      <View style={{ flex:1, backgroundColor: `#${this.props.settingReducer.settingColor}` }}>
        <Text>TopScreenColor</Text>
        <TextInput
          onChangeText={ (val) => this.setState({ editTopColor: val }) }
          onEndEditing={ () => this.props.saveTopColor(this.state.editTopColor) }
          value={this.state.editTopColor}
          maxLength={6}
          placeholder={'16進数を入力(例：ffffff)'}
          placeholderTextColor={'gray'}
        />
        <Text>ThisScreenColor</Text>
        <TextInput
          onChangeText={ (val) => this.setState({ editSettingColor: val }) }
          onEndEditing={ () => this.props.saveSettingColor(this.state.editSettingColor) }
          value={this.state.editSettingColor}
          maxLength={6}
          placeholder={'16進数を入力(例：ffffff)'}
          placeholderTextColor={'gray'}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)