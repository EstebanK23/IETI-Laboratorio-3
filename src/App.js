import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Login} from './components/Login';
import DrawerLeft from './components/DrawerLeft';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogginIn: false
    }
  }

  componentLogin() {
    this.setState({
      isLogginIn: localStorage.getItem("isLogginIn")
    })
  }


    render() {
        const LoginView = () => (
            <Login/>
        );

        const DrawerView = () => (
            <DrawerLeft/>
        );

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>
                    <ul>
                      {!this.state.isLogginIn && (<li><Link to="/login">Login</Link></li>)}:{!this.state.isLogginIn && (<li><Link to="/drawer">Drawer</Link></li>)}
                    </ul>

                    <div>
                      {!this.state.isLogginIn && (<Route exact path="/login" component={LoginView} />)}:{!this.state.isLogginIn && (<Route exact path="/drawer" component={DrawerView} />)}
                    </div>
                </div>
            </Router>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}

export default App;
