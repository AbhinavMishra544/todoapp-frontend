import React from 'react';
import TodoItem from './TodoItem';
import {MSG_NO_ITEMS} from '../../assets/text/en_US';

export default function FilteredList(props) {
    const {list, changeStatus} = props;
    if (list && list.length === 0) {
        return (
            <p className="alert alert-info">{MSG_NO_ITEMS}</p>
        );
    }

    return (
        <ul className="list-unstyled">
            {list && list.map(item => (
                <TodoItem data={item} changeStatus={changeStatus}/>
            ))}
        </ul>
    );
}
