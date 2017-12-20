import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';

import React, {Component} from 'react';
import styles from './style';
interface Source {
  title: string;
  url: string;
}
interface Props {
  style?: any;
  list: Source[];
}
interface State {
  offset: any;
  current: number;
}
const deviceWidth = Dimensions.get('window').width;
export default class Carousel extends Component<Props, State> {
  public scroll;
  constructor(props) {
    super(props);
    this.state = {
      offset: {x: 0, y: 0},
      current: 0
    };
  }
  saveScroll = (scroll) => {
    this.scroll = scroll;
  }
  toggleItem = (key) => {
    const { offset } = this.state;
    this.setState({
      offset: Object.assign({}, offset, { x: key * deviceWidth}),
      current: key
    });
    this.scroll.scrollTo({x: key * deviceWidth, animated: false});
  }
  onScroll = (evt) => {
    const offset: any = evt.nativeEvent.contentOffset;
    console.log('scroll', offset.x, deviceWidth, Math.floor(offset.x / deviceWidth));
    this.setState({
      offset,
      current: Math.floor(offset.x / deviceWidth)
    });
  }
  render() {
    const props: Props = this.props;
    const state: State = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
        ref={this.saveScroll}
        bounces={false}
        horizontal
        pagingEnabled
        scrollEventThrottle={100}
        removeClippedSubviews={false}
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={props.style}
        contentOffset={state.offset}
        onScroll={this.onScroll}
        >
          { props.list && props.list.length ?
            props.list.map((item, key) => (
              <View key={key} style={styles.carouselItem}>
                <Image style={styles.mainImg} source={{uri: 'timg.png'}} />
                <View style={styles.titleBox}>
                  <Text style={styles.titleTxt}>
                    {item.title}
                  </Text>
                </View>
              </View>
            ))
            : null
          }
        </ScrollView>
        <View style={styles.dotBox}>
          <View style={styles.dotContainer}>
            { props.list && props.list.length ?
              props.list.map((item, key) => (
                <TouchableOpacity key={`${item}${key}`} onPress={this.toggleItem.bind(this, key)}>
                  <View style={[styles.dotItem, (key === state.current ? styles.active : null)]}></View>
                </TouchableOpacity>
              ))
              : null
            }
          </View>
        </View>
      </View>
    );
  }
}
