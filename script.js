const quizData = [
    {
        question: 'What is the highest number used in a Sudoku puzzle?',
        a:'Ten',
        b:'Twenty',
        c:'Nine',
        d:'Nineteen',
        correct: 'c'
    },{
        question: 'What is the term for a positive electrode?',
        a:'Neutrone',
        b:'Electrode',
        c:'Protone',
        d:'Anode',
        correct: 'd'

    },{
        question: 'How many dots are used in each letter in the Braille system?',
        a:'Eight',
        b:'Six',
        c:'Ten',
        d:'Five',
        correct: 'b'

    },{
        question: 'Betz cells are found in which part of the body?',
        a:'Eyes',
        b:'Tongue',
        c:'Liver',
        d:'Brain',
        correct: 'd'

    },{
        question: 'How many sides has an octagon?',
        a:'Fifteen',
        b:'Eight',
        c:'Seven',
        d:'eighteen',
        correct: 'b'

    }
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

//will call everytime we submit
loadQuiz();

function loadQuiz(){

    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
//selects and deselecst after every submit
//
function getSelected(){
    
    let answer = undefined;

    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach(answerEl =>{
            answerEl.checked = false;
        });

}

submitBtn.addEventListener('click',() =>{
    // check to see the answer
   
    const answer = getSelected();
    console.log(answer);
        //load next quiz if the answer is checked
        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }

            currentQuiz++;
             if (currentQuiz < quizData.length){
                loadQuiz();
            } else{
            //TODO :show results
                    quiz.innerHTML =
                         `<h2>You answered correctly at ${score}/ ${quizData.length}questions.</h2>

                            <button onClick = "location.reload()">Reload</button>`
                }
            }
  
    
   
} )