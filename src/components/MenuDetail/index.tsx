import { View, Text } from 'react-native';

import React, {Component} from 'react';
import styles from './style';
interface Source {
  name: string;
  list: string[];
}
interface Props {
  source: Source;
}
interface State {
}

export default class MenuDetail extends Component<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    const props: Props = (this as any).props;

    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleTxt}>
            {props.source.name}
          </Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.listText}>
            {props.source.list.join('， ')}
          </Text>
        </View>
      </View>
    );
  }
}
