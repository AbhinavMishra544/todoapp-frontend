import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {applyFilter, search} from '../../services/filter';

export default function TodoList(props) {
    const {list, filter, mode, query, dateValue, value} = props.data;
    const items = applyFilter(list,filter);
    const {changeFilter, changeStatus, changeMode, setSearchQuery, handleSubmit, handleInputDateVal, handleInputBoxVal} = props.actions;
    const count = list.length;
    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    <Header {...{mode, query, setSearchQuery, handleSubmit, handleInputDateVal, handleInputBoxVal, dateValue, value}}/>
                    <FilteredList {...{changeStatus}} list={items}/>
                    <Footer {...{count, filter, changeFilter, mode, changeMode}}/>
                </div>
            </div>
        </div>
    );
}
