import React from 'react';
import '../../index.css';
import {Route, Link} from 'react-router-dom';
import water from '../../images/water.svg'
class Categories extends React.Component {
   
    render (props){
        // console.log(this.props.id.match.params.tagId);
        console.log(Object.entries(this.props));
        console.log(this.props.mytag);
        // let mytag = this.props.mytag;
       return (
     <div>
        <div className="looking_for"> 
        <ul className="myul">    
        <li> <h2>Looking for {this.props.mytag} </h2></li>
        <li> <div className="btn-group my_drop">

     <button type="button" className="btn btn-secondary dropdown-toggle  " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       Sort By
     </button>
      <div className="dropdown-menu dropdown-menu-right">
      </div>
         </div>
         </li>
        </ul>   
        </div>

        <ul className="myul">
            {this.props.tagMatches.map((cat,y) => {
                return(
                <li  key={y} className="my_categories">
                <p >{cat.category_name}</p>
                <p className ="water" >Water Consumption :{cat.water_consumption}<img    id="water" src={water} alt ="" /></p>
                <Route exact path="/explore/:tagId" component={() =>
				<Link id="btn" to={`/explore/${this.props.mytag}/${cat.category_name}`}   >Show details </Link> }/>
                </li> 
              )}
             )}
           </ul>
        
        
</div>
           )
    }
}

export default Categories;


