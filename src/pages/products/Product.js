import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../../header/Header';

class Products extends Component {
  constructor() {
    super();
    this.state = {
      productdet: [],
         };
     }
	componentDidMount() {
		axios.get(`/${this.props.match.params.tagId}/${this.props.match.params.categoryId}`).then(res =>{
      let element=[]
			 res.data.map(item => {
         if (item.heading ==this.props.match.params.productId){
          
          element.push(item.heading);
          element.push(item.pricing.price);
          element.push(item.images.view);
          element.push(item.run_from);
          element.push(item.run_till)
          element.push(item.description);
          element.push(item.branding.name);
          element.push(item.branding.website);
         }
				
				 
				});
				console.log('this is '+ element +'xxxxxxxxxxxxxxxxxis')
			//  const catMatches=elements ;
       this.setState({productdet:element});
      // console.log('ppppppppppppppppppppppppppppppppppppppppppppppppppp'+this.props.match.params.productId)
      
		 });
	}

  render() {
    // console.log(this.props.match.params.productId+'fffffffffffffffffffffffffffffffff');
    return (
       <div className="App ">
        <Header />
        <div className="mypro">
      {/* <ul className="myelement myul" >
			   <li  className="myliprod" > */}
         
					 <img src={this.state.productdet[2]}  className ="myimg"alt =''/>
					 <p className="mypp" >{this.state.productdet[0]}</p>
					 <p className="myprod" >{this.state.productdet[1]}DKK</p> 
					 <p className="myprod" >{this.state.productdet[3]}</p> 
					 <p className="myprod" >{this.state.productdet[4]}</p> 
           <p className="myprod" >{this.state.productdet[5]}</p> 
           <p className="myprod" >{this.state.productdet[6]}</p> 
           <p className="myprod" >{this.state.productdet[7]}</p> 
 			    <br/>
			   	 <Route exact path="/explore/:tagId/:categoryId" component={() =>
			  	<Link id="btn" to={`/explore/${this.props.tagid}/${this.props.catid}/${this.state.productdet[0]}`} >Show details </Link> }/>
		  	{/* </li> */}
		  
			 
						
      {/* </ul> */}
      </div>
      </div>
    );
  }
}

export default Products;
