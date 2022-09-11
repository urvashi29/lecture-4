import React, { Component } from 'react';
import AddInfo from './AddInfo';
import Display from './Display';

class App extends Component {
    state = {
        personData: []
    }

    //create a method in parent
    //user is the state data coming from child component(AddInfo)
    addInfo = (user) => {
        console.log(user);
        //store object in personData
        this.setState({
            personData: [...this.state.personData, user]
        });
    }

    render() {

        const list = this.state.personData.map((info) => {
            return (
                <React.Fragment key={info.contact}>
                    {info.firstName}
                    {info.age}
                </React.Fragment>
            )
        });

        return (
            <React.Fragment>
                <AddInfo addInfo={this.addInfo} />
                <Display personData={this.state.personData} />
            </React.Fragment>
        )
    }
}

export default App;


// task
// create a login form (email, password), validate it (use class based component)
// create a person detail form name, age, contact, message, birthdate: (using function based component)
