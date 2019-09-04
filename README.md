# ooJs
    simple and Lightweight JavaScript library to achive class structure in ES5...

    Currently (ES5 and below) there is no support of class and traditional inheritance in javaScript. 
    This library helps you to achive it.
    You need to just import it in your project that's it you are ready to go.

# Add in your project
    <script type="text/javascript" src="class.js" ></script>

# Deceleration
    Use 'Class' (this is case sensitive so be aware) keyword to make new class.
    var Student = Class();

    If you want to initialize your class with member variables and member function
    then you can pass them in {} object...
    Example:-
        var Student = Class({
            firstName: 'Some First name',
            lastName: 'Some Last name',
            percentage: 40,
            displayDetails: function () {
                console.log("Name of Student :- " + this.firstName + " this.lastName);
                console.log("Percentage of Student :- " + this.percentage + "%.");
            },
        });

# inheritance
    You can achive single, multi level and Heirarchical Inheritance in this library.
    You have to use inbuilt 'extend' method to inherit base Class and to create child class. Also you can pass member variables and member function of child class.
    Example:-
        var Male = Student.extend({
            firstName: "John",
            lastName: "Doe",
            percentage: 85,
        });
    If you want to achive multi level inheritance just extand Male class .extend method...
# methods
    extend() :-
        Helps to achive inheritance

    _super() :-
    _super helps you to call method of parent class from base class
    Example:-
        var Male = Student.extend({
            firstName: "John",
            lastName: "Doe",
            displayDetails: function () {
                // this calls 'displayDetails' method of Student class
                this._super.apply(this, arguments);
                console.log("He got " + this.percentage + "% in exam...")
            },
        });
