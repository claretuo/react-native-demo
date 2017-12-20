import { View, Image, ScrollView, Text } from 'react-native';

import React from 'react';
import Card from '../../components/Card';
import MenuDetail from '../../components/MenuDetail';
import MenuContent from '../../components/MenuContent';
import StuffItem from '../../components/StuffItem';
import styles from './styles';
interface Props {
  navigation: any;
}
interface State {
}

function randomHexColor(): string { // 随机生成十六进制颜色
 let hex = Math.floor(Math.random() * 16777216).toString(16); // 生成ffffff以内16进制数
 while (hex.length < 6) { // while循环判断hex位数，少于6位前面加0凑够6位
  hex = '0' + hex;
 }
 return '#' + hex; // 返回‘#'开头16进制颜色
}

export default class Menu extends React.Component<Props, State> {
  static navigationOptions = ({navigation}) => {
    const {state} = navigation;
    return {
      title: state.params.menuName || '菜单详情',
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={{uri: '1.png'}}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    };
  }
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    const source = {
      name: navigation.state.params.menuName,
      list: ['青椒炒肉丝', '西红柿炒鸡蛋', '小葱拌豆腐', '酸辣土豆丝', '糖醋里脊']
    };
    const stuffList = [];
    for (let ind = 0; ind < 10; ind++) {
      stuffList.push({
        name: `原料-${ind + 1}`,
        quantity: (ind + 1) * 2,
        unit: 'g'
      });
    }
    const stepList = ['准备材料', '加工原材料', '准备锅具', '烹饪', '出锅'];
    return (
      <View style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView overScrollMode='auto'>
            <MenuDetail source={source} />
            <MenuContent navigation={navigation} />
            <Card
              title='我的菜单表'
              >
              <View style={styles.paddingContainer}>
                <ScrollView
                horizontal
                scrollEventThrottle={100}
                removeClippedSubviews={false}
                automaticallyAdjustContentInsets={false}
                directionalLockEnabled
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                >
                {
                  stuffList.map((item, key) => (
                    <StuffItem key={key} source={item} />
                  ))
                }
                </ScrollView>
              </View>
            </Card>
            <Card
              title='时间： 20分钟'
              >
              <View style={styles.paddingContainer}>
                <View style={styles.people}>
                  <View style={styles.peopleContent}>
                    <Text style={styles.peopleNum}>12人学会了这道菜</Text>
                  </View>
                  <View style={styles.peopleBox}>
                    <Image style={[styles.peopleItem, {backgroundColor: randomHexColor()}]} source={{uri: 'mine.png'}} />
                    <Image style={[styles.peopleItem, {backgroundColor: randomHexColor()}]} source={{uri: 'mine.png'}} />
                    <Image style={[styles.peopleItem, {backgroundColor: randomHexColor()}]} source={{uri: 'mine.png'}} />
                    <Image style={[styles.peopleItem, {backgroundColor: randomHexColor()}]} source={{uri: 'mine.png'}} />
                    <Image style={[styles.peopleItem, {backgroundColor: randomHexColor()}]} source={{uri: 'mine.png'}} />
                    <Image style={[styles.peopleItem, {backgroundColor: randomHexColor()}]} source={{uri: 'mine.png'}} />
                    <Image style={[styles.peopleItem, {backgroundColor: randomHexColor()}]} source={{uri: 'mine.png'}} />
                  </View>
                </View>
                <View style={styles.step}>
                  <Text style={styles.stepTxt}>步骤列表</Text>
                </View>
                <View style={styles.stepDes}>
                  {
                    stepList.map((item, key) => (
                      <View key={key} style={styles.stepItem}>
                        <Text style={styles.stepDesc}>{key + 1}/{stepList.length} {item}</Text>
                      </View>
                    ))
                  }
                </View>
              </View>
            </Card>
            <Card
              title='达人动态'
              >
              <View style={styles.paddingContainer}>
                <View style={styles.people}>
                  <Text style={styles.peopleNum}>暂无</Text>
                </View>
              </View>
            </Card>
          </ScrollView>
        </View>
      </View>
    );
  }
}
