import React from 'react';

function InputBox(props) {
    const { value, handleInputBoxVal } = props;
    return (
            <input autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onChange={handleInputBoxVal}
                placeholder="Add New"
            />
    );
}

export default (InputBox);
