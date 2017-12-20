import { View, Text, Dimensions, Image, TouchableHighlight } from 'react-native';

import React, {Component} from 'react';
import styles from './style';
interface Source {
  name: string;
  url: string;
  total?: number;
  learned?: number;
  description: string;
}
interface Props {
  navigation: any;
  source: Source;
  process?: boolean;
}
interface State {
  text?: string;
}

const width = Dimensions.get('window').width;
export default class Card extends Component<Props, State> {
  constructor(props) {
    super(props);
  }
  onPress = () => {
    const {navigation, source} = this.props;
    navigation.navigate('Menu', {
      menuName: source.name
    });
  }
  render() {
    const props: Props = (this as any).props;

    return (
      <TouchableHighlight onPress={this.onPress}>
        <View style={styles.container}>
          <View style={styles.menuItem}>
            <View style={styles.header}>
              <View style={[styles.title, styles.flexItem]}>
                <Text style={styles.mainTxt}>{props.source.name}</Text>
              </View>
              <View style={[styles.image, styles.flexItem]}>
                <Image style={styles.imgItem} source={{uri: 'timg.png'}} />
              </View>
            </View>
            <View style={styles.description}>
              { props.source.total && props.source.learned ?
                <Text style={styles.num}>
                  共{props.source.total}道菜，已学{props.source.learned}道菜
                </Text>
                :
                <Text style={styles.num}>
                  {props.source.description}
                </Text>
              }
            </View>
          </View>
          { props.process ?
            <View style={styles.processContainer}>
              <View style={[styles.processBar, {width: (width - 4) * props.source.learned / props.source.total }]}></View>
            </View>
            : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}
