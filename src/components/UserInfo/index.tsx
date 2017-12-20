import { View, Text, Image, TouchableOpacity } from 'react-native';

import React, {Component} from 'react';
import styles from './style';

interface User {
  name: string;
  collect: number;
  fans: number;
  hot: number;
  url: string;
}
interface Props {
  user: User;
}
interface State {

}

export default class UserInfo extends Component<Props, State> {
  public scroll;
  constructor(props) {
    super(props);
  }
  goDetail = () => {
    console.log('go to hot menu item');
  }
  render() {
    const {user} = this.props;
    return (
      <TouchableOpacity onPress={this.goDetail}>
        <View style={styles.container}>
          <Image style={styles.img} source={{uri: 'teacherDefault.png'}} />
          <View style={styles.descContent}>
            <View style={styles.basic}>
              <View style={styles.userName}>
                <Text style={styles.nameTxt} numberOfLines={1}>{user.name}</Text>
              </View>
              <View style={styles.maiSite}>
                <Text style={styles.siteTxt}>个人主页</Text>
              </View>
            </View>
            <View style={styles.others}>
              <View style={styles.item}>
                <Text style={styles.txt}>关注 {user.collect}</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.txt}>粉丝 {user.fans}</Text>
              </View>
              <View style={styles.item}>
                <Text style={styles.txt}>动态 {user.hot}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
