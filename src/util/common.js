import React from 'react';

/**
 * Returns a new object with only few attributes of the original object.
 * Note: the attributes/properties will still be bound to the old object.
 *
 * @param  {Object} object     The object.
 * @param  {Array}             Array of selected attributes.
 * @return {Object}            New object with only the selected attributes.
 */
export function objectWithOnly(object, attrs) {
    let newObject = {};

    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object);
    });

    return newObject;
}

/**
 * Wraps react children elements with props.
 */
export function wrapChildrenWith(children, props) {
    return React.Children.map(children, child => React.cloneElement(child, props));
}

export function getReminder(date,isItemChecked) {
    if(isItemChecked){
        return 'done';
    }
    const dayToday = new Date().getDate();
    const todoCompletionDay = new Date(date).getDate();
    
    if(todoCompletionDay < dayToday){
        let status = "Deadline over"
        return status;
    } else if(todoCompletionDay === dayToday) {
        return 'last day today'
    }
    return `${(todoCompletionDay - dayToday)} days left`;
}

/**
 * Checks if the string includes the substring.
 *
 * @param  {String} str
 * @param  {String} substr
 * @return {Boolean}
 */
export function stringInclues(str, substr) {
    return str.indexOf(substr) !== -1;
}
