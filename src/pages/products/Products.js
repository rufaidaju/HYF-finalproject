import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import axios from 'axios';
class Products extends Component {


  render() {

		// console.log('ppppppppppppppppppppppppppppppppppppppppppppppppppp'+this.props.match.params.product_id)
		
		
		// console.log(this.props.match.params.product_id)
		console.log(this.props)
    return (
      <div className="App">
      <ul className="myelement myul" >
			 {this.props.catMatches.map((prod,y) => {
           return( 
			   <li key ={y} className="myliprod" >
					 <img src={prod[2]}  id ="myimg"alt =''/>
					 <p className="mypp" >{prod[0]}</p>
					 <p className="myprod" >{prod[1]}DKK</p> 
					 {/* <p className="myprod" >{prod[3]}</p> 
					 <p className="myprod" >{prod[4]}</p>  */}
 			    <br/>
			   	 <Route exact path="/explore/:tagId/:categoryId" component={() =>
			  	<Link id="btn" to={`/explore/${this.props.tagid}/${this.props.catid}/${prod[0]}`} >Show details </Link> }/>
		  	</li>
		  	)}
			)}
			 
						
		  </ul>
      </div>
    );
  }
}

export default Products;
