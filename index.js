var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
var name = readlineSync.question('What is your name? ');
console.log(chalk.magentaBright('Welcome '+name+ ' to this Tumse Na Ho Payega Game'));



function play(question,answer){
    var userAnswer = readlineSync.question(question);
    if(userAnswer===answer)
    {
        console.log(chalk.green('Congrats you are right'))
        score++;
    }else{
        console.log(chalk.red('Sorry you are wrong'))
    }

    console.log(chalk.cyan('Your current Score: ',score))

}

var questions = [
    {
        question:'who does Shahid Khan impersonate to rob ferry trains?\n1. Sultana,a daciot\n2. A British Officer\n3. Wait, Who is Shahid khan\n',
        answer:'1'
    },
    {
        question:'At the end of the film, who rules Wasseypur?\n1. Shamshad Khan\n2. Faisal Khan\n3. Definite\n',
        answer:'3'
    },
    {
        question:'Perpendicular, who has a separate fan base, also had a special skill. What was it?\n1.Shoot Blinfonded\n2. He could make bombs\n3. He played with a blade in his mouth\n',
        answer:'3'
    },
    {
        question:'We all know who ultimately kills Ramadhir Singh. The question is, how many guns does Faisal Khan use to shoot at Ramadhir Singh?\n1. 3\n2. 2\n3. 4 or more',
        answer:'3'
    },
    {
        question:'Who is the director of Gangs of Wasseypur?\n1.Karan Johar\n2. Anurag Kashyap\n3. Kabir Khan\n',
        answer:'2'
    },
    {
        question:'Whose voiceover is used to narrate the whole story?\n1.Manoj Bajpayee\n2. Piyush Mishra\n3. Pankaj Triphati\n',
        answer:''
    }]


for(var i=0; i<questions.length;i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer)
}


console.log('You made it to the end ');
console.log(chalk.bgGreen('Your final score is', score));
