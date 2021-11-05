const questions = [
    {
        question: "Who invented Java Programming?",
        optionA: " Guido van Rossum",
        optionB: "Dennis Ritchie",
        optionC: "Bjarne Stroustrup",
        optionD: "James Gosling",
        correctOption: "optionD"
    },

    {
        question: "Which statement is true about Java?",
        optionA: "Java is a platform-dependent programming language",
        optionB: "Java is a platform independent programming language",
        optionC: " Java is a sequence-dependent programming language",
        optionD: "Java is a code dependent programming language",
        correctOption: "optionB"
    },

    {
        question: "Which component is used to compile, debug and execute the java programs?",
        optionA: "JRE",
        optionB: "JIT",
        optionC: "JVM",
        optionD: "JDK",
        correctOption: "optionD"
    },

    {
        question: "Which one of the following is not a Java feature?",
        optionA: " Object-oriented",
        optionB: "Portable",
        optionC: "Use of pointers",
        optionD: "Dynamic and Extensible",
        correctOption: "optionC"
    },

    {
        question: "Which of these cannot be used for a variable name in Java?",
        optionA: "identifier & keyword",
        optionB: " identifier",
        optionC: "none",
        optionD: "keyword",
        correctOption: "optionD"
    },

    {
        question: "What is the extension of java code files?",
        optionA: ".js",
        optionB: ".txt",
        optionC: " .class",
        optionD: ".java",
        correctOption: "optionD"
    },

    {
        question: "Which environment variable is used to set the java path?",
        optionA: "CLASSPATH",
        optionB: "MAVEN_HOME",
        optionC: "JAVA_HOME",
        optionD: "JAVA",
        correctOption: "optionC"
    },

    {
        question: "Which of the following is not an OOPS concept in Java?",
        optionA: "Polymorphism",
        optionB: "Inheritance",
        optionC: "Compilation",
        optionD: "Encapsulation",
        correctOption: "optionC"
    },

    {
        question: "What is not the use of “this” keyword in Java?",
        optionA: "Referring to the instance variable when a local variable has the same name",
        optionB: "Passing itself to another method ",
        optionC: "Calling another constructor in constructor chaining",
        optionD: "Passing itself to the method of the same class",
        correctOption: "optionD"
    },

    {
        question: "Which of the following is a type of polymorphism in Java Programming?",
        optionA: "Multiple polymorphism",
        optionB: "Multilevel polymorphism",
        optionC: "Execution time polymorphism",
        optionD: "Compile time polymorphism",
        correctOption: "optionD"
    },

    {
        question: "Which of the following package is used for text formatting in Java programming language?",
        optionA: " java.awt",
        optionB: "java.awt.text",
        optionC: " java.text",
        optionD: "java.awt        ",
        correctOption: "optionC"
    },

    {
        question: "Which of the following is not a segment of memory in java?",
        optionA: "Register Segment",
        optionB: "Code Segment",
        optionC: "Stack Segment",
        optionD: "Heap Segment",
        correctOption: "optionA"
    },


    {
        question: "What is Truncation in Java?",
        optionA: "Floating-point value assigned to a Floating type",
        optionB: " Floating-point value assigned to an integer type",
        optionC: "Integer value assigned to floating type",
        optionD: " Integer value assigned to floating type",
        correctOption: "optionB"
    },

    {
        question: "What is the extension of compiled java classes?",
        optionA: ".txt",
        optionB: ".js",
        optionC: ".java",
        optionD: ".class",
        correctOption: "optionD"
    },

    {
        question: "Which exception is thrown when java is out of memory?",
        optionA: "OutOfMemoryError",
        optionB: "MemoryError",
        optionC: "MemoryOutOfBoundsException",
        optionD: "MemoryFullException",
        correctOption: "optionA"
    },

     

     


]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
