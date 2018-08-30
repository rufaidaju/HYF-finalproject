import React, { Component } from 'react';
import Header from '../../header/Header';
import Products from './Products';
import axios from 'axios';


class MyProducts extends Component {

  constructor() {
    super();
      this.state = {
      catMatches: [],
         };
     }


     componentDidMount() {
      axios.get(`/${this.props.match.params.tagId}/${this.props.match.params.categoryId}`).then(res =>{
        let elements=[]
         res.data.map(item => {
          let element=[];
           element.push(item.heading);
           element.push(item.pricing.price);
           element.push(item.images.view);
           element.push(item.run_from);
           element.push(item.run_till)
           elements.push(element);
          });
          console.log(elements +'xxxxxxxxxxxxxxxxxis')
         const catMatches=elements ;
         this.setState({catMatches:catMatches});
       });
    }

  render() {
      // console.log( this.props)
    
    console.log('tagId:'+this.props.match.params.tagId+'  catId:'+this.props.match.params.categoryId  );

    return (
      <div className="App">
      <Header />
      <Products  catMatches={this.state.catMatches} tagid={this.props.match.params.tagId}  catid={this.props.match.params.categoryId}/>
		
      </div>
    );
  }
}

export default MyProducts;
