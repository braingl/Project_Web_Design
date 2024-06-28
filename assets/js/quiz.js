const questions = [
    {
        question : "Apa kepanjangan dari HTML?",
        optionA : "Hyper Text Markup Language",
        optionB : "Hyper Text Multiple Language",
        optionC : "Hyper Tool Multi Language",
        optionD : "Hyper Text Markup Leveler",
        correctOption : "optionA"
    },
    {
        question : "Bahasa pemrograman yang digunakan untuk mengatur tampilan dan tata letak halaman web adalah?",
        optionA : "HTML",
        optionB : "CSS",
        optionC : "PHP",
        optionD : "JavaScript",
        correctOption : "optionB"
    },
    {
        question : "Bahasa pemrograman yang digunakan untuk membuat tampilan halaman web yang interaktif adalah?",
        optionA : "HTML",
        optionB : "Python",
        optionC : "PHP",
        optionD : "JavaScript",
        correctOption : "optionD"
    },
    {
        question : "Python adalah bahasa pemrograman yang sering digunakan untuk apa?",
        optionA : "Membuat slide presentasi",
        optionB : "Membuat aplikasi mobile",
        optionC : "Analisis data",
        optionD : "Pengembangan web",
        correctOption : "optionC"
    },
    {
        question : "Bahasa pemrograman yang digunakan untuk memproses data dan interaksi pengguna di sisi server adalah?",
        optionA : "CSS",
        optionB : "Python",
        optionC : "PHP",
        optionD : "JavaScript",
        correctOption : "optionC"
    },
    {
        question : "Apa yang digunakan untuk memilih elemen HTML berdasarkan kelas CSS?",
        optionA : "#",
        optionB : ".",
        optionC : "*",
        optionD : "@",
        correctOption : "optionB"
    },
    {
        question : "Di antara berikut ini, manakah yang bukan tipe data di JavaScript?",
        optionA : "Integer",
        optionB : "String",
        optionC : "Float",
        optionD : "Array",
        correctOption : "optionD"
    },
    {
        question : "Fungsi dalam Python yang digunakan untuk menampilkan output ke konsol adalah?",
        optionA : "input()",
        optionB : "range()",
        optionC : "len()",
        optionD : "print()",
        correctOption : "optionD"
    },
    {
        question : "Bahasa pemrograman yang sering digunakan untuk membuat aplikasi web dinamis adalah?",
        optionA : "JavaScript",
        optionB : "HTML",
        optionC : "PHP",
        optionD : "CSS",
        correctOption : "optionA"
    },
    {
        question : "Apa yang digunakan untuk membuat komentar satu baris dalam CSS?",
        optionA : "//",
        optionB : "#",
        optionC : "/* /",
        optionD : "%",
        correctOption : "optionC"
    }
] 

let shuffledQuestions = [] // untuk menyimpan pertanyaan yang sudah diacak

function handleQuestions() {
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
    const currentQuestion = shuffledQuestions[indexNumber]
    const currentQuestionAnswer = currentQuestion.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById("option-modal").style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "#2fee82"
            playerScore++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "#f97070"
            document.getElementById(correctOption).style.backgroundColor = "#2fee82"
            wrongAttempt++
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}

function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
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

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null  

    if (playerScore <= 3) {
        remark = "Buruk, coba lagi!"
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Lumayan, coba lagi!"
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Bagus, pertahankan!"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById("remarks").innerHTML = remark
    document.getElementById("remarks").style.color = remarkColor
    document.getElementById("grade-percentage").innerHTML = playerGrade
    document.getElementById("wrong-answers").innerHTML = wrongAttempt
    document.getElementById("right-answers").innerHTML = playerScore
    document.getElementById("score-modal").style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById("score-modal").style.display = "none"
}

function closeOptionModal() {
    document.getElementById("option-modal").style.display = "none"
}