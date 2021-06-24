import React from 'react';
import { connect } from "react-redux";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Button from '@material-ui/core/Button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from "../../components/header/header.styles";
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer,
} from './sign-in.styles';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <SignInContainer>
                <img src="https://i.ibb.co/rd8TzGX/white-moda-1.png" alt="icon" />

                <form onSubmit={this.handleSubmit} styles={{marginBottom: '500px'}}>
                    <FormInput
                        styles={{ backgroundColor: 'red' }}
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <ButtonsBarContainer>
                        {/* <CustomButton type='submit'> Log in </CustomButton> */}
                        <Button variant="contained" type='submit' color="primary">
                            Log in
                         </Button>
                    </ButtonsBarContainer>
                    <h3 style={{ color: 'white' }}>
                        --------- or login with ---------
                    </h3>

                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                    <div>
                        <h4 style={{ color: 'white' }}> New here?</h4>
                    </div>
                </form>

                <LogoContainer to="/signup">
                    <Button variant="outlined" color="primary" size='large'> 
                        Create Account
                    </Button>

                </LogoContainer>
                <LogoContainer to="/">
                    <Button variant="outlined" color="primary" size='large'>
                        Skip for now
                    </Button>


                </LogoContainer>

            </SignInContainer>
        );
    }
}

export default SignIn;