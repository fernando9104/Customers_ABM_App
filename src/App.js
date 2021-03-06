import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import './App.css';

class App extends Component {
  
  renderHome = () => <HomeContainer/>;
  renderCustomerListContainer = () => <CustomersContainer/>;
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;
  
  render(){
    return (
      <Router>
        <div>
          <Route exact path="/" component={ this.renderHome } />
          <Route exact path="/customers" component={ this.renderCustomerListContainer } />
          <Switch>
            <Route  path="/customers/new" component={ this.renderCustomerNewContainer } />
            <Route  path="/customers/:dni" render={ props => <CustomerContainer dni={props.match.params.dni} /> } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
