import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './App.css';
import Header from './Commons/Header';
import Home from './Home/index';
import CreateList from './CreateList/index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
        main: '#e91e63',
      },
      secondary: {
        main: '#00b0ff',
      },
    },
});

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <MuiThemeProvider theme={theme}>
          <Router>
            <div>
              <Header />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list/:action" component={CreateList} />
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
