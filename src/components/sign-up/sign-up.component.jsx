import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import Button from '@material-ui/core/Button';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
} from "../../components/header/header.styles";


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have a account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <img src="https://i.ibb.co/rd8TzGX/white-moda-1.png" alt="icon" />

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                        {/* <CustomButton type='submit'> Log in </CustomButton> */}
                        <Button variant="contained" type='submit' color="primary">
                            Log in
                         </Button>
           
                </form>
                <div>
                        <h4 style={{ color: 'white' }}> Already have an Account?</h4>
                    </div>

                <LogoContainer to="/signin">
                    <Button variant="outlined" color="primary" size='large'> 
                        Sign in
                    </Button>
                </LogoContainer>
                <LogoContainer to="/">
                    <Button variant="outlined" color="primary" size='large'>
                        Skip for now
                    </Button>
                </LogoContainer>


            </SignUpContainer>
        );
    }
}

export default SignUp;


