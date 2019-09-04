var Person = Class({
    name: '',
    age: 0,
    gender: '',
    displayDetails: function () {
        console.log('Name: ' + this.name + ', Age: ' + this.age);
    }
});
var JohnObj = new Person({
    name: 'John',
    age: 20,
    gender: 'Male'
});
var sophiaObj = new Person({
    name: 'Sophia',
    age: 22,
    gender: 'Female'
});
JohnObj.displayDetails();
sophiaObj.displayDetails();

var Fruit = Class({
    init: function (params) {
        this.name = params.name;
    },
    name: '',
    displayDetails() {
        console.log('Fruit Name:- ', this.name);
    },
});

var mango = new Fruit([]);

var apple = new Fruit({
    name: 'Red Apple',
});

mango.displayDetails();
apple.displayDetails();