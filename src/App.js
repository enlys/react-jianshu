import React from 'react';

import Header from './common/header/index'
import { Provider } from 'react-redux';
import {BrowserRouter, Route}from 'react-router-dom';
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import { GlobalStyle } from './style'
import store from './store';
import Home from './pages/home'
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";
function App() {
  return (
    <Provider store={store}>
    <React.Fragment>
        <GlobalStyle/>
        <GlobalStyleFont/>
        
        <BrowserRouter>
        <div>
        <Header></Header>
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}/>
        <Route path='/write' exact component={Write}/>
        <Route path='/detail/:id' exact  component={Detail}></Route>
        </div>
        </BrowserRouter>
    </React.Fragment>
    </Provider>
  
  
   
  );
}

export default App;
