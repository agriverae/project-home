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

    selectRecipe = (recipe) => {
        this.setState({
            recipe
        })
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

    recipeRatingChange = (e) => {
        const recipe = this.state.recipe;
        recipe.rating = e.target.value;
        this.setState({
            recipe
        })
    }

    recipeImageUrlChange = (e) => {
        const recipe = this.state.recipe;
        recipe.imageUrl = e.target.value;
        this.setState({
            recipe
        })
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        const index = e.target.getAttribute('index')
        let {recipe} = this.state;
        recipe.preparation[index] = value;
        this.setState({
            recipe
        })
    }

    agregarPaso = () => {
        let {recipe} = this.state;
        recipe.preparation.push('');
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

                const recipesChips = this.props.recipes.map(recipe => <Chip key={recipe.id} id={recipe.id} onClick={() => {this.selectRecipe({...recipe, preparation: [...recipe.preparation]})}}>
                    <img onError={this.addDefaultSrc} src={recipe.imageUrl} alt={recipes.recipeName} />
                    {recipe.recipeName}
                </Chip>);
                const form = (
                    <Row>
                        <Col s={12}>
                            <Input onChange={this.recipeNameChange} value={this.state.recipe.recipeName} s={8} label="Recipe Name" />
                            <Input onChange={this.recipeChefChange} value={this.state.recipe.chef} label="Chef" s={4} />
                            <Input onChange={this.recipeImageUrlChange} value={this.state.recipe.imageUrl} label="ImageUrl" s={11} />
                            <Input onChange={this.recipeRatingChange} value={this.state.recipe.rating} label="Rating" s={1} />
                            {this.state.recipe.preparation.map((step,i) => {
                                return <Input key={i} s={12} index={i} value={step} onChange={this.handleInputChange}/>
                            })}
                            <Button onClick={this.agregarPaso}>Agregar Paso</Button>                         
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