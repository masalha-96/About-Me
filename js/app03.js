'use strict';


var marksCounter = 0;
alert('Hello');
let userName = prompt('What is your name?');


//greeting fun using switch 
// function greeting() {

//     let userAnswer0 = prompt('Welcome To My Page, ( ' + userName + ' )  have you visited my site before?');
//     switch (userAnswer0.toUpperCase()) {
//         case 'YES':
//         case 'Y':
//             alert('Welcome back!')
//             break;

//         case 'NO':
//         case 'N':
//             alert('it\'s your first time!,  u r welcome')
//             break;

//         default:
//             //console.log('Inviled Answer');
//             alert('Invalid Input');
//             break;

//     }
   

// }

//greeting fun using for 
function greeting()
{
    let userAnswer0 = prompt('Welcome To My Page, ( ' + userName + ' )  have you visited my site before?');

    if (userAnswer0.toUpperCase() == 'YES' || userAnswer0.toUpperCase() == 'Y')
    {
        alert('Welcome back!'); 
    }

    else if  ( userAnswer0.toUpperCase() == 'NO' || userAnswer0.toUpperCase() == 'N')
    {
        alert('it\'s your first time!,  u r welcome');
    }

    else {
        alert('Invalid Input'); 
    }

}


// Q1 USING While
// function q1() {

//     let LoopCtr = 4; // 
//     let stopMyLoop = false;
//     while (stopMyLoop == false && LoopCtr !== 0) {
//         LoopCtr--;
//         let userInput = Number(prompt("How old am I? \nHint: my age is between 20 and 30"));

//         if (userInput >= 20 && userInput <= 22) {
//             alert('low');
//         }
//         else if (userInput == 23 || userInput == 25) {
//             alert('so close');
//         }
//         else if (userInput == 24) {
//             alert('Correct Answer! ^^');
//             marksCounter++;            
//             stopMyLoop = true;
//         }
//         else if (userInput == 26) {
//             alert(' close');
//         }
//         else if (userInput >= 27 && userInput < 30) {
//             alert('too high');
//         }
//         else if (userInput < 20 || userInput > 30) // out of range
//         {
//             alert('Out of Range');
//         }

//         while (stopMyLoop == false && LoopCtr == 0) // When the attempts end without a correct answer
//         {
//             alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 24 ');
//             stopMyLoop = true;
//         }

//     }
// }


// Q1 using for 
function q1 ()
{
let stopLoop = false;
    for (let i =0 ; i <4 ; i++)
    {
        let userInput = Number(prompt("How old am I? \nHint: my age is between 20 and 30"));

        if (userInput >= 20 && userInput <= 22) {
            alert('low');
        }
        else if (userInput == 23 || userInput == 25) {
            alert('so close');
        }
        else if (userInput == 24) {
            alert('Correct Answer! ^^');
        }
        else if (userInput == 26) {
            alert(' close');
        }
        else if (userInput >= 27 && userInput < 30) {
            alert('too high');
        }
        else if (userInput < 20 || userInput > 30) // out of range
        {
            alert('Out of Range');
        }

        while (i == 3 && stopLoop == false)
        {
            alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 24 '); break;
        }

    }

}

//Q2
function q2() {

    // Reset the values to use it again
    let LoopCtr = 4; // 
    let stopMyLoop = false;
    while (stopMyLoop == false && LoopCtr !== 0) {

        LoopCtr--;
        let userInput = Number(prompt('How height am I? \nHint: my height is between 170 and 190 cm'));

        if (userInput > 170 && userInput <= 173) {
            alert('too low');
        }
        else if (userInput == 175 || userInput == 177) {
            alert('so close');
        }
        else if (userInput == 176) {
            alert('Correct Answer! ^^');
            marksCounter++;             
            stopMyLoop = true;
        }

        else if (userInput >= 177 && userInput <= 183) {
            alert('high');
        }
        else if (userInput >= 184 && userInput <= 90) {
            alert('too high');
        }
        else if (userInput < 170 || userInput > 191) {
            alert('Out of Range');
        }


        while (stopMyLoop == false && LoopCtr == 0) // When the attempts end without a correct answer
        {
            alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 176 CM ');
            stopMyLoop = true;
        }
    }


}


//Q3
function q3() {
    //Reset the values to use it again
    let LoopCtr = 4; // 
    let stopMyLoop = false;

    while (stopMyLoop == false && LoopCtr !== 0) {
        LoopCtr--;
        let userInput = Number(prompt('In what year did the Hashemite Kingdom of Jordan become independent?\nHint: Between 1940 and 1950'));


        if (userInput > 1940 && userInput <= 1942) {
            alert('too low');
        }
        else if (userInput == 1947 || userInput == 1945) {
            alert('so close');
        }
        else if (userInput == 1946) {
            alert('Correct Answer! ^^');
            marksCounter++;             
            stopMyLoop = true;
        }

        else if (userInput >= 148 && userInput <= 1950) {
            alert('high');
        }

        else if (userInput < 1940 || userInput > 1950) {
            alert('Out of Range');
        }


        while (stopMyLoop == false && LoopCtr == 0) // When the attempts end without a correct answer
        {
            alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 1946 ');
            stopMyLoop = true;
        }

    }
}



function q4() {
    // reset the values to use it again
    let LoopCtr = 4; // 
    let stopMyLoop = false;

    // Q4
    while (stopMyLoop == false && LoopCtr !== 0) {

        LoopCtr--;
        let userInput = Number(prompt('In What year was World War II??\nHint: Between 1935 and 1950'));


        if (userInput >= 1935 && userInput <= 1937) {
            alert('too low');
        }
        else if (userInput == 1938 || userInput == 1940) {
            alert('so close');
        }
        else if (userInput == 1939) {
            alert('Correct Answer! ^^');
            marksCounter++;             
            stopMyLoop = true;
        }

        else if (userInput >= 1941 && userInput <= 1945) {
            alert('high');
        }
        else if (userInput >= 1945 && userInput <= 1950) {
            alert('too high');
        }

        else if (userInput < 1935 || userInput > 1950) {
            alert('Out of Range');
        }


        while (stopMyLoop == false && LoopCtr == 0) // When the attempts end without a correct answer
        {
            alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 1938 ');
            stopMyLoop = true;
        }

    }
}



function q5() {
    // reset the values to use it again
    let LoopCtr = 4; // 
    let stopMyLoop = false;

    // Q5
    while (stopMyLoop == false && LoopCtr !== 0) {

        LoopCtr--;
        let userInput = Number(prompt('How many countries in the world?\nHint: Between 185 and 200'));


        if (userInput >= 185 && userInput <= 180) {
            alert('too low');
        }
        else if (userInput >= 186 && userInput <= 191) {
            alert(' close');
        }
        else if (userInput == 192 || userInput == 194) {
            alert('so close');
        }
        else if (userInput == 193) // correct answer
        {
            alert('Correct Answer! ^^');
            marksCounter++;             
            stopMyLoop = true;
        }

        else if (userInput >= 195 && userInput <= 200) {
            alert('high');
        }

        else if (userInput < 185 || userInput > 200) // out of range
        {
            alert('Out of Range');
        }


        while (stopMyLoop == false && LoopCtr == 0) // When the attempts end without a correct answer
        {
            alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 193 ');
            stopMyLoop = true;
        }

    }
}



function q6() {
    // reset the values to use it again
    let LoopCtr = 4; // 
    let stopMyLoop = false;

    // Q6
    while (stopMyLoop == false && LoopCtr !== 0) {
        LoopCtr--;
        let userInput = Number(prompt('How many Arab countries in the world?\nHINT: Between 15 and 30'));


        if (userInput >= 15 && userInput <= 18) {
            alert('too low');
        }
        else if (userInput >= 19 && userInput <= 20) {
            alert(' close');
        }
        else if (userInput == 21 || userInput == 23) {
            alert('so close');
        }
        else if (userInput == 22) // correct answer
        {
            alert('Correct Answer! ^^');
            marksCounter++;             
            stopMyLoop = true;
        }

        else if (userInput >= 24 && userInput <= 30) {
            alert('high');
        }

        else if (userInput < 15 || userInput > 30) // out of range
        {
            alert('Out of Range');
        }


        while (stopMyLoop == false && LoopCtr == 0) // When the attempts end without a correct answer
        {
            alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: 193 ');
            stopMyLoop = true;
        }

    }
}



function q7() {
    // Q7 
    let LoopCtr = 5; // 
    let stopMyLoop = false;
    let myArr = ['REAL MADRID', 'BARCELONA', 'MAN UTD', 'MILAN', 'JUVENTUS', 'BAYERN', 'BVB', 'MAN CITY'];
    let userInput = prompt('Guess who is my  favorite team\nHINT: \nReal Madrid, Barcelona, Man Utd, \nMilan, Juventus, Bayern,\nBVB, Man City, Ajax');



    while (LoopCtr >= 0 && stopMyLoop == false) {

        LoopCtr--; // loop counter

        if (userInput.toUpperCase() == myArr[1]) {
            alert('Correct Answer! ^^');
            marksCounter++; 
            LoopCtr = 0; //stopMyLoop=false;         
            break;
        }

        else {
            for (let i = 0; i <= 4; i++) {
                alert('Wrong Answer, Try AGAIN');
                userInput = prompt('HINT:\nBarcelona, Real Madrid, Man Utd, \nMilan, Juventus, Bayern,\nBVB, Man City, Ajax');
                break;

            }

            if (stopMyLoop == false && LoopCtr == 0) // When the attempts end without a correct answer
            {
                alert('Sorry you\'ve reached the number of attempts allowed: The correct answer is  :: Barcelona ');
                break;
            }
        }

    }
    

}


greeting();
alert('After This Message, we\'re going to play a quick game, \n Called GUESS-AboutMe, \n - Which is made up of 7 Questions that you will answer with NUMBERS only. \n - You will have 6 questions with 4 attempts each time and the last question you will have 6 attempts. \n- I will give you a hint for each question');
q1();
q2();
q3();
q4();
q5();
q6();
q7();

alert(`Thank You,  ${userName} Your score is  ( ${marksCounter}  / 7 ) `);






