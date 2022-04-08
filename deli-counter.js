// 1. Write your functions here
let numberInLine = 0;
function takeANumber(array, name) {
    let order = {
        clientName: name,
        clientNumber: ++numberInLine,
    }
    array.push(order);
    console.log(`Welcome, ${order.clientName}. You are number ${order.clientNumber} in line.`)
}
function line(array) {
    if (array.length == 0) {
        console.log('The line is currently empty');
        return 0;
    }
    let stringToAdd = "The line is currently: " + array.map(function (order) {
        let string = `${order.clientNumber}. ${order.clientName} `
        return string;
    }).join(' ');
    console.log(stringToAdd);
}
function nowServing (array){
    if (array.length == 0){
        console.log('There is nobody waiting to be served!');
        return 0;
    }
    numberInLine = 0;
    console.log(`Currently serving ${array[0].clientName}.`);
    array.shift();
    array = array.map(function (order){
        order.clientNumber=++numberInLine;
    })
}

// 2. Example Usage

const katzDeli = []

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"