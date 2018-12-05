import React, {Component} from "react";
import {connect} from 'react-redux';
import { requestRecipes, addRecipe, updateRecipe,deleteRecipe } from "../../actions/recipeActions";
import { requestCategories } from "../../actions/categoryActions"
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
        this.props.getRecipes();
        this.props.getCategories();
    }

    selectRecipe = (recipe) => {
        this.setState({
            recipe
        })
    }

    addDefaultSrc = (e) => {
        e.target.src = notFound;
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

    recipeCategoryChange = (e) => {
        const recipe = this.state.recipe;
        recipe.categoryId = e.target.value;
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

    reset = () => {
        this.setState({
            recipe: {
                categoryId: '',
                recipeName: '',
                chef: '',
                preparation: [],
                rating: '',
                imageUrl: '',
                publishDate: '',
            }
        })
    }


    render(){
        const { isPending, recipes, categories, error } = this.props;
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
                            <Input onChange={this.recipeCategoryChange} s={12} type='select' label="Categories" value={this.state.recipe.categoryId}>
                                {categories.map((category,i) => {
                                    return <option key={i} value={category.id}>{category.description}</option>
                                })}
                            </Input>
                            {this.state.recipe.preparation.map((step,i) => {
                                return <Input key={i} s={12} index={i} value={step} onChange={this.handleInputChange}/>
                            })}
                            <Button className="step red lighten-2" onClick={this.agregarPaso}>Add Step</Button>                         
                        </Col>
                        <Col s={12}>
                            <Button className="action-button" onClick={this.reset}>New</Button>
                            <Button className="action-button blue" onClick={ () => this.props.crearRecipe(this.state.recipe, this.props.token)}>Create</Button>
                            <Button className="action-button green" onClick={() => this.props.actualizarRecipe(this.state.recipe, this.props.token)}>Update</Button>
                            <Button className="action-button red" onClick={() => this.props.deleteRecipe(this.state.recipe, this.props.token)}>Delete</Button>
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
    recipes: state.requestRecipes.recipes,
    categories: state.requestCategories.categories,
    token: state.loginUsuario.token,
});

const mapDispatchToProps = dispatch => ({
    getCategories() {
        dispatch(requestCategories());
    },
    getRecipes(){
        dispatch(requestRecipes());
    },
    crearRecipe(recipe, token){
        dispatch(addRecipe(recipe), token);
    },
    actualizarRecipe(recipe, token){
        dispatch(updateRecipe(recipe, token));
    },
    deleteRecipe(category, token) {
        dispatch(deleteRecipe(category, token));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(ConfigRecipe);