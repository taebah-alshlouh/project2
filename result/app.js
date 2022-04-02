"use strict";
let newName= localStorage.getItem('name');

document.getElementById("userName").innerHTML=`Name : ${newName}`;
let finalResult=document.getElementById("finalResult");


let examType= localStorage.getItem('exam');

let correctAnsewres=[];



let question1=document.getElementById("question1");
let yourAnswer1=document.getElementById("yourAnswer1");
let CorrectAnswer1=document.getElementById("CorrectAnswer1");
//////////////////////////////////////////////////////////////////////////////
let question2=document.getElementById("question2");
let yourAnswer2=document.getElementById("yourAnswer2");
let CorrectAnswer2=document.getElementById("CorrectAnswer2");
/////////////////////////////////////////////////////////////////////////////
let question3=document.getElementById("question3");
let yourAnswer3=document.getElementById("yourAnswer3");
let CorrectAnswer3=document.getElementById("CorrectAnswer3");
/////////////////////////////////////////////////////////////////////////////
let question4=document.getElementById("question4");
let yourAnswer4=document.getElementById("yourAnswer4");
let CorrectAnswer4=document.getElementById("CorrectAnswer4");
/////////////////////////////////////////////////////////////////////////////
let question5=document.getElementById("question5");
let yourAnswer5=document.getElementById("yourAnswer5");
let CorrectAnswer5=document.getElementById("CorrectAnswer5");



//////////////////////////////////////HTML Questions
const htmlQuestions=[
    {
        question: 'the tag &lt;p&gt; is',
        choice1:  'block element',//
        choice2:  'inline element',
        choice3:  'inline-block element',
    },
    {
        question: 'what is the  compenents of the HTML structure ? :',
        choice1:  '&lt;section&gt; and &lt;div&gt;',
        choice2:  '&lt;head&gt; and &lt;body&gt;',//
        choice3:  '&lt;form&gt; and &lt;table&gt;',
    },
    {
        question: 'what are the three types of lists ?',
        choice1:  '&lt;ol&gt; &lt;ul&gt; &lt;dl&gt;',//
        choice2:  '&lt;li&gt; &lt;tr&gt; &lt;td&gt;',
        choice3:  '&lt;b&gt; &lt;i&gt; &lt;p&gt;',
    },
    {
        question: 'which is the right way to write the anchor tag?',
        choice1:  '&lt; a href="url"  new&gt;',
        choice2:  '&lt; a href="url" target="new"&gt;',
        choice3:  '&lt;a href="url" target="_blank"&gt;',//
    },
    {
        question: 'which of these element are all <table> element?',
        choice1:  '&lt;table&gt; &lt;tr&gt; &lt;tt&gt;',
        choice2:  '&lt;table&gt; &lt;tr&gt; &lt;td&gt;',//
        choice3:  '&lt;table&gt; &lt;head&gt; &lt;tfoot&gt;',
    }
];
///////////////////////////////////////////////
//////////////////////////////////////CSS Questions
const cssQuestions=[
    {
        question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
        choice1: 'in the head section',//
        choice2: 'in the body section',
        choice3: 'at the end of the document',
    },
    {
        question: 'Which HTML attribute is used to define inline styles?',
        choice1: 'class',
        choice2: 'style',//
        choice3: 'font',
    },
    {
        question: 'Which property is used to change the background color?',
        choice1: 'background-color',//
        choice2: 'bcolor',
        choice3: 'color',
    },
    {
        question: 'Which CSS property controls the text size?',
        choice1:  'text-size',
        choice2:  'font-style',
        choice3:  'font-size',//
    },
    {
        question: 'Which property is used to change the left margin of an element?',
        choice1: 'padding-left',
        choice2: 'margin-left',//
        choice3: 'indent',
    }
];





///////////////////////////////////////////////
//////////////////////////////////////JS Questions
const jsQuestions=[
    {
        question: 'How many types of data in JavaScript',
        choice1: '8',//
        choice2: '6',
        choice3: '4',
    },
    {
        question: 'How do yo creat a function in JavaScript?',
        choice1: 'function=myfunction()',
        choice2: 'function myfunction()',//
        choice3: 'function:myfunction()',
    },
    {
        question: 'How does the while loop start',
        choice1: 'while(i<=10, i++)',//
        choice2: 'while i=1 to 10',
        choice3: 'while(i<=10)',
    },
    {
        question: 'how do you find the number with highest value of x and y ?',
        choice1: 'top(x,y)',
        choice2: 'ceil(x,y)',
        choice3: 'math.ceil(x,y)',//
    },
    {
        question: 'How do you declare a JavaScript variable?',
        choice1: 'variable carName',
        choice2: 'var carName',//
        choice3: 'v carName',
    }
];
///////////////////////////////////////////////
let qh1=Object.values(htmlQuestions[0]);
let qh2=Object.values(htmlQuestions[1]);
let qh3=Object.values(htmlQuestions[2]);
let qh4=Object.values(htmlQuestions[3]);
let qh5=Object.values(htmlQuestions[4]);
let qh=[qh1,qh2,qh3,qh4,qh5];
console.log(qh);
////////////////////////////////////////////////
let qc1=Object.values(cssQuestions[0]);
let qc2=Object.values(cssQuestions[1]);
let qc3=Object.values(cssQuestions[2]);
let qc4=Object.values(cssQuestions[3]);
let qc5=Object.values(cssQuestions[4]);
////////////////////////////////////////////////
let qj1=Object.values(jsQuestions[0]);
let qj2=Object.values(jsQuestions[1]);
let qj3=Object.values(jsQuestions[2]);
let qj4=Object.values(jsQuestions[3]);
let qj5=Object.values(jsQuestions[4]);


function questionText(a,b,c,d,e) {
    question1.innerHTML=a[0];
    question2.innerHTML=b[0];
    question3.innerHTML=c[0];
    question4.innerHTML=d[0];
    question5.innerHTML=e[0];
}

function correctAnaswerText(a,b,c,d,e) {
    CorrectAnswer1.innerHTML=a[1];
    CorrectAnswer2.innerHTML=b[2];
    CorrectAnswer3.innerHTML=c[1];
    CorrectAnswer4.innerHTML=d[3];
    CorrectAnswer5.innerHTML=e[2];
    correctAnsewres.push(a[1],b[2],c[1],d[3],e[2]);
    localStorage.setItem("corret Answers",correctAnsewres);
}
if (examType==`HTML`) {
    questionText(qh1,qh2,qh3,qh4,qh5);
    correctAnaswerText(qh1,qh2,qh3,qh4,qh5)
    correctAnsewres.push(qh1,qh2,qh3,qh4,qh5)
}
else if (examType==`CSS`){
    questionText(qc1,qc2,qc3,qc4,qc5);
    correctAnaswerText(qc1,qc2,qc3,qc4,qc5);
}
else if (examType==`JS`){
    questionText(qj1,qj2,qj3,qj4,qj5);
    correctAnaswerText(qj1,qj2,qj3,qj4,qj5);
}

let answersArr=JSON.parse(localStorage.getItem('yourAnswers'));
console.log(answersArr);
yourAnswer1.innerHTML=answersArr[0];
yourAnswer2.innerHTML=answersArr[1];
yourAnswer3.innerHTML=answersArr[2];
yourAnswer4.innerHTML=answersArr[3];
yourAnswer5.innerHTML=answersArr[4];

let x=0;
let y=0;
let i=0;
 switch (i) {
     case 0:
        if(answersArr[0]===correctAnsewres[0]){
            x++;
            yourAnswer1.style.color="rgba(0, 182, 0, 0.712)";

        }else{
            y++;
            yourAnswer1.style.color="red";
        }
        case 1:
            if(answersArr[1]===correctAnsewres[1]){
                x++;
                yourAnswer2.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer2.style.color="red";
            }    
             case 2:
            if(answersArr[2]===correctAnsewres[2]){
                x++;
                yourAnswer3.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer3.style.color="red";
            }    
             case 3:
            if(answersArr[3]===correctAnsewres[3]){
                x++;
                yourAnswer4.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer4.style.color="red";
            }   
              case 4:
            if(answersArr[4]===correctAnsewres[4]){
                x++;
                yourAnswer5.style.color="rgba(0, 182, 0, 0.712)";
    
            }else{
                y++;
                yourAnswer5.style.color="red";
            }    
     default:
         if(x>y){
            finalResult.innerHTML=`YOU PASSED THE QUIZ!!! &nbsp; &nbsp; ${(x/5)*100} %`;
            finalResult.style.backgroundColor="rgba(0, 182, 0, 0.712)";
            
         }
         else{
            finalResult.innerHTML=`YOU FAILED THE QUIZ &nbsp; &nbsp; ${(x/5)*100} %`;
            finalResult.style.backgroundColor="red";
         }
         break;
 }