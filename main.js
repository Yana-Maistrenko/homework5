/*Вам необхідно написати функцію reverseString(str), яка приймає на вхід рядок і повертає його у зворотному порядку.*/
/*let str = prompt("Введіть строку:");

function reverseString(str){
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; 
    }
    console.log("Ваша строка у зворотньому напрямку:", reversed);
}

reverseString(str);*/






/*Вам необхідно написати функцію isPalindrome(str), яка приймає на вхід рядок і перевіряє, чи є введений рядок паліндромом.*/
/*let originalStr = prompt('Введіть строку для розпізнавання паліндрому:');
let str = originalStr.toLowerCase().replace(/[^a-zа-я0-9]/gi, "");

function reverseString(str) { 
  let reversed = ''; 
  for (let i = str.length - 1; i >= 0; i--) { 
    reversed += str[i]; 
  } 
  return reversed; 
} 

function isPalindrome(str){ 
  let reversedStr = reverseString(str); 
  return str === reversedStr; 
} 

if (isPalindrome(str)) { 
  console.log('Строка:', originalStr, 'є паліндромом'); 
} else { 
  console.log('Строка:', originalStr, 'не паліндром'); 
}*/





/*Вам необхідно написати функцію findGCD(a, b), яка приймає на вхід два числа і повертає їхній НСД.*/
/*let a = +prompt("Введіть перше число для обчислення НСД:"); 
let b = +prompt("Введіть друге число для обчислення НСД:"); 
function findGCD(a, b) { 
    do { 
        let temp = b; 
        b = a % b; 
        a = temp; 
    } while (b !== 0); 
    return a; 
 
} 
console.log("НСД введених чисел:",findGCD(a,b));*/