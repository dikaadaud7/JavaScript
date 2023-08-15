// let a = prompt("Enter Your age:")
// let age = parseInt(a)

// let numb = 18 - age

// if(age < 18){
//     let message = `Your are left with ${numb} years to drive`
//     console.log(message);
// }else{
//     console.log("You are old enough to drive")
// }


// let b = prompt("Enter your age:")
// let yAge = parseInt(b)
// let myAge = 24

// let ages = yAge - myAge


// if (yAge > myAge) {
//     let msg = `You are ${ages} years older than me`
//     alert(msg);
// }else{
//     alert(`I am Older then you`)
// }

// let a = 4
// let b = 3

// if(a > b){
//     let msg = `${a} is greater than ${b}`
//     console.log(msg);
// }else{
// console.log("null");
// }


// let condition = a > b
// let msg = `${a} is greater than ${b}`
// condition == a > b ? console.log(msg) : console.log("false");

// let a = prompt("Enter a number:")
// let age = parseInt(a)

// if (age % 2 == 0){
//     console.log(`${age} is an even Number`);
// }else{
//     console.log(`${age} is an odd Number`);
// }

// if(age >= 80){
//     console.log("A")
// }else if (age >= 70){
//     console.log("B")
// }else if (age >= 60){
//     console.log("C")
// }else if (age >= 50){
//     console.log("D")
// }else if (age >= 0){
//     console.log("F")
// }

// let season = prompt("Enter your month:").toLowerCase()
// switch (season) {
//     case "september":
//     case "october" :
//     case "november":
//         alert("The Season of the month is Autumn")
//         break;
//     case "december" : 
//     case "january" :
//     case "february":
//         alert("The Season of the month is Winter");
//         break;
//     case "march" :
//     case "april" :
//     case "may":
//         alert ("The Season of the Month is Spring");
//         break;
//     case "june" :
//     case "july" :
//     case "august":
//         alert ("The Season of The Month is Summer");
//         break;
//     default:
//         alert(`There is Not month`)
//         break;
// }   

let month = prompt("Enter your month:").toLowerCase()
switch (month) {
    case "january":
        let msg1 = `${month} has 31 days`
        console.log(msg1.charAt(0).toUpperCase() + msg1.slice(1));
        break;
    case "february":
        let msg2 = `${month} has 28 days`
        console.log(msg2.charAt(0).toUpperCase() + msg2.slice(1))
        break;
    case "march":
        let msg3 = `${month} has 31 days`
        console.log(msg3.charAt(0).toUpperCase() + msg3.slice(1))
        break;
    case "april":
        let msg4 = `${month} has 30 days`
        console.log(msg4.charAt(0).toUpperCase() + msg4.slice(1))
        break;
    case "may":
        let msg5 = `${month} has 31 days`
        console.log(msg5.charAt(0).toUpperCase() + msg5.slice(1))
        break;
    case "june":
        let msg6 = `${month} has 30 days`
        console.log(msg6.charAt(0).toUpperCase() + msg6.slice(1))
        break;
    case "july":
        let msg7 = `${month} has 30 days`
        console.log(msg7.charAt(0).toUpperCase() + msg7.slice(1))
        break;
    case "august":
        let msg8 = `${month} has 31 days`
        console.log(msg8.charAt(0).toUpperCase() + msg8.slice(1))
        break;
    case "september":
        let msg9 = `${month} has 30 days`
        console.log(msg9.charAt(0).toUpperCase() + msg9.slice(1))
        break;
    case "october":
        let msg10 = `${month} has 31 days`
        console.log(msg10.charAt(0).toUpperCase() + msg10.slice(1))
        break;
    case "november":
        let msg11 = `${month} has 30 days`
        console.log(msg11.charAt(0).toUpperCase() + msg11.slice(1))
        break;
    case "december":
        let msg12 = `${month} has 31 days`
        console.log(msg12.charAt(0).toUpperCase() + msg12.slice(1))
        break;
    default:
        console.log("Not A Month")
        break;
}
