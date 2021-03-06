import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';


class SignIn extends Component{
  constructor(props){
    super(props);

    this.state= {
      email: '',
      password: ''
    }
  }

  handleSubmit =async (event) => {
    event.preventDefault();

    const {email, password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email, password);
    } catch(error){
      console.log(error);
    }

    this.setState({email: '', password:''})
  }

  handleChange = (event) => {
    const {value, name} = event.target;

    this.setState({[name]: value })
  }

  render(){
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" required/>

          <FormInput 
            type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" required/>

          <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          {/* isGoogleSignIn is prop that always have value of true when passed like this */}
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google{''}</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;