
// 'use strict';
// alert('Hello');
// let userName = prompt('What is your name?');

// let ctr = 0; // marks counter
// let LoopCtr =4; // 
// let stopMyLoop=false;

// //QQ
// let userAnswer0 =  prompt('Welcome To My Page, ( ' + userName + ' )  have you visited my site before?' );
// switch(userAnswer0.toUpperCase())
// {
// case 'YES':
// case 'Y':
//     alert('Welcome back!')
//     break;

// case 'NO':
// case 'N':
//     alert('it\'s your first time!,  u r welcome')
//     break;

//     default:
//         //console.log('Inviled Answer');
//         alert('Invalid Input, please make sure to answer yes or no to the next questions' );
//         break;

// }



// alert('After This Message, we\'re going to play a quick game, \n Called GUESS-AboutMe, \n - Which is made up of 6 Questions that you will answer with NUMBERS only. \n - You will have 4 attempts each time. \n- I will hint at you with information about me in every question to help you');

// // Q1
// while ( stopMyLoop == false  && LoopCtr!==0 )
// {
//     LoopCtr--;
//     let userInput = Number(prompt("How old am I? \nHint: my age is between 20 and 30")); 


//     if (userInput > 20 && userInput <=22)
//     {
//         alert('low');
//     }
//     else if ( userInput == 23 || userInput == 25 )
//     {
//         alert('so close');
//     }
//     else if ( userInput == 24)
//     {
//         alert('Correct Answer! ^^');
//         ctr++; stopMyLoop=true; 
//     }
//     else if ( userInput == 26)
//     {
//         alert(' close');
//     }
//     else if ( userInput >= 27)
//     {
//         alert('too high');
//     }

// while ( stopMyLoop == false  && LoopCtr==0 ) // When the attempts end without a correct answer
// {
//  alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 24 ');
//  stopMyLoop = true;
// }

// }


// // reset the values to use it again
// LoopCtr =4; // 
// stopMyLoop=false;

// // Q2
// while ( stopMyLoop == false  && LoopCtr!==0 )
// {
//     LoopCtr--;
//     let userInput = Number(prompt('How height am I? \nHint: my height is between 170 and 190 cm'));

   
//     if (userInput > 170 && userInput <=173)
//     {
//         alert('too low');
//     }
//     else if ( userInput == 175 || userInput == 177 )
//     {
//         alert('so close');
//     }
//     else if ( userInput == 176)
//     {
//         alert('Correct Answer! ^^');
//         ctr++; stopMyLoop=true; 
//     }

//     else if ( userInput >= 177 && userInput <= 183 )
//     {
//         alert('high');
//     }
//     else if ( userInput >= 184 && userInput <= 90 )
//     {
//         alert('too high');
//     }
//     else if ( userInput < 170 || userInput >191)
//     {
//         alert('Out of Range');
//     }
    

// while ( stopMyLoop == false  && LoopCtr==0 ) // When the attempts end without a correct answer
// {
//  alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 176 CM ');
//  stopMyLoop = true;
// }

// }


// // reset the values to use it again
// LoopCtr =4; // 
// stopMyLoop=false;

// // Q3
// while ( stopMyLoop == false  && LoopCtr!==0 )
// {
//     LoopCtr--;
//     let userInput= Number(prompt('In what year did the Hashemite Kingdom of Jordan become independent?\nHint: Between 1940 and 1950'));

   
//     if (userInput > 1940 && userInput <=1942)
//     {
//         alert('too low');
//     }
//     else if ( userInput == 1947 || userInput == 1945 )
//     {
//         alert('so close');
//     }
//     else if ( userInput == 1946 )
//     {
//         alert('Correct Answer! ^^');
//         ctr++; stopMyLoop=true; 
//     }

//     else if ( userInput >= 148 && userInput <= 1950 )
//     {
//         alert('high');
//     }
  
//     else if ( userInput < 1940 || userInput> 1950)
//     {
//         alert('Out of Range');
//     }
    

// while ( stopMyLoop == false  && LoopCtr==0 ) // When the attempts end without a correct answer
// {
//  alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 1946 ');
//  stopMyLoop = true;
// }

// }

// // reset the values to use it again
// LoopCtr =4; // 
// stopMyLoop=false;

// // Q4
// while ( stopMyLoop == false  && LoopCtr!==0 )
// {
//     LoopCtr--;
//     let userInput= Number(prompt('In What year was World War II??\nHint: Between 1935 and 1950'));

   
//     if (userInput >= 1935 && userInput <=1937)
//     {
//         alert('too low');
//     }
//     else if ( userInput == 1938 || userInput == 1940 )
//     {
//         alert('so close');
//     }
//     else if ( userInput == 1939 )
//     {
//         alert('Correct Answer! ^^');
//         ctr++; stopMyLoop=true; 
//     }

//     else if ( userInput >= 1941 && userInput <= 1945 )
//     {
//         alert('high');
//     }
//     else if ( userInput >= 1945 && userInput <= 1950 )
//     {
//         alert('too high');
//     }
  
//     else if ( userInput < 1935 || userInput> 1950)
//     {
//         alert('Out of Range');
//     }
    

// while ( stopMyLoop == false  && LoopCtr==0 ) // When the attempts end without a correct answer
// {
//  alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 1938 ');
//  stopMyLoop = true;
// }

// }


// // reset the values to use it again
// LoopCtr =4; // 
// stopMyLoop=false;

// // Q5
// while ( stopMyLoop == false  && LoopCtr!==0 )
// {
//     LoopCtr--;
//     let userInput= Number(prompt('How many countries in the world?\nHint: Between 185 and 200'));

   
//     if (userInput >= 185 && userInput <=180)
//     {
//         alert('too low');
//     }
//     else if ( userInput >= 186 && userInput <= 191 )
//     {
//         alert(' close');
//     }
//     else if ( userInput == 192 || userInput == 194 )
//     {
//         alert('so close');
//     }
//     else if ( userInput == 193 ) // correct answer
//     {
//         alert('Correct Answer! ^^');
//         ctr++; stopMyLoop=true; 
//     }

//     else if ( userInput >= 195 && userInput <= 200 )
//     {
//         alert('high');
//     }
  
//     else if ( userInput < 185 || userInput> 200 ) // out of range
//     {
//         alert('Out of Range');
//     }
    

// while ( stopMyLoop == false  && LoopCtr==0 ) // When the attempts end without a correct answer
// {
//  alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 193 ');
//  stopMyLoop = true;
// }

// }


// // reset the values to use it again
// LoopCtr =4; // 
// stopMyLoop=false;

// // Q6
// while ( stopMyLoop == false  && LoopCtr!==0 )
// {
//     LoopCtr--;
//     let userInput= Number(prompt('How many Arab countries in the world?\nHINT: Between 15 and 30'));

   
//     if (userInput >= 15 && userInput <=18)
//     {
//         alert('too low');
//     }
//     else if ( userInput >= 19 && userInput <= 20 )
//     {
//         alert(' close');
//     }
//     else if ( userInput == 21 || userInput == 23 )
//     {
//         alert('so close');
//     }
//     else if ( userInput == 22 ) // correct answer
//     {
//         alert('Correct Answer! ^^');
//         ctr++; stopMyLoop=true; 
//     }

//     else if ( userInput >= 24 && userInput <= 30 )
//     {
//         alert('high');
//     }
  
//     else if ( userInput < 15 || userInput> 30 ) // out of range
//     {
//         alert('Out of Range');
//     }
    

// while ( stopMyLoop == false  && LoopCtr==0 ) // When the attempts end without a correct answer
// {
//  alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 193 ');
//  stopMyLoop = true;
// }

// }



// // Q7 
// LoopCtr = 5;
// stopMyLoop = false;
// let myArr = ['REAL MADRID','BARCELONA','MAN UTD','MILAN','JUVENTUS','BAYERN','BVB','MAN CITY'];
// let userInput = prompt('Guess who is my  favorite team\nHINT: \nReal Madrid, Barcelona, Man Utd, \nMilan, Juventus, Bayern,\nBVB, Man City, Ajax'); 



// while ( LoopCtr >= 0 && stopMyLoop == false )
// {

//    LoopCtr--; // loop counter

//    if ( userInput.toUpperCase() == myArr[1] ) 
//    {
//         ctr++; // marks counter
//         LoopCtr=0; //stopMyLoop=false;
//         alert('Correct Answer! ^^');
//         break;
//    }

//    else 
//    { 
//       for (let i = 0 ; i<=4 ; i++)
//       {
//       alert('Wrong Answer, Try AGAIN');
//       userInput = prompt('HINT:\nBarcelona, Real Madrid, Man Utd, \nMilan, Juventus, Bayern,\nBVB, Man City, Ajax');
//       break;

//       }

//       if ( stopMyLoop == false  && LoopCtr == 0 ) // When the attempts end without a correct answer
//       {
//            alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: Barcelona ');
//            break;
//       }
//    }
      
// }


// alert('Thank You, ' + userName + ' Your score is ( ' + ctr +' / 7 ) ');