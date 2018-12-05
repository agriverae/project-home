import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Row, Input, Col, ProgressBar, Button } from "react-materialize";
import { requestCategories, addCategories, updateCategories, deleteCategories } from "../../actions/categoryActions";
import CategoryCard from '../shared/CategoryCard/CategoryCard';

class ConfigCategory extends Component {

  state = {
    category: {
      id: '',
      description: '',
      iconUrl: '',
    }
  }

  componentDidMount(){
    this.props.getCategories();
  }

  handleRecipeByCat = (category) => {
    this.setState({
      category
    })
  }

  categoryDescriptionChange = (e) => {
    const category = this.state.category;
    category.description = e.target.value;
    this.setState({
      category
    })
  }

  categoryIconURLChange = (e) => {
    const category = this.state.category;
    category.iconUrl = e.target.value;
    this.setState({
      category
    })
  }

  crearCategoria = () => {
    this.props.addCategories(this.state.category, this.props.token);
  }

  borrarCategoria = () => {
    this.props.deleteCategories(this.state.category, this.props.token);
  }

  actualizarCategoria = () => {
    this.props.updateCategories(this.state.category, this.props.token)
  }

  reset = () => {
    this.setState({
      category: {
        id: '',
        description: '',
        iconUrl: '',
      }
    })
  }

  renderCatRecipes = () => {
    return (
      <Row>
        <Col s={12}>
          <Input onChange={this.categoryDescriptionChange} value={this.state.category.description} s={6} label="Category Name" />
          <Input onChange={this.categoryIconURLChange} value={this.state.category.iconUrl} label="imageURL" s={12} />
        </Col>
        <Col s={12}>
          <Button className="" onClick={this.reset}>New</Button>
          <Button onClick={this.crearCategoria}>Crear</Button>
          <Button onClick={this.actualizarCategoria}>Update</Button>
          <Button onClick={this.borrarCategoria}>Borrar</Button>
        </Col>
      </Row>
    )
  }

  render(){
    let mostrar = null;
    const {categories, isPending, error} = this.props;
    if(isPending)
      mostrar = <ProgressBar />
    else {
      if(categories.length !== 0){
        let categoriesRender = categories.map((category) =>{
          return (
              <CategoryCard key={category.id} clickEvent={() => {this.handleRecipeByCat({...category})}} category={category}/>
          )
        });
    
        mostrar = (
          <div>
            {categoriesRender}
            {this.renderCatRecipes()}
          </div>
        )
      }
      else
        mostrar = <div><h2>No hay categories para mostrar</h2></div>
    }

    return (
      mostrar
    );
  }  
}

const mapStateToProps = state => ({
  categories: state.requestCategories.categories,
  token: state.loginUsuario.token,
})

const mapDispatchToProps = dispatch =>({
  getCategories() {
    dispatch(requestCategories());
  },
  addCategories(category, token) {
    dispatch(addCategories(category, token));
  },
  updateCategories(category, token) {
    dispatch(updateCategories(category, token));
  },
  deleteCategories(category, token) {
    dispatch(deleteCategories(category, token));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfigCategory);