import { View, Text } from 'react-native';

import React, {Component} from 'react';
import styles from './style';
interface Props {
  [propName: string]: any;
}
interface State {
  text?: string;
}
export default class Achieve extends Component<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    const props: Props = (this as any).props;
    return (
      <View style={styles.container}>
        <View style={styles.flexItem}>
          <View style={styles.title}>
            <Text style={styles.titleTxt}>
              成就
            </Text>
          </View>
          <View style={styles.achiveContent}>
            <View style={styles.activeInfo}>
              <View style={styles.flexItem}>
                <Text style={styles.mainTxt}>
                  {props.achieve.time}
                </Text>
              </View>
              <View style={styles.flexItem}>
                <Text style={styles.tip}>
                  分钟
                </Text>
              </View>
            </View>
            <View style={styles.content}>
              <Text style={styles.contentTxt}>
                {props.achieve.title}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.flexItem}>
          <View style={styles.title}>
            <Text style={styles.rankTxt}>
              关注排名第{props.achieve.rank}名
            </Text>
          </View>
          <View style={styles.achiveContent}>
            <View style={styles.activeInfo}>
              <Text style={styles.mainTxt}>
                {props.achieve.num}
              </Text>
              <Text style={styles.tip}>
                道菜
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
