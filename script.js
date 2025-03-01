const questions = [
    {
        question: "고객님께서 추천 받고자 하는 주얼리 종류를 선택해주세요",
        options: [
            { text: "반지", image: "./images/ring.jpg" },
            { text: "팔찌", image: "./images/bracelet.jpg" },
            { text: "목걸이", image: "./images/Necklace.jpg" },
            { text: "기타", image: "./images/etc.jpg" }
        ]
    },
    {
        question: "고객님의 퍼스널 컬러는 무엇인가요?",
        options: [
            { text: "봄 웜톤", image: "./images/spring.jpg" },
            { text: "여름 쿨톤", image: "./images/summer.jpg" },
            { text: "가을 웜톤", image: "./images/fall.jpg" },
            { text: "겨울 쿨톤", image: "./images/winter.jpg" }
        ]
    },
    {
        question: "반지 및 팔찌 착용 부위에 대한 고객님의 객관적 체형을 선택해주세요.",
        options: [
            { text: "길고 얇은 편", image: "./images/tall-slender.jpg" },
            { text: "짧고 얇은 편", image: "./images/short-slender.jpg" },
            { text: "길고 통통한 편", image: "./images/tall-fat.jpg" },
            { text: "짧고 통통한 편", image: "./images/short-fat.jpg" }
        ]
    },
    {
        question: "고객님의 추구하는 대략적인 스타일을 선택해주세요.",
        options: [
            { text: "고급(세련미)", image: "./images/Luxury.jpg" },
            { text: "청순", image: "./images/Pure.jpg" },
            { text: "귀여움(러블리)", image: "./images/lovely.jpg" },
            { text: "캐주얼(꾸안꾸)", image: "./images/Casual.jpg" },
            { text: "미니멀", image: "./images/Minimalist.jpg" },
            { text: "클래식", image: "./images/Classic.jpg" }
        ]
    }
];

let currentQuestion = 0;
let answers = [];

function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = ''; // 이전 내용 초기화

    const questionData = questions[currentQuestion];

    // 질문 텍스트 삽입
    const questionTextDiv = document.createElement("div");
    questionTextDiv.classList.add("question-text");
    questionTextDiv.innerText = questionData.question;
    questionContainer.appendChild(questionTextDiv);

    // 카드 옵션 삽입
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container");

    questionData.options.forEach((option, index) => {
        const optionCard = document.createElement("div");
        optionCard.classList.add("question-card");

        // 클릭 이벤트 추가 (선택된 카드 강조 효과)
        optionCard.addEventListener("click", () => selectAnswer(optionCard, option.text));

        const img = document.createElement("img");
        img.src = option.image;
        img.alt = option.text;
        img.classList.add("w-full", "h-40", "object-cover", "rounded-md");

        const text = document.createElement("span");
        text.classList.add("text-xl", "mt-4");
        text.innerText = option.text;

        optionCard.appendChild(img);
        optionCard.appendChild(text);
        optionsContainer.appendChild(optionCard);
    });

    questionContainer.appendChild(optionsContainer);

    const nextBtn = document.getElementById("next-btn");
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = "제출";
        nextBtn.setAttribute("onclick", "submitForm()");
    } else {
        nextBtn.textContent = "다음";
        nextBtn.setAttribute("onclick", "nextQuestion()");
    }
}

// 선택된 카드에 효과 적용
function selectAnswer(optionCard, answerText) {
    // 기존 선택된 카드 해제
    document.querySelectorAll(".question-card").forEach(card => {
        card.classList.remove("selected");
    });

    // 새 선택된 카드 강조
    optionCard.classList.add("selected");
    answers[currentQuestion] = answerText;
}

function nextQuestion() {
    if (answers[currentQuestion] === undefined) {
        alert("답변을 선택해주세요.");
        return;
    }
    currentQuestion++;
    displayQuestion();
}

function submitForm() {
    if (answers.length < questions.length) {
        alert("모든 질문에 답해주세요!");
        return;
    }

    window.location = "./result.html";
}

window.onload = displayQuestion;
