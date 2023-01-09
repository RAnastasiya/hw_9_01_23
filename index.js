/*
користувач вводить число, яке є номером дня місяця [1-31]
ви виводете назву дня тижня,
при умові, що місяць почався з понеділка
 */
const userInput = prompt("Your age:", '');

let day = Number(userInput);

if(day === '' || 
    day === null ||  
    Number.isNaN(day) || 
    day < 1 || 
    day > 31) 
    {
    console.log('error');
} else if ((day - 1)%7 === 0) {
    console.log('Monday');
} else if ((day - 2)%7 === 0) {
    console.log('Tuesday');
} else if ((day - 3)%7 === 0) {
    console.log('Wednesday');
} else if ((day - 4)%7 === 0) {
    console.log('Thursday');
} else if ((day - 5)%7 === 0) {
    console.log('Friday');
} else if ((day - 6)%7 === 0) {
    console.log('Saturday');
} else if ((day - 7)%7 === 0) {
    console.log('Sunday');
}

// 1
let day1 = Number(userInput);

if(day1 === '' || 
    day1 === null ||  
    Number.isNaN(day1) || 
    day1 < 1 || 
    day1 > 31) {
    console.log('error');
} else {
    if (day1 > 7 && day1 < 15) day1 -= 7;
    if (day1 > 14 && day1 < 22) day1 -= 14;
    if (day1 > 21 && day1 < 29) day1 -= 21;
    if (day1 > 28 && day1 < 36) day1 -= 28;

    if (day1 === 1) {
        console.log('Monday');
    } else if (day1 === 2) {
        console.log('Tuesday');
    } else if (day1 === 3) {
        console.log('Wednesday');
    } else if (day1 === 4) {
        console.log('Thursday');
    } else if (day1 === 5) {
        console.log('Friday');
    } else if (day1 === 6) {
        console.log('Saturday');
    } else if (day1 === 7) {
        console.log('Sunday');
    }
}

// 2
const day2 = Number(userInput);

switch (day2) {
    case 1:
    case 8:
    case 15:
    case 22:
    case 29:    
        console.log('Monday');
        break;
    case 2:
    case 9:
    case 16:
    case 23:
    case 30:    
        console.log('Tuesday');
        break;
    case 3:
    case 10:
    case 17:
    case 24:
    case 31:
        console.log('Wednesday');
        break;
    case 4:
    case 11:
    case 18:
    case 25:
        console.log('Thursday');
        break;
    case 5:
    case 12:
    case 19:
    case 26:    
        console.log('Friday');
        break;
    case 6:
    case 13:
    case 20:
    case 27:
        console.log('Saturday');
        break;
    case 7:
    case 14:
    case 21:
    case 28:
        console.log('Sunday');
        break;
    default:
        console.log('error');
        break;
}

// 3
let day3 = Number(userInput);

if(day3 > 7 && day3 < 15) day3 -= 7;
else if (day3 > 14 && day3 < 22) day3 -= 14;
else if(day3 > 21 && day3 < 29) day3 -= 21;
else if(day3 > 28 && day3 < 36) day3 -= 28;

switch (day3) {
    case 1:    
        console.log('Monday');
        break;
    case 2:   
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5: 
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('error');
        break;
}
