import { ScrollView, View, Image, Text } from 'react-native';

import React from 'react';
import {Props, State} from '../../index.d';
import styles from './styles';
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';

export default class Mine extends React.Component<Props, State> {
  static navigationOptions = () => {
    return {
      title: '我的',
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri: 'mine.png'}}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  }
  render() {
    const user = {
      name: '莫等闲',
      collect: 29300,
      fans: 2080,
      hot: 200,
      url: '',
    };
    return (
      <View style={styles.container}>
        <ScrollView overScrollMode='auto'>
          <UserInfo user={user}/>
          <View style={styles.messageContainter}>
            <Text style={styles.msg}>
              我的消息
            </Text>
          </View>
          <Card title='美食基因'>
            <View style={styles.dnaContainer}>
              <Text>敬请期待</Text>
            </View>
          </Card>
          <Card title='健康管理'>
            <View style={styles.dnaContainer}>
              <Text>敬请期待</Text>
            </View>
          </Card>
        </ScrollView>
      </View>
    );
  }
}
