import React, {Component} from 'react';
import TodoApp from '../wrappers/TodoApp';
import Login from '../ui/loginform';
import SignUp from '../ui/signup';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
   
    render() {
        return (
                <Switch>
                    <Route exact path="/home" component={TodoApp} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={SignUp} />
                </Switch>
        );
    }
}

export default App;
