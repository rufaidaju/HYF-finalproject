import React, { Component } from 'react';
import '../index.css';
class TopBar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary myclass">
        <img alt=""
          src="/Pin.svg"
          width="40"
          height="40"
          
        />
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
        <a className="nav-link" href="#">Tags <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Categories <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Products <span className="sr-only">(current)</span></a>
      </li>
      
    </ul>
    
    
  </div>
            
 </nav>
 <form name="search-bar" id="search-bar" className='container text-center my-2 py-3 '>
            <input type="text" id="search-input" className="searchBox" />
            <button type="submit"  className=" searchBtn">Search</button>
            </form>
 
  <div className="header"></div>
  </div>
    );
  }
}

export default TopBar;
