import { Text, View, Image, Animated, Easing, ScrollView } from 'react-native';

import React from 'react';
import Carousel from '../../components/Carousel';
import HotItem from '../../components/HotItem';

import styles from './styles';
interface Props {
}
interface State {
  posAnim: any;
  currentActive: number;
}

export default class Trends extends React.Component<Props, State> {
  static navigationOptions = () => {
    return {
      tabBarLabel: '动态',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri: 'downloadCopy.png'}}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      posAnim: new Animated.Value(0),
      currentActive: 0
    };
  }
  toggleItem = (key) => {
    const posVal: number = key === 0 ? 0 : 80;
    this.setState({
      currentActive: key
    });
    Animated.timing(
      this.state.posAnim,
      {
        toValue: posVal,
        duration: 200,
        easing: Easing.quad
      }).start();
  }
  render() {
    const state: State = this.state;
    const list = [];
    for (let ind = 0; ind < 10; ind++) {
      list.push({
        title: `广告位${ind + 1}`,
        url: 'ksks'
      });
    }
    const hotList = [];
    for (let ind = 0; ind < 4; ind++) {
      hotList.push({
        title: `热门菜谱--${ind + 1}`,
        desc: `热门菜谱--${ind + 1}`,
        url: 'ksks',
        collect: 10,
        author: {
          name: 'Smith'
        }
      });
    }
    return (
      <View style={styles.container}>
        <View style={styles.tabBox}>
          <View style={styles.tabItem}>
            <Text style={styles.tabTxt} onPress={this.toggleItem.bind(this, 0)}>
              热门
            </Text>
          </View>
          <View style={styles.tabItem}>
            <Text style={styles.tabTxt} onPress={this.toggleItem.bind(this, 1)}>
              关注
            </Text>
          </View>
          <Animated.View style={[styles.tabBar, {transform: [{translateX: state.posAnim}]}]}></Animated.View>
        </View>
        <ScrollView overScrollMode='auto'>
          <Carousel list={list} />
          <View style={styles.hotContainer}>
            { hotList.length ?
              hotList.map((item, key) => (
                <HotItem key={key} data={item} />
              ))
              : null
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}
