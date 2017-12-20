import { View, Text, Image, TouchableOpacity } from 'react-native';

import React, {Component} from 'react';
import styles from './style';

interface Author {
  name: string;
}
interface Source {
  title: string;
  desc: string;
  url: string;
  collect: number;
  author: Author;
}
interface Props {
  data: Source;
}
interface State {

}

export default class HotItem extends Component<Props, State> {
  public scroll;
  constructor(props) {
    super(props);
    this.state = {
      offset: {x: 0, y: 0},
      current: 0
    };
  }
  goHotItem = () => {
    console.log('go to hot menu item');
  }
  render() {
    const props: Props = this.props;
    return (
      <TouchableOpacity onPress={this.goHotItem}>
        <View style={styles.container}>
          <Image style={styles.img} source={{uri: 'timg.png'}} />
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{props.data.title}</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleTxt}>{props.data.desc}</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.contentItem}>
              <Image style={styles.contentImg} source={{uri: 'teacherDefault.png'}} />
              <Text style={styles.contentTxt}>{props.data.author.name}</Text>
            </View>
            <View style={styles.contentItem}>
              <Image style={styles.contentImg} source={{uri: 'defaultSmall.png'}} />
              <Text style={styles.contentTxt}>{props.data.collect}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
