import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './screens/Login'
import DefaultLayout from './screens/DefaultLayout/DefaultLayout'
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "./reducers";

export let store = createStore(allReducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        {/* <React.Suspense fallback={loading}> */}
        <Switch>
          <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
          {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} /> */}
          {/* <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} /> */}
          {/* <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
          {/* <Route path="/" name="Home" render={props => <TheLayout {...props}/>} /> */}
          <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
        </Switch>
        {/* </React.Suspense> */}
      </HashRouter>
    </Provider>
  );
}

export default App;
