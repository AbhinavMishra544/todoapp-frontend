import React, { Component } from "react";
import { Row, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../../services/validator';
import Axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
        this.signup = this.signup.bind(this);
    }

    validateSignupForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        } else if(formData.confirmpassword !== formData.password){
            errors.confirmpassword = "Password's must be same";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    signup = (e) => {
        e.preventDefault();

        let errors = this.validateSignupForm();
        const newUser = {};
        const { confirmpassword, password, name, email } = this.state.formData;
        newUser.password = password;
        newUser.name = name;
        newUser.email = email;
        newUser.password2 = confirmpassword;
        alert(JSON.stringify(newUser))
        if(errors === true){
            alert("hiiiii")
            Axios.post("http://localhost:3000/users/register", newUser)
            .then(res => {
                this.props.history.push('/login')
            })
            .catch(err => {
                this.setState({
                    errors: err
                });
            });
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }
    render(){
        const { errors } = this.state;
        return(
            <div className="todolist">
            <form onSubmit={this.signup}>
                <FormGroup controlId="name">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl type="text" name="name" placeholder="Enter Name" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup controlId="email">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                    { errors.email && <HelpBlock>{errors.email}</HelpBlock> }
                </FormGroup>
                <FormGroup controlId="password" >
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                    { errors.password &&
                            <HelpBlock>{errors.password}</HelpBlock>
                    }
                </FormGroup>
                <FormGroup controlId="confirmpassword" >
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" name="confirmpassword" placeholder="re-enter your password" onChange={this.handleInputChange} />
                    { errors.confirmpassword &&
                            <HelpBlock>{errors.confirmpassword}</HelpBlock>
                    }
                </FormGroup>
                <Button type="submit" bsStyle="primary">Sign-up</Button>
            </form>
            </div>
        )
    }
}
export default SignUp