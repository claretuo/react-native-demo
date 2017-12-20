import { View, ScrollView, Text } from 'react-native';

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

export default class Course extends React.Component<Props, State> {
  static navigationOptions = () => {
    return {
      title: null,
      tabBarLabel: null,
      tabBarIcon: null,
    };
  }
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation: {state}} = this.props;
    const source = {
      name: state.params.menuName,
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
            <MenuContent navigation={this.props.navigation} />
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
                  <Text style={styles.peopleNum}>12人学会了这道菜</Text>
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
