import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


class App extends Component {
    state = {
        users: [
            {name2: 'state_name'}
        ]
    };

    switchNameHandler = (event) => {
        this.setState({
            users: [
                {name2: event.target.value}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <UserOutput/>
                <ol>
                    <li>x Create TWO new components: UserInput and UserOutput</li>
                    <li>x UserInput should hold an input element, UserOutput two paragraphs</li>
                    <li>x Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
                    <li>x Pass a username (of your choice) to UserOutput via props and display it there</li>
                    <li>x Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
                    <li>x Add a method to manipulate the state (=> an event-handler method)</li>
                    <li>x Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
                    <li>x Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
                    <li>x Add two-way-binding to your input (in UserInput) to also display the starting username</li>
                    <li>x Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
                    </li>
                </ol>
                <div className='UserOutput'>
                    <UserOutput name='React'
                                name2={this.state.users[0].name2}/>
                </div>
                <UserInput name={this.state.users[0].name2}
                           changed={this.switchNameHandler}/>
            </div>
        );
    }
}

export default App;
