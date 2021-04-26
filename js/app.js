'use strict';
alert('Hello');
let  userName = prompt('What is your name?');


//Q1
let userAnswer0 =  prompt('Welcome To My Page, ' + userName + ' , have you visited my site before?' );
switch(userAnswer0.toUpperCase())
{
case 'YES':
case 'Y':
    alert('Welcome back!')
    break;

case 'NO':
case 'N':
    alert('it\'s your first time!,  u r welcome')
    break;

    default:
        //console.log('Inviled Answer');
        alert('Invalid input, answer with Y/N ')
        let userAnswer0 =  prompt('Welcome To My Page, ' + userName + ' , have you visited my site before?' );
        break;

}


//Q2
let userAnswer1 = prompt('Do you know me?');
switch(userAnswer1.toUpperCase())
{
case 'YES':
case 'Y':
    alert('Ya Hala Beek!')
    break;

case 'NO':
case 'N':
    alert('You can check out the page, to get to know me a little')
    break;

    default:
         //console.log('Inviled Answer');
        alert('Invalid input, answer with Y/N ')
        let userAnswer1 = prompt('Do you know me?');
        break;

}

//Q3
let userAnswer3 = prompt('Are you a social person??');

switch(userAnswer3.toUpperCase())
{
case 'YES':
case 'Y':
    alert ('It would be a great pleasure to get to know you ^^ ');
    break;

case 'NO':
case 'N':
    alert (' قول وغير ') ;
    break;

    default:
         //console.log('Inviled Answer');
        alert('Invalid input, answer with Y/N ')
        let userAnswer3 = prompt('Are you a social person??');
        break;

}

//Q4
let userAnswer2 = prompt('Do you like mansaf?');
switch(userAnswer2.toUpperCase())
{
case 'YES':
case 'Y':
    alert('me too :P')
    break;

case 'NO':
case 'N':
    alert('Oh, sad news :(')
    break;

    default:
         //console.log('Inviled Answer');
        alert('Invalid input, answer with Y/N ')
        let userAnswer2 = prompt('Do you like mansaf?');
        break;
}




//Q5
let userAnswer4 = prompt('Do you love MATH?');

switch(userAnswer4.toUpperCase())
{
case 'YES':
case 'Y':
    alert (' nice ');
    break;

case 'NO':
case 'N':
    alert (' me too  ') ;
    break;

    default:
         //console.log('Inviled Answer');
        alert('Invalid input, answer with Y/N ')
        let userAnswer4 = prompt('Do you know me?'); 
        break;

}







