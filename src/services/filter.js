import {stringInclues} from '../util/common';

export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'inprogress';
export const FILTER_COMPLETED = 'completed';

export function applyFilter(list, filter) {
    switch (filter) {
        case FILTER_COMPLETED:
            return list.filter(item => item.status === 'completed');

        case FILTER_ACTIVE:
            return list.filter(item => item.status === 'inprogress');

        default:
            return list;
    }
}

export function search(list, query) {
    let q = query.trim().toLowerCase();

    return list.filter(({text}) => stringInclues(text.toLowerCase(), q));
}


export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Inprogress',
        [FILTER_COMPLETED]: 'Completed'
    };
}
