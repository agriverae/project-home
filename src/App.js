import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import { Row, Col } from "react-materialize";
import './App.scss';
import NavigationBar from './components/shared/NavigationBar'
import Home from "./components/home/Home";
import Recipe from './components/shared/Recipe/Recipe'
import Category from './components/Category/Category';
import { RecipeSearch, CategoryList } from "./components/shared/RecipeList";

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
                  <Switch>
                    <Route path="/recipe/:id" component={Recipe} />
                    <Route path="/categories" component={Category} />
                    <Route path="/recipeByCat" component={CategoryList} />
                    <Route path="/recipeSearch/:searchName" component={RecipeSearch} />
                    <Route exact path="/" component={Home} />
                  </Switch>
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
