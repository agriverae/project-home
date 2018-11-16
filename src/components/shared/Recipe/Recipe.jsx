import React, { Component } from "react";
import axios from 'axios';
import api from '../../../config/apiconfig';
import notFound from "../../../assets/images/not-found.png";
import { MediaBox, ProgressBar } from "react-materialize";

class Recipe extends Component{

    state = {
        error: null,
        isLoaded: false,
        recipe: {}
    }

    componentDidMount(){
        axios.get(`${api}/recipes/${this.props.match.params.id}`)
            .then(result => {
                this.setState({
                    isLoaded: true,
                    recipe: result.data
                })
            })
    }

    addDefaultSrc = (e) => {
        e.target.src = notFound;
    }

    render() {

        let mostrar = null;

        if(this.state.isLoaded){
            mostrar = 
                <div>
                    <MediaBox onError={this.addDefaultSrc} src={this.state.recipe.imageUrl} width="80%"/>
                    <div>
                        <h3>{this.state.recipe.recipeName}</h3>
                    </div>
                </div>;
        }
        else{
            mostrar = <ProgressBar />;
        }

        return (
            <div>
                {mostrar}
            </div>
        )
    }
}

export default Recipe;