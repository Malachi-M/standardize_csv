import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducers/rootReducer'
import { ThemeProvider } from 'styled-material-components'
import Main from './components/main'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
)
const theme = {
  maxWidth: '62vw',
  background: '#f4f4f4',
  primary: '#303a52',
  dark_primary: '#081429',
  light_primary: '#5b647e',
  accent: '#67ec7a',
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
