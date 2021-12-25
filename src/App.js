import './App.css';
import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
   Route
} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(this.state.currentUser);
    })
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();
    // above method have return value of firebase.unsubscribe() which closes the subscription to prevent any data leaks, so whenever component unmounts, it gets called
  }


  render(){
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
