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
    this.props.addCategories(this.state.category);
  }

  borrarCategoria = () => {
    this.props.deleteCategories(this.state.category);
  }

  actualizarCategoria = () => {
    this.props.updateCategories(this.state.category)
  }

  renderCatRecipes = () => {
    return (
      <Row>
        <Col s={12}>
          <Input onChange={this.categoryDescriptionChange} value={this.state.category.description} s={6} label="Category Name" />
          <Input onChange={this.categoryIconURLChange} value={this.state.category.iconUrl} label="imageURL" s={12} />
        </Col>
        <Col s={12}>
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
              <CategoryCard key={category.id} clickEvent={() => {this.handleRecipeByCat(category)}} category={category}/>
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
})

const mapDispatchToProps = dispatch =>({
  getCategories() {
    dispatch(requestCategories());
  },
  addCategories(category) {
    dispatch(addCategories(category));
  },
  updateCategories(category) {
    dispatch(updateCategories(category));
  },
  deleteCategories(category) {
    dispatch(deleteCategories(category));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfigCategory);