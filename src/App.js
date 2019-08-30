import React, { Component } from 'react'
import './App.css'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/rootReducer'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-material-components'
import Main from './components/main'

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
const theme = {
  maxWidth: '62vw',
  primary: '#303a52',
  dark_primary: '#081429',
  light_primary: '#5b647e',
  accent: '#2ae746',
  warning: '#ff512f',
  secondary: '#90e1ff',
  dark_secondary: '#c4ffff',
  light_secondary: '#5cafcc',
  textColors: {
    primary: '#212121',
    secondary: '#757575'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Main />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App
