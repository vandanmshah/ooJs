(function(global) {
    /**
     * This function checks passed value is function type is or not
     * @param {any} obj which you want to check
     * @returns true if passed object is function type otherwise false
     */
    var isFunction = function(obj) {
        return obj && typeof obj === "function";
    };
    /**
     * Used to seperate class variables and methods
     * 
     * @param {Object} obj 
     * @returns {Object} Seperate object
     */
    var seperateProperties = function (obj) {
        if (typeof obj === 'object') {
            var seperatedPprops = {
                methods: {},
                properties: {},
            };
            var paramKeys = Object.keys(obj);
            for (var index = 0; index < paramKeys.length; index++) {
                if (isFunction(obj[paramKeys[index]])) {
                    seperatedPprops.methods[paramKeys[index]] = obj[paramKeys[index]];
                } else {
                    seperatedPprops.properties[paramKeys[index]] = obj[paramKeys[index]];
                }
            }
            return seperatedPprops;
        } else {
            console.error('Class parameter should be Object');
        }
        return;
    };

    /**
     * Main function classRefrence called when user will decelare class using new keyword
     * 
     * Called init function which decelares all variables
    */
    function classRefrence() {
        setClassVariables.call(this, this.classProperties);
        init.apply(this, arguments);
    }

    /**
     * Custom init which defines all function properties
     * 
     * @param {Object} obj 
     */
    var init = function () {
        var objectArguments = arguments[0];
        if (objectArguments && (typeof objectArguments === 'object')) {
            var propertiesNames = Object.keys(objectArguments);
            for (var index = 0; index < propertiesNames.length; index++) {
                if (this.hasOwnProperty(propertiesNames[index])) {
                    this[propertiesNames[index]] = objectArguments[propertiesNames[index]];                    
                }
            }
        } else {
            console.error('Class parameter should be Object');
        }
    };
    var setClassVariables = function () {
        var classVariables = arguments[0];
        var variableNames = Object.keys(classVariables);
        if (classVariables && variableNames.length) {
            for (var index = 0; index < variableNames.length; index++) {
                this[variableNames[index]] = classVariables[variableNames[index]];
            }
        }
    };
    function Class() {
        var seperatedClassPprops = seperateProperties(arguments.length && arguments[0]);
        if (seperatedClassPprops) {
            seperatedClassPprops.methods.init = seperatedClassPprops.methods.init || init.bind(this, seperatedClassPprops.properties);
            // setClassVariables.call(classRefrence, seperatedClassPprops.properties);
            classRefrence.prototype = new Properties(seperatedClassPprops);
        } else {
            console.error('Wrong class arguments.');
        }
        return classRefrence;
    }

    function Properties() {
        var objMethods = arguments[0]['methods'];
        // Object.prototype.toString
        var all_keys = Object.keys(objMethods);
        for (var index = 0; index < all_keys.length; index++) {
            if (objMethods && isFunction(objMethods[all_keys[index]])) {
                this[all_keys[index]] = objMethods[all_keys[index]];
            }
        }
        this['classProperties'] = arguments[0]['properties'];
    }
    Properties.prototype.extend = function() {};
    global.Class = Class;
})(window);
