import { Text, View, Image, TouchableOpacity, ScrollView, NativeAppEventEmitter } from 'react-native';
import React from 'react';
import {Props, State} from '../../index.d';
import Search from '../../components/Search';
import Achieve from '../../components/Achieve';
import Card from '../../components/Card';
import MenuItem from '../../components/MenuItem';
import styles from './styles';
import SpeechToText from 'react-native-speech-to-text-ios';
// let speakStr = '';
export default class Home extends React.Component<Props, State> {
  static navigationOptions = () => {
    return {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri: '1.png'}}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
      header: () => null
    };
  }
  constructor(props) {
    super(props);
    (this as any).subscription = NativeAppEventEmitter.addListener(
      'SpeechToText',
      (result) => {
        if ((result as any).error) {
          alert(JSON.stringify((result as any).error));
        } else {
          const str: string = (result as any).bestTranscription.formattedString;
          console.log(str);
          console.log((result as any).bestTranscription);
          console.log((result as any).isFinal);
          if (str && str.indexOf('继续') !== -1) {
            SpeechToText.stopRecognition();
          }
        }
      }
    );
  }

  searchData = (evt) => {
    const text: string = evt.nativeEvent.text;
    console.log('search, ', text);
  }
  addMenu = () => {
    console.log('add new menu');
    SpeechToText.startRecognition('zh-CN');
  }
  componentWillUnmount() {
    if ((this as any).subscription !== null) {
      (this as any).subscription.remove();
      (this as any).subscription = null;
    }
  }
  render() {
    const {navigation} = this.props;
    const dataSource: any[] = [];
    for (let ind = 0; ind < 10; ind++) {
      dataSource.push({
        name: `第${ind + 1}道菜`,
        url: '',
        total: (ind + 1) * 4,
        learned: Math.ceil(Math.random() * (ind + 1) * 4),
      });
    }
    const recommend = {
      name: '辣家私厨-蒜蓉小辣椒',
      url: '',
      description: '大厨视频--手把手教你做最好吃的蒜蓉小辣椒'
    };
    return (
      <View style={styles.container}>
        <Search placeholder='请输入要查找的菜谱' onSubmit={this.searchData} />
        <View style={styles.scrollContainer}>
          <ScrollView overScrollMode='auto'>
            <Achieve achieve={{title: '青铜级大厨', time: 240, rank: 5, num: 40}} />
            <Card
              title='我的菜单表'
              extra={
                <TouchableOpacity onPress={this.addMenu}>
                  <Text style={{color: '#676767'}}>+ 添加菜单</Text>
                </TouchableOpacity>
              }>
              <View>
                { dataSource && dataSource.length ?
                  dataSource.map((item, key) => (
                    <MenuItem key={key} source={item} process navigation={navigation} />
                  ))
                  : null
                }
              </View>
            </Card>
            <Card title='今日推荐'>
                <MenuItem source={recommend} navigation={navigation} />
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}
