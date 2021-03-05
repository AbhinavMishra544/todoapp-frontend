import React from 'react';
import TodoList from '../ui/TodoList';
import StateProvider from './StateProvider';
import KeyStrokeHandler from './KeyStrokeHandler';

class TodoApp extends React.Component{
    constructor(props){
        super(props);
        const token = window.localStorage.getItem('jwtToken');
        if(!token){
            this.props.history.push('/');
        }
    }

    render(){
        return (
            <StateProvider>
                <KeyStrokeHandler>
                    <TodoList/>
                </KeyStrokeHandler>
            </StateProvider>
        )
    }
}
export default TodoApp