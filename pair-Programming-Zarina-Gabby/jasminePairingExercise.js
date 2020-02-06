
let object = { 'a': 1, 'b': 2, 'c': 1 };
function invert(obj) {
    let new_obj={};
    for(let prop in obj) {
        if(obj.hasOwnProperty(prop)) {
        new_obj[obj[prop]] = prop;
    }
}
return new_obj;
}
invert(object);
// Output: { '1': 'c', '2': 'b' }

if (typeof module != 'undefined'){
    module.exports = {object}
}