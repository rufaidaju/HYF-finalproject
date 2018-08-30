import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Explore from './pages/explore/Explore'
import Tag from './pages/tag/Tag';
import NotFound from './pages/not found/NotFound';
import Home from './Home';
import Product from './pages/products/Product';
import MyProducts from './pages/products/MyProducts';



export default ()=>(
    <BrowserRouter >
      <Switch>
         <Route path="/" exact component ={Home}/>
         <Route path="/explore" exact component ={Explore}/>
         <Route path="/explore/:tagId" exact component ={Tag}/>
          {/* <Route path="/explore/categories" exact component ={Tag}/> */}
            <Route path="/explore/:tagId/:categoryId"  exact component={MyProducts}/>
            {/* <Route path="/explore/tag/products/"  exact component={MyProducts}/> */}
            <Route path="/explore/:tagId/:categoryId/:productId"  exact component={Product}/>

            
            {/* <Route path="/explore/tag/:tagId"  exact component={Tag}/>
            <Route path="/explore/tag/:tagId/products"  exact component={Tag}/> */}

          {/* </Route>
         </Route> */}
         {/* <Route path="/explore/tag/:tagId/products" exact component={Products}/> */}
         <Route path ="*"  exact component ={NotFound}/>
    </Switch>
         </BrowserRouter>
    
)