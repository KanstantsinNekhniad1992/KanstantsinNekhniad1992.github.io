module.exports = function(source) {

	//to use loader please move this file in node_modules/custom-json-loader

    this.cacheable && this.cacheable();

    var array;

    try {
        array = JSON.parse(source)
    } catch (ex) {
        return 'module.exports = ' + source + ';';
    }

    function isObject(o) {
        return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }

    function checker(obj, parent, property) {

        parent = isObject(parent) ? parent : {};

        for (var p in obj) {
            if (isObject(obj[p])) {
                checker(obj[p], obj, p);
            } else if (Object.prototype.toString.call(obj[p]).slice(8, -1) === 'Number' && !isNaN(obj[p])) {
                delete obj[p];
                if (!Object.keys(obj).length) {
                    delete parent[property];
                }
            }
        }
    }

    for (var i = 0, len = array.length; i < len; i += 1) {
        checker(array[i], {}, null);
    }

    return 'module.exports = ' + JSON.stringify(array) + ';';
};
