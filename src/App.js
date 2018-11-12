import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { Row, Col } from "react-materialize";
import './App.scss';
import NavigationBar from './components/shared/navigationbar/navigationbar'
import Home from "./components/home/Home";


const App = () =>  {
  
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Row>
            <Col s={2}></Col>
            <Col s={8}>
              <Row>
                <Col s={12}>
                  <NavigationBar />
                  <Route exact path="/" component={Home} />
                </Col>
              </Row>
            </Col>
            <Col s={2}></Col>
          </Row>
        </BrowserRouter>
      </Provider>
    );
}

export default App;
