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
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {Provider} from 'react-redux';
import store from './redux/store';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'

class App extends Component {
  // constructor(){
  //   super();

  //   this.state={
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged ( async userAuth => {
      // this.setState({currentUser: user})
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            }
            // .data()-special method that provides info(data) of the snapShot
          , () => console.log(this.state))
        });
      }
      else{
        // if there is no user from authentication library, currentUser will be none 
        setCurrentUser(userAuth)
      }
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
          <Header />
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


// dispatch- whatever action is being passed through dispatch, it will get passed to every reducer in redux environment, dispatch basically pass the action to all the reducers
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})



export default connect(null, mapDispatchToProps)(App);
