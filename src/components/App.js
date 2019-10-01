import React, {Component} from 'react';
import '../css/App.css';

import {Switch, Route, Link} from 'react-router-dom';
import Report from '../pages/Report';
import Error from '../pages/Error';
import Home from '../pages/Home';

class App extends Component {

  constructor(){
    super();    
  }

  render(){
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">                    
              <Switch>      
                  <Route exact path='/CFApp' component={Home}></Route>
                  <Route exact path='/CFApp/report' component={Report}></Route>                     
                  <Route component={Error}></Route> 
              </Switch>                            
              </div>  
            </div> 
          </div>
        </div>
      </main>
    );
  }
}

export default App;
