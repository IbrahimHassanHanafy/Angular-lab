// create array that accept number only 
// sol 1

let arrayNumber: number[] = [10, 20, 303, 5, 7];
arrayNumber.push(8);
arrayNumber.sort((a: number, b: number) => a - b);
console.log("sort array : " + arrayNumber);

//create array that accept string and number only and print all items

//sol 1
let arrStrNum1: (string | number)[] = ["ali", 2, 50, 'ahmed'];
arrStrNum1.forEach((ele: (string | number)) => console.log(ele));
//console.log(arrStrNum1.join())

// another sol 
type stringNumber = string | number;
let arrStrNum: stringNumber[] = ["ali", 2, 50, 'ahmed'];

arrStrNum.forEach((ele: stringNumber) => console.log(ele));


//ex3 -- create a variable that accept number and boolean only;

let number: number | boolean;
number = true;
number = 10;

//ex4 -- create function with two parameter

function showMessage(name: string, age: number) {
    console.log(`my name is ${name} and my age ${age}`)
}
showMessage("ali", 15);

//ex5 -- create class employee implement IEmplyee 

interface IEmplyee {
    readonly id: number;
    getUserName(): string;
    email: string;
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lon: string
        }
    }

}
class Employee implements IEmplyee {
    
    constructor(readonly id: number,
        private userName:string,
        public email: string,
        public address: {
            street: string, suite: string,

            city: string, zipcode: string, geo: { lat: string, lon: string, }
        }) { 
        }


    public getUserName(): string {
        return this.userName;
    }
}
let e1=new Employee(5,"ali","email@exam.com",{city:"banha",street:"kkdk7",suite:"jjknmn",zipcode:"555555*555",geo:{lon:"5555",lat:"5888"}});
console.log(e1.id);

// ex6 -- 
class Manager extends Employee {

    display(emp:Employee){
        console.log(emp.address)
    }
}


let man=new Manager(1,"ali","email@exam.com",{city:"banha",street:"kkkk",suite:"jjknmn",zipcode:"555555*555",geo:{lon:"5555",lat:"5888"}});
man.display(man);


