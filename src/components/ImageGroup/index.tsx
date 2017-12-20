import { View, Text, Image } from 'react-native';

import React, {Component} from 'react';
import styles from './style';
interface Source {
  title: string;
  url: string;
}
interface Props {
  list: Source[];
}
interface State {
}
export default class ImageGroup extends Component<Props, State> {
  constructor(props) {
    super(props);
  }
  render() {
    const props: Props = this.props;
    return (
      <View style={styles.container}>
        { props.list.map((item, key) => (
          <View style={styles.imageItem} key={key}>
            <Image style={styles.img} source={{uri: 'timg.png'}} />
            <View style={styles.titleBox}>
              <Text numberOfLines={1} style={styles.titleTxt}>
                {item.title}
              </Text>
            </View>
          </View>
          ))
        }
      </View>
    );
  }
}
