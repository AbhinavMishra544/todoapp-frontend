import React from 'react';
import InputBox from './InputBox';
import InputDate from './InputDate';

export default function Header(props) {
    return (
        <header>
            <form onSubmit={props.handleSubmit}>
            <h1>Things To Do</h1>
            <InputBox {...props}/>
            <InputDate {...props}/>
            <button type="submit">submit</button>
            </form>
        </header>
    );
}
