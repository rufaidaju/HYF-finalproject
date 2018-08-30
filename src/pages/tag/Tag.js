import React, { Component } from 'react';
import Header from '../../header/Header';
import Categories from './Categories';
import axios from 'axios';
/* import { BrowserHistory } from 'react-router-dom';
 */
 class Tag extends Component {
      constructor() {
      super();
        this.state = {
        tagMatches: [],
           };
      // this.findTaggedCategories = this.findTaggedCategories.bind(this);
       }


   componentDidMount() {
   axios.get(`/${this.props.match.params.tagId}`).then(res =>{
      console.log(res.data);
      const tagMatches=res.data ;
      this.setState({tagMatches:tagMatches});
    });
 }
 
  render(props) {
    // console.log(this.props.match.params.tagId);
     
    return (
      <div className="App">
       <Header />
       <Categories  tagMatches={this.state.tagMatches} mytag={this.props.match.params.tagId}  />      
     </div>
    );
  }
}

export default Tag ;


