import { View, Text } from 'react-native';

import React, {Component} from 'react';
import styles from './style';
interface Source {
  name: string;
  quantity: number;
  unit: string;
}
interface Props {
  source: Source;
}
interface State {
}
export default class StuffItem extends Component<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    const {source} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bigBox}>
          <Text style={styles.title}>{source.name}</Text>
        </View>
        <View style={styles.desc}>
          <Text style={styles.txt}>{source.name}</Text>
        </View>
        <View style={styles.desc}>
          <Text style={[styles.txt, styles.grey]}>{source.quantity}{source.unit}</Text>
        </View>
      </View>
    );
  }
}
