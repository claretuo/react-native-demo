import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';
import App from './App';
const { Home, Trends, Discover, Mine, Menu, Course, Player } = App;

const menuRouter: any = StackNavigator({
  Home: {screen: Home},
  Menu: {screen: Menu, path: 'menu/:menuName'},
  Course: {screen: Course, path: 'course/:menuName'},
  Player: {screen: Player, path: 'player/:videoId'},
}, {
  initialRouteName: 'Home',
});
const myRouter: any = StackNavigator({
  Mine: {screen: Mine},
}, {
  initialRouteName: 'Mine',
});
const app: any = TabNavigator({
  Main: { screen: menuRouter},
  Discover: {screen: Discover, path: 'discover'},
  Trends: {screen: Trends, path: 'trends'},
  Mine: {screen: myRouter, path: 'mine'}
}, {
  initialRouteName: 'Main',
});

export default app;
