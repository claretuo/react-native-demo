import React, { Component } from 'react';
// import { Provider } from 'react-redux';

// import configureStore from './store/index';
// const store = configureStore();

import Root from './Router';

interface Props {
}
interface State {
}

export default class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    // this.state = {
    //   isLoading: true,
    //   store: configureStore(() => { this.setState({ isLoading: false }); })
    // };
  }
  render() {
    // if (this.state.isLoading) {
    //   console.log('loading app');
    //   return null;
    // }
    return (
      // <Provider>
        <Root />
      // </Provider>
    );
  }
}
