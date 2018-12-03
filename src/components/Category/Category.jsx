import React, { Component } from 'react';
import { requestCategories } from "../../actions/categoryActions";
import { requestRecipes } from "../../actions/recipeActions";
import { connect } from 'react-redux';
import { ProgressBar, Col,Row } from 'react-materialize';
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
        const { isPending, categories, error } = this.props;
        if(isPending)
            mostrar = <ProgressBar />
        else {
            if(categories.length !== 0){
                let categoriesRender = categories.map((category) =>{
                    return (
                        <CategoryCard key={category.id} clickEvent={() => {this.handleRecipeByCat(category.id)}} category={category}/>
                    )
                }); 
            
                mostrar = (
                    <Row>                    
                        {categoriesRender}
                        <Col className="category" s={12}>
                            {this.renderCatRecipes()}
                        </Col>
                    </Row>
                )
            }
            else
                mostrar = <div><h2>No categories to show</h2></div>
        }

        return (
          mostrar
        )
    }
}

const mapStateToProps = state => ({
    categories: state.requestCategories.categories,
    recipes: state.requestRecipes.recipes
});

const mapDispatchToProps = dispatch => ({
    getCategories(){
        dispatch(requestCategories());
    },
    getRecipes(){
        dispatch(requestRecipes());
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Category);