import React, { Component } from 'react';
import logo from './logo.svg';

//components
import Emoji from './Emoji';
import TodoList from './views/TodoLists';

//styles
import './App.scss';
import './App.less';
import './App.styl';

//modules
import cssStyles from './First.module.css';
import sassStyles from './Second.module.scss';
import lessStyles from './Third.module.less';
import stylusStyles from './Fourth.module.styl';

import store from './stores/TodoStore';


class App extends Component {
  render() {
    return (
      <div className="App">
        <a>Hello Mobx</a>
        <div><TodoList store={store}/></div>
      </div>
    );
  }
}

export default App;
