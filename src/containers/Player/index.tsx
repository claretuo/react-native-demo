import { View, Image, ScrollView, Text } from 'react-native';

import React from 'react';
import styles from './styles';
interface Props {
  navigation: any;
}
interface State {
}

export default class Menu extends React.Component<Props, State> {
  static navigationOptions = () => {
    return {
      title: null,
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri: '1.png'}}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
      header: null,
      tabBarVisible: false
    };
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView overScrollMode='auto'>
            <View>
              <Text>播放器</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
