import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Row, Input, Col, ProgressBar, Button } from "react-materialize";
import { requestCategories } from "../../actions/categoryActions";
import CategoryCard from '../shared/CategoryCard/CategoryCard';

class ConfigCategory extends Component {

  state = {
    category: {
      id: '',
      category: '',
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

  renderCatRecipes = () => {
    console.log(this.state.category);
    return (
      <Row>
        <Col s={12}>
          <Input onChange={this.categoryDescriptionChange} value={this.state.category.description} s={6} label="Category Name" />
          <Input onChange={this.categoryIconURLChange} value={this.state.category.iconUrl} label="imageURL" s={12} />
        </Col>
        <Button>Update</Button>
        <Button>Borrar</Button>
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfigCategory);