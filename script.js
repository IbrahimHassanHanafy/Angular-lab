// create array that accept number only 
// sol 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arrayNumber = [10, 20, 303, 5, 7];
arrayNumber.push(8);
arrayNumber.sort(function (a, b) { return a - b; });
console.log("sort array : " + arrayNumber);
//create array that accept string and number only and print all items
//sol 1
var arrStrNum1 = ["ali", 2, 50, 'ahmed'];
arrStrNum1.forEach(function (ele) { return console.log(ele); });
var arrStrNum = ["ali", 2, 50, 'ahmed'];
arrStrNum.forEach(function (ele) { return console.log(ele); });
//ex3 -- create a variable that accept number and boolean only;
var number;
number = true;
number = 10;
//ex4 -- create function with two parameter
function showMessage(name, age) {
    console.log("my name is ".concat(name, " and my age ").concat(age));
}
showMessage("ali", 15);
var Employee = /** @class */ (function () {
    function Employee(id, userName, email, address) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.address = address;
    }
    Employee.prototype.getUserName = function () {
        return this.userName;
    };
    return Employee;
}());
var e1 = new Employee(5, "ali", "email@exam.com", { city: "banha", street: "kkdk7", suite: "jjknmn", zipcode: "555555*555", geo: { lon: "5555", lat: "5888" } });
console.log(e1.id);
// ex6 -- 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.display = function (emp) {
        console.log(emp.address);
    };
    return Manager;
}(Employee));
var man = new Manager(1, "ali", "email@exam.com", { city: "banha", street: "kkkk", suite: "jjknmn", zipcode: "555555*555", geo: { lon: "5555", lat: "5888" } });
man.display(man);
