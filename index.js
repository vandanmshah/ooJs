var Student = Class({
    firstName: null,
    lastName: null,
    percentage: null,
    displayDetails: function () {
        console.log("Name of Student :- " + this.firstName + " " + this.lastName);
    },
});
var Male = Student.extend({
    firstName: "John",
    lastName: "Doe",
    percentage: 85,
    displayDetails: function () {
        this._super.apply(this, arguments);
        console.log("He got " + this.percentage + "% in exam...")
    },
});
var Female = Student.extend({
    firstName: "Julie",
    lastName: "Richards",
    percentage: 87,
    displayDetails: function () {
        this._super.apply(this, arguments);
        console.log("She got " + this.percentage + "% in exam...")
    },
});
Male.displayDetails();
Female.displayDetails();
