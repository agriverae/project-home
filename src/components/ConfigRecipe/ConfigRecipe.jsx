import React, {Component} from "react";
import {connect} from 'react-redux';
import { requestRecipes } from "../../actions/recipeActions";
import { ProgressBar,Chip, Row, Col, Button, Input } from 'react-materialize';
import notFound from "../../assets/images/not-found.png";

class ConfigRecipe extends Component{

    state = {
        recipe: {
            categoryId: '',
            recipeName: '',
            chef: '',
            preparation: [],
            rating: '',
            imageUrl: '',
            publishDate: '',
        }
    }

    componentDidMount(){
        this.props.getRecipes()
    }

    addDefaultSrc = (e) => {
        e.target.src = notFound;
    }

    crearRecipe = () => {

    }

    actualizarRecipe = () => {

    }

    borrarRecipe = () => {

    }

    recipeNameChange = (e) => {
        const recipe = this.state.recipe;
        recipe.recipeName = e.target.value;
        this.setState({
            recipe
        })
    }

    recipeChefChange = (e) => {
        const recipe = this.state.recipe;
        recipe.chef = e.target.value;
        this.setState({
            recipe
        })
    }

    render(){
        const { isPending, recipes, error } = this.props;
        let mostrar = null;

        if(isPending)
            mostrar = <ProgressBar />
        else {
            if(recipes.length !== 0){
                const recipesChips = this.props.recipes.map(recipe => <Chip>
                    <img onError={this.addDefaultSrc} src={recipe.imageUrl} alt={recipes.recipeName} />
                    {recipe.recipeName}
                </Chip>);

                const form = (
                    <Row>
                        <Col s={12}>
                            <Input onChange={this.recipeNameChange} value={this.state.recipe.recipeName} s={6} label="Recipe Name" />
                            <Input onChange={this.recipeChefChange} value={this.state.recipe.chef} label="chef" s={12} />
                        </Col>
                        <Col s={12}>
                            <Button onClick={this.crearRecipe}>Crear</Button>
                            <Button onClick={this.actualizarRecipe}>Update</Button>
                            <Button onClick={this.borrarRecipe}>Borrar</Button>
                        </Col>
                    </Row>
                );

                mostrar = 
                (
                    <div>
                        {form}
                        {recipesChips}
                    </div>
                )
            }
            else
                mostrar = <div><h2>No categories to show</h2></div>
        }


        return mostrar;
    }
}

const mapStateToProps = state => ({
    recipes: state.requestRecipes.recipes
});

const mapDispatchToProps = dispatch => ({
    getRecipes(){
        dispatch(requestRecipes());
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(ConfigRecipe);