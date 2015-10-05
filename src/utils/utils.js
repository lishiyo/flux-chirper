import crypto from 'crypto';
import _ from 'lodash';

function avatar(email) {
    if (!email) return '';

    let base = 'http://www.gravatar.com/avatar/';
    email = crypto.createHash('md5').update(email).digest('hex');

    // 92 pixels
    return base + email + '?s=92';
}

// only push into an array if it doesn't exist already
function pushSet(arr, elem) {
    if (arr.indexOf(elem) === -1) {
        arr.push(elem);
    }

    return arr;
}

// remove all matching value(s) from set
function removeFromSet(arr, value) {
    _.remove(arr, el => {
        return el === value;
    });

    return arr;
}

// return all in arr1 that are in arr2
function filterSet(arr, filterFn) { 
    return _.filter(arr, el => {
        return filterFn(el);
    });
}

export default {
    avatar,
    pushSet,
    removeFromSet,
    filterSet
};
