import React, {Component} from 'react';
import '../css/App.css';

import {Switch, Route, Link} from 'react-router-dom';
import Report from '../pages/Report';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Matter from '../pages/Matter';
import CreateMatter from '../pages/CreateMatter';

import {CaseProvider} from '../CaseContext';
import UpdateMatter from '../pages/UpdateMatter';

class App extends Component {

  constructor(){
    super();    
  }

  render(){
    return (
      <CaseProvider>
        <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">                    
              <Switch>      
                  <Route exact path='/' component={Home}></Route>
                  <Route exact path='/matter/:id' component={Matter}></Route>
                  <Route exact path='/updatematter/:id' component={UpdateMatter}></Route>
                  <Route exact path='/Creatematter' component={CreateMatter}></Route>
                  <Route exact path='/CFApp' component={Home}></Route>
                  <Route exact path='/CFApp/report' component={Report}></Route>                     
                  <Route component={Error}></Route> 
              </Switch>                            
              </div>  
            </div> 
          </div>
        </div>
      </main>
      </CaseProvider>
    );
  }
}

export default App;

