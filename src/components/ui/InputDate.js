import React from 'react';

function InputDate(props) {
    const {  handleInputDateVal, dateValue } = props;
    return (
        <input type='date' value={dateValue} className={'form-control add-todo'} onChange={handleInputDateVal}/>
    );
}

export default (InputDate);