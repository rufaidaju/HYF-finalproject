import React from 'react';
import '../../index.css';
import {Route, Link} from 'react-router-dom';


class Elements extends React.Component {
	
   render(props) {
		//  console.log("thhhhhhhhhiss"+ this.props.tags);
		return	(
		<div >
		<ul className="myelement" >
		{this.props.tags.map (function(tag){return(
				<div key ={tag.tag_id}  > 
			       <li   className="myli">
				   {/* <img id="myimg" src={tag.url} /> */}
				   <p  className="myp">{tag.tag_name}</p>
				   <br/>
				   
				   <Route exact path="/explore" component={() =>	
				   
			     	 <Link id="btn" to={`/explore/${tag.tag_name}`}  >Show details </Link> }/> 
				   
				   
			        </li>

				</div>)})}
				
		  </ul>

		</div>
		);
	}
}

export default Elements;
