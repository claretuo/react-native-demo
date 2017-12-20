import { View, Image, Text, TouchableOpacity } from 'react-native';

import React, {Component} from 'react';
import styles from './style';
interface Props {
  navigation: any;
}
interface State {
  current: number;
}

export default class MenuContent extends Component<Props, State> {
  constructor(props) {
    super(props);
  }
  onPress = () => {
    const {navigation} = this.props;
    navigation.navigate('Player', {
      videoId: '😄'
    });
  }
  render() {
    const showItem = {
      prev: '02 小葱拌豆腐',
      current: '03 西红柿炒鸡蛋',
      next: '04 回锅肉',
    };
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.container}>
          <View style={styles.imgBox}>
            <Image style={styles.img} source={{uri: 'timg.png'}}>
              <Image style={styles.playIcon} source={{uri: 'combinedShape.png'}} />
            </Image>
          </View>
          <View style={styles.contentBox}>
            <View style={styles.menuItem}>
              <Text style={styles.text}>{showItem.prev}</Text>
            </View>
            <View style={styles.menuItem}>
              <Text style={[styles.text, styles.active]}>{showItem.current}</Text>
            </View>
            <View style={styles.menuItem}>
              <Text style={styles.text}>{showItem.next}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
