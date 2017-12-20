import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';

import React from 'react';
import Tts from 'react-native-tts';
import {Props, State} from '../../index.d';
import styles from './styles';
import Search from '../../components/Search';
import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import ImageGroup from '../../components/ImageGroup';

export default class Discover extends React.Component<Props, State> {
  static navigationOptions = () => {
    return {
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri: 'shareCopy.png'}}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  }
  searchData = (evt) => {
    const text: string = evt.nativeEvent.text;
    console.log('search, ', text);
  }
  goNext = () => {
    console.log('go next');
    Tts.voices().then(voices => console.log(voices));
    Tts.setDefaultLanguage('zh-CN');
    Tts.setDefaultVoice('com.apple.ttsbundle.Ting-Ting-compact');
    Tts.speak('继续哈哈哈哈');
  }
  render() {
    const list = [];
    for (let ind = 0; ind < 10; ind++) {
      list.push({
        title: `广告位${ind + 1}`,
        url: 'ksks'
      });
    }
    const sources = [];
    for (let ind = 0; ind < 4; ind++) {
      sources.push({
        title: `中餐中级--菜单${ind + 1}`,
        uri: 'adas'
      });
    }
    const imageList = [];
    for (let ind = 0; ind < 2; ind++) {
      imageList.push({
        title: `${ind + 1}.菜单编号${ind + 1}--一段靠谱的介绍`,
        uri: 'adas'
      });
    }
    return (
      <View style={styles.container}>
        <Search placeholder='请输入菜谱、食材、配料等关键词' onSubmit={this.searchData} />
        <View style={styles.scrollContainer}>
          <ScrollView overScrollMode='auto'>
            <View style={styles.carouselContainer}>
              <Carousel list={list} />
            </View>
            <Card
            title='厨房菜谱推荐'
            extra={
              <TouchableOpacity onPress={this.goNext}>
                <Text>菜谱分类</Text>
              </TouchableOpacity>
            }>
              <View style={styles.listContainer}>
                { sources && sources.length ?
                  sources.map((item, key) => (
                    <View key={key} style={styles.listItem}>
                      <Image source={{uri: item.url}} style={styles.listImg} />
                      <View style={styles.titleBox}>
                        <Text style={styles.titleTxt}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  ))
                  : null
                }
              </View>
            </Card>
            <Card
            title='达人菜谱推荐'
            extra={
              <TouchableOpacity onPress={this.goNext}>
                <Text>菜谱分类</Text>
              </TouchableOpacity>
            }>
              <View style={styles.listContainer}>
                { sources && sources.length ?
                  sources.map((item, key) => (
                    <View key={key} style={styles.listItem}>
                      <Image source={{uri: item.url}} style={styles.listImg} />
                      <View style={styles.titleBox}>
                        <Text style={styles.titleTxt}>
                          {item.title}
                        </Text>
                      </View>
                    </View>
                  ))
                  : null
                }
              </View>
            </Card>
            <Card title='本周人气榜'>
              <ImageGroup list={imageList} />
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}
