import { View, TextInput, Image } from 'react-native';

import React, {Component} from 'react';
import styles from './style';
interface Props {
  placeholder?: string;
  onSubmit(event: {nativeEvent: {text: string}}): void;
}
interface State {
  text?: string;
}
export default class Search extends Component<Props, State> {
  constructor(props) {
    super(props);
    (this as any).state = {
      text: ''
    };
  }
  inputChange = (text) => {
    (this as any).setState({
      text
    });
  }
  render() {
    const props: Props = (this as any).props;
    const text: string = (this as any).state.text;
    return (
      <View style={styles.box}>
        <View style={styles.container}>
          <Image style={styles.searchIcon} source={{uri: 'searchIcon.png'}} />
          <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            value={text}
            placeholder={props.placeholder || '请输入关键词搜索'}
            onChangeText={this.inputChange.bind(this)}
            onSubmitEditing={props.onSubmit} />
          </View>
        </View>
      </View>
    );
  }
}
