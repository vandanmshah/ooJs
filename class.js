/**
 * TODOS :-
 *      1) Add the support to customise the behaviour of constructor
 */

(function (global) {
    var fnTest = /xyz/.test(function(){xyz();}) ? /\b_super\b/ : /.*/;
    var _super;
    /**
     * @private
     * Helps to remove duplicate elements from two objects
     * @param {object} object in which we store final result
     * @param {object} object which we want to extend
     * @returns final extended object result
     */
    function _extend (obj) {
        var len = arguments.length;
        if (obj == null || len < 2) { // arguments.length
            return;
        }
        for (var i = 1; i < len; i++) {
            var source = arguments[i];
            for (key in source) {
                if (obj[key] === void 0) {
                    obj[key] = source [key];
                }
            }
        }
        return obj;
    }
    var Class = function () {
        // if callee of this function is already instance of class
        // then set it to prototype to support inheritance
        // used in extend method
        if (this instanceof Class.constructor) {
            _super = Class.constructor.prototype = this;
        }
        return new Class.constructor(arguments[0]);
    }
    /**
     * starting point of class where it initialize member variables and member function
     * which is passed tobe set in class
     * @param {object} to initialize class with member variables and member function 
     */
    Class.constructor = function (params) {
        // var _super = this.prototype;
        for (i in params) {
            this[i] = typeof params[i] == "function" &&
            fnTest.test(params[i]) ? (function (name, fn) {
                return function () {
                    var tmp = _super;

                    // Add a new ._super() method that is the same
                    // method but on the super-class
                    this._super = _super[name];

                    // The method only need to be bound temporarily, so
                    // we remove it when we're done executing
                    var ret = fn.apply(this, arguments);
                    this._super = tmp;

                    return ret;
                };
            }) (i, params[i]) : params[i];
        }
    }
    /**
     * @public decelare public function for Class for utility
     * this functions decelared here should not be decelared as
     * member function in Class
     */
    Class.prototype = {
        extend: function (params) {
            return Class.call(this, params)
        },
    };
    Class.constructor.prototype = Class.prototype;
    global.Class = Class;
}) (window);
