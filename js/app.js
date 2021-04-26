
'use strict';
alert('Hello');
let  userName = prompt('What is your name?');

let ctr =0; // marks counter

//QQ
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
        alert('You have lost this question, please make sure to answer yes or no to the next questions' );
        break;

}


alert('After This Message, We\'re going to play a quick game, called Guess-aboutMe, Which is made up of 5 Questions that you will answer with (yes or no)');


//QQ1
let userAnswer1 = prompt('Q1:: You think I was born in 1996?');
switch(userAnswer1.toUpperCase())
{
case 'YES':
case 'Y':
    ctr++;
    alert('Correct Answer, I was born in 16 August 1996')
    break;

case 'NO':
case 'N':
    alert('Wrong Answer')
    break;

    default:
        //console.log('Inviled Answer');
        alert('You have lost this question, please make sure to answer yes or no to the next questions' );
        break;

}

//QQ2
let userAnswer3 = prompt('Q2:: Do you think I studied at the University of Jordan???');

switch(userAnswer3.toUpperCase())
{
case 'YES':
case 'Y':
    alert ('Wrong Answer, I studied at Al-Balqa Applied University');
    break;

case 'NO':
case 'N':
    ctr++;
    alert ('Correct Answer') ;
    break;

    default:
         //console.log('Inviled Answer');
         alert('You have lost this question, please make sure to answer yes or no to the next questions' );         
         break;

}

//QQ3
let userAnswer2 = prompt(' Q3:: Do you think I studied law??');
switch(userAnswer2.toUpperCase())
{
case 'YES':
case 'Y':
    alert('Wrong Answer, I studied Computer Engineering');
    break;

case 'NO':
case 'N':
    ctr++;
    alert('Correct Answer, I\'m a Computer Engineer')
    break;

    default:
         //console.log('Inviled Answer');
         alert('You have lost this question, please make sure to answer yes or no to the next questions' );         
         break;
}




//QQ4
let userAnswer4 = prompt('Do you think that I\'m from Amman?');

switch(userAnswer4.toUpperCase())
{
case 'YES':
case 'Y':
    alert ('Wrong Answer, I deceived you:P I\'m from Al-Balqa');
    break;

case 'NO':
case 'N':
    ctr++;
    alert ('Correct Answer! I\'m from Al-Balqaa - Deir Alla ') ;
    break;

    default:
         //console.log('Inviled Answer');
         alert('You have lost this question, please make sure to answer yes or no to the next questions' );         
         break;

}



//QQ5
let userAnswer5 = prompt('Do you think I\'ll get a full mark on this assignment?');

switch(userAnswer5.toUpperCase())
{
case 'YES':
case 'Y':
    ctr++;
    alert ('Correct Answer! كم انت كريم يا رب');
    break;

case 'NO':
case 'N':
    alert ('Please write notes for me in the comments .. to improve myself') ;
    break;

    default:
         //console.log('Inviled Answer');
         alert('You have lost this question, please make sure to answer yes or no to the next questions' );         
         break;

}


alert('Thank You, ' + userName + ' Your score is ( ' + ctr +' / 5 ) ');

