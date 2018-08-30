import React, { Component } from 'react';
import Elements from './Elements';
import Header from '../../header/Header';
import axios from 'axios';
class Explore extends Component {
  constructor (){
    super ();
    this.state ={
      tags :[]
    };
    this.findTaggedCategories =this.findTaggedCategories.bind(this);
  }
  componentDidMount() {
    axios.get("/home").then(res =>{
      console.log(res.data);
      const tags=res.data ;
      this.setState({tags:tags});
   });
  }
  findTaggedCategories(tag) {
    this.setState({activeTag: tag}, function(){
      axios.get(`/${this.state.activeTag}`).then(res => {
        console.log(res.data);
        const tagMatches = res.data;
        this.setState({ tagMatches: tagMatches });
      });
    });
  }
  render() {
      return (
      <div >
      <Header />
      <Elements tags={this.state.tags}  findTaggedCategories={this.findTaggedCategories}/>
      </div>
    );
  }
}

export default Explore;

