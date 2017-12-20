import { View, Text } from 'react-native';

import React, {Component} from 'react';
import styles from './style';
interface Props {
  title: string;
  extra?: any;
  children: any;
  [propName: string]: any;
}
interface State {
  text?: string;
}
export default class Card extends Component<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    const props: Props = (this as any).props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.titleBox, styles.flexItem]}>
            <Text style={styles.titleTxt}>
              {props.title}
            </Text>
          </View>
          <View style={[styles.flexItem, styles.extra]}>
            <View style={styles.extraContent}>
              {
                props.extra || null
              }
            </View>
          </View>
        </View>
        <View style={styles.content}>
          {
            props.children
          }
        </View>
      </View>
    );
  }
}
