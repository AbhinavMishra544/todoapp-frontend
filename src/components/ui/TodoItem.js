import React from 'react';
import CheckBox from './CheckBox';
import {getReminder} from './../../util/common'

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const isItemChecked = data.status === 'completed';
    const handleChange = (checked) => changeStatus(data._id, checked);
    const className = 'todo-item ui-state-default ' + (data.status === 'completed' ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={isItemChecked} onChange={handleChange}/> {data.name}
                </label>
                <span>{getReminder(data.date, isItemChecked)}</span>
            </div>
        </li>
    );
}
