import React, { Component } from 'react';
import './App.css';
import ClaimSummarCard from './components/ClaimSummarCard';
import { Link, Route, BrowserRouter } from 'react-router-dom'
import ClaimInfoForm1 from './components/ClaimInfoForm1'
import { connect } from 'react-redux'
import { updateClaim } from './redux/action/action'
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       flag : false
    }
  }
  
  render() {
    console.log("in APP render", this.props.claim.claims)
    console.log(this.state.claim)
    
    
    return (
        <div className="App">
          
          <BrowserRouter> 
              <div className="navbar-style">
                  <Link to="/">Home</Link>
                  <Link to="/updateClaimDetails" >update claim</Link>     
              </div>
              
              <Route exact path="/" component={() => <ClaimSummarCard props={this.props.claim.claims} />} />    
              <Route path="/updateClaimDetails" component={() => <ClaimInfoForm1 />} />
          </BrowserRouter>
          
          <div>
            <Footer />
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('in container', state)
  return{
      claim: state.main
  }
}

export default connect(
  mapStateToProps
  
)(App)

