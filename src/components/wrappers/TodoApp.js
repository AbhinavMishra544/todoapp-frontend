import React from 'react';
import TodoList from '../ui/TodoList';
import StateProvider from './StateProvider';
import KeyStrokeHandler from './KeyStrokeHandler';

export default function TodoApp(props){
    return (
        <StateProvider>
            <KeyStrokeHandler>
                <TodoList/>
            </KeyStrokeHandler>
        </StateProvider>
    )
}