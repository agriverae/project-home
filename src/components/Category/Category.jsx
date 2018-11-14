import React, { Component } from 'react';
import { fetchAllCategories } from "../../actions/categoryActions";
import { connect } from 'react-redux';
import { ProgressBar } from 'react-materialize';
import CategoryCard from '../shared/CategoryCard/CategoryCard'

class Category extends Component {

    componentDidMount(){
        this.props.getCategories();
    }

    render(){
        let mostrar;

        if(this.props.categories.length === 0){
            mostrar = <ProgressBar />
        }
        else {
            
          mostrar = this.props.categories.map((category) =>{
            let catRecipe = this.props.recipes.filter((recipe) => recipe.categoryId === category.id);
            return <CategoryCard category={category} recipes={catRecipe} />}
          ); 
        }
    
        return (
          mostrar
        )
    }
}

const mapStateToProps = state => ({
    categories: state.categories.categories,
    recipes: state.recipes.recipes
});

const mapDispatchToProps = dispatch => ({
    getCategories(){
        dispatch(fetchAllCategories());
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Category);