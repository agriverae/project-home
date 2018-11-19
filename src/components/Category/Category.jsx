import React, { Component } from 'react';
import { fetchAllCategories } from "../../actions/categoryActions";
import { requestRecipes } from "../../actions/recipeActions";
import { connect } from 'react-redux';
import { ProgressBar, Col } from 'react-materialize';
import CategoryCard from '../shared/CategoryCard/CategoryCard'
import { CategoryList } from "../shared/RecipeList";

class Category extends Component {

    state = {
        categoryId: 1
    }

    componentDidMount(){
        this.props.getCategories();
        this.props.getRecipes();
    }

    handleRecipeByCat = (categoryId) => {
        this.setState({
            categoryId
        })
    }

    renderCatRecipes = () => {
        let catRecipes = this.props.recipes.filter( recipe => recipe.categoryId === this.state.categoryId)
        return <CategoryList recipes={catRecipes}  />
    }

    render(){
        let mostrar = null;

        if(this.props.categories.length === 0){
            mostrar = <ProgressBar />
        }
        else {
            let categories = this.props.categories.map((category) =>{
                return (
                    <CategoryCard key={category.id} clickEvent={() => {this.handleRecipeByCat(category.id)}} category={category}/>
                )
            }); 

            mostrar = (
                <div>                    
                    {categories}
                    <Col s={12}>
                        {this.renderCatRecipes()}
                    </Col>
                </div>
            )
        }

        return (
          mostrar
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories.categories,
    recipes: state.requestRecipes.recipes
});

const mapDispatchToProps = dispatch => ({
    getCategories(){
        dispatch(fetchAllCategories());
    },
    getRecipes(){
        dispatch(requestRecipes());
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Category);