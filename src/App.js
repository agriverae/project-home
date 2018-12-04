import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { Provider } from 'react-redux';
import store from './store';
import { Row, Col } from "react-materialize";
import './App.scss';
import NavigationBar from './components/shared/NavigationBar'
import Home from "./components/home/Home";
import Recipe from './components/shared/Recipe/Recipe'
import Category from './components/Category/Category';
import { RecipeSearch, CategoryList } from "./components/shared/RecipeList";
import ConfigRecipe from "./components/ConfigRecipe/ConfigRecipe";
import ConfigCategory from './components/ConfigCategory/ConfigCategory';
import LoginComponent from './components/Login';

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
                    <Route path="/login" component={LoginComponent} />
                    <Route exact path="/" component={Home} />
                    <PrivateRoute path="/configCategory" component={ConfigCategory} />
                    <PrivateRoute path="/configRecipe" component={ConfigRecipe} />
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
