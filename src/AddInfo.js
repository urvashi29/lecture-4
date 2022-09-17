import React, { Component } from "react";

class AddInfo extends Component {
    state = {
        firstName: '',
        age: '',
        contact: '',
        error: {
            nameError: '',
            ageError: '',
            contactError: '',
            formError: ''
        },
        formValid: false
    }


    handleUpdate = (e) => {
        // e is event object, gets created automatically whenever an event is fired
        // console.log(e);
        // console.log(e.target.value);
        // console.log(e.target.id);

        // Validation
        if (e.target.id === 'firstName') {
            this.validateName(e.target.value);
        }
        if (e.target.id === 'age') {
            this.validateAge(e.target.value);
        }
        if (e.target.id === 'contact') {
            this.validateContact(e.target.value);
        }

        // this.setState({
        //     [e.target.id]: e.target.value
        // });

        // console.log(this.state);
    }

    validateName = (name) => {
        let nameError = this.state.error.nameError;
        let formValid = this.state.formValid;
        let error = this.state.error;

        if (name.trim() === '') {
            nameError = 'Please enter name';
            formValid = false;
        }
        else if (name.length <= 3) {
            nameError = 'Name should be greater than 3 letters';
            formValid = false;
        }
        else {
            nameError = '';
            formValid = true;
        }

        this.setState({
            firstName: name,
            error: { ...error, nameError },
            formValid
        });

        return formValid;
    }

    validateAge = (age) => {
        let ageError = this.state.error.ageError;
        let formValid = this.state.formValid;
        let error = this.state.error;

        if (age.trim() === '') {
            ageError = 'Please enter name';
            formValid = false;
        }
        else if (age.length >= 3) {
            ageError = 'Age should not be 3 digits';
            formValid = false;
        }
        else {
            ageError = '';
            formValid = true;
        }

        this.setState({
            age, //age: age
            error: { ...error, ageError},
            formValid
        });

        return formValid;

    }

    validateContact = (contact) => {
        let contactError = this.state.error.contactError;
        let formValid = this.state.formValid;
        let error = this.state.error;

        if (contact.trim() === '') {
            contactError = 'Please enter contact';
            formValid = false;
        }
        else if (contact.length > 10 || contact.length < 10) {
            contactError = 'Contact length is 10 digits';
            formValid = false;
        }
        else {
            contactError = '';
            formValid = true;
        }

        this.setState({
            contact,
            error: { ...error, contactError },
            formValid
        });

        return formValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();//to prevent deafult behavior of page refresh
        let formError = this.state.error.formError;
        let error = this.state.error;

        if (this.validateName(this.state.firstName) && this.validateAge(this.state.age) && this.validateContact(this.state.contact) && this.state.formValid) {
            formError = 'Form Submitted';
            this.setState({
                error: { ...error, formError },
                firstName: '',
                age: '',
                contact: ''
            });
            
            //sending data to parent component(App)
            this.props.addInfo(this.state);

        }
        else {

            formError = 'Please check all the fields';
            this.setState({
                error: { ...error, formError }
            });
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>FirstName</label>
                <input type="text" placeholder="Please enter name" value={this.state.firstName} onChange={this.handleUpdate} id="firstName" />
                <p>{this.state.error.nameError}</p>
                <label>Age</label>
                <input type="text" placeholder="Please enter age" value={this.state.age} onChange={this.handleUpdate} id="age" />
                <p>{this.state.error.ageError}</p>
                <label>Contact</label>
                <input type="text" placeholder="Please enter contact" value={this.state.contact} onChange={this.handleUpdate} id="contact" />
                <p>{this.state.error.contactError}</p>
                <p>{this.state.error.formError}</p>
                <button value="submit">Submit</button>
            </form>
        )
    }
}

export default AddInfo;