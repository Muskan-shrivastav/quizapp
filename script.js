 const questions = [
    {
        question : "Who is known as the father of computer?",
        answers:[
            {text:"Dennis Ritchie",correct:false},
            {text:"Bill Gates",correct:false},
            {text:"Charles Babbage",correct:true},
            {text:"James Gosling",correct:false},
        ]
    },
    {
        question : "What is the brain of a computer system called?",
        answers:[
            {text:"RAM",correct:false},
            {text:"CPU",correct:true},
            {text:"GPU",correct:false},
            {text:"Hard Disk",correct:false},
        ]
    },
    {
        question : "What is known as temporary memory or volatile memory?",
        answers:[
            {text:"SSD",correct:false},
            {text:"HDD",correct:false},
            {text:"RAM",correct:true},
            {text:"ROM",correct:false},
        ]
    },
    {
        question : "What does RAM stand for?",
        answers:[
            {text:"Random Access Memory",correct:true},
            {text:"Reallocate Automatic Memory",correct:false},
            {text:"Remote Access Memory",correct:false},
            {text:"None of the above",correct:false},
        ]
    },
    {
        question : "Which of the following is the smallest unit of memory",
        answers:[
            {text:"Byte",correct:false},
            {text:"Bit",correct:true},
            {text:"Nibble",correct:false},
            {text:"Kb",correct:false},
        ]
    },
    {
        question : "what is Half Byte called?",
        answers:[
            {text:"KiloByte",correct:false},
            {text:"Bit",correct:false},
            {text:"Nibble",correct:true},
            {text:"Word Size",correct:false},
        ]
    },
    {
        question : "Which of the following computer languages is written in binary form?",
        answers:[
            {text:"Java",correct:false},
            {text:"C",correct:false},
            {text:"Pascal",correct:false},
            {text:"Machine Language",correct:true},
        ]
    },
    {
        question : "which of the following is not an output device?",
        answers:[
            {text:"Speakers",correct:false},
            {text:"Monitor",correct:false},
            {text:"Plotter",correct:false},
            {text:"Scanner",correct:true},
        ]
    },
    {
        question : "Which of the following is a programming language",
        answers:[
            {text:"Python",correct:true},
            {text:"Photoshop",correct:false},
            {text:"Microsoft Word",correct:false},
            {text:"Adobe Illustrator",correct:false},
        ]
    },
    {
        question : "Which programming language is used to create a structure of Website",
        answers:[
            {text:"Java",correct:false},
            {text:"c++",correct:false},
            {text:"HTML",correct:true},
            {text:"Python",correct:false},
        ]
    },
 ];

 const questionElement = document.getElementById("question");
 const answerbtn = document.getElementById("answer-button")
 const nextbtn = document.getElementById("next-btn")

 let currentQuestionIndex = 0;
 let score = 0;
 function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbtn.innerHTML = "Next";
    showQuestion();
 }

 function showQuestion(){
    resetState();

    let currentquestion = questions[currentQuestionIndex];
    let questionno = currentQuestionIndex+1;
    questionElement.innerHTML=questionno+". " +currentquestion.question;

    currentquestion.answers.forEach(answer=>{
        const button = document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer);
    })
 }

 function resetState(){
    nextbtn.style.display="none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
 }
 function selectanswer(e){
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct==="true";
    if(isCorrect){
        selectbtn.classList.add("correct");
      score++;
    }
    else{
        selectbtn.classList.add("incorrect")
    }
    Array.from(answerbtn.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    })
    nextbtn.style.display='block';
 }
 function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbtn.innerHTML="Play Again";
    nextbtn.style.display="block";
 }
 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
 }

 nextbtn.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
 })
 startQuiz();
