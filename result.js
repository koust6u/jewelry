// 선택된 답변을 임시 데이터로 설정 (예시)
const answers = [
    "반지",        // 선택한 주얼리 종류
    "여름 쿨톤",    // 퍼스널 컬러
    "짧고 통통한 편", // 체형
    "귀여움(러블리)" // 스타일
];

function displayResult() {
    const resultContainer = document.getElementById("result-container");

    // 1. 고객님이 선택한 주얼리 종류
    const jewelrySelection = document.createElement("div");
    jewelrySelection.classList.add("result-card", "mb-6");
    jewelrySelection.innerHTML = `
        <h3 class="text-2xl font-semibold">1. 반지</h3>
        <p class="mt-2">고객님께 어울리는 주얼리 종류는 <strong>${answers[0]}</strong>입니다.</p>
    `;
    resultContainer.appendChild(jewelrySelection);

    // 2. 퍼스널 컬러 추천
    const colorSelection = document.createElement("div");
    colorSelection.classList.add("result-card", "mb-6");
    colorSelection.innerHTML = `
        <h3 class="text-2xl font-semibold">2. ${answers[1]}</h3>
        <ul class="list-disc ml-6">
            <li>맑고 부드러운 느낌의 화이트 실버, 실버 색상의 반지가 가장 잘 어울립니다.</li>
            <li>여름 쿨톤 특유의 깨끗하고 우아한 분위기를 살려줄 디자인을 선택하세요.</li>
        </ul>
    `;
    resultContainer.appendChild(colorSelection);

    // 3. 체형에 맞는 추천
    const bodySelection = document.createElement("div");
    bodySelection.classList.add("result-card", "mb-6");
    bodySelection.innerHTML = `
        <h3 class="text-2xl font-semibold">3. ${answers[2]}</h3>
        <ul class="list-disc ml-6">
            <li>손이 짧고 통통하시면, 볼드한 반지가 더 어울립니다.</li>
            <li>세로로 길게 보일 수 있는 마퀴즈 컷, 타원형 반지를 추천드립니다.</li>
        </ul>
    `;
    resultContainer.appendChild(bodySelection);

    // 4. 스타일에 맞는 추천
    const styleSelection = document.createElement("div");
    styleSelection.classList.add("result-card", "mb-6");
    styleSelection.innerHTML = `
        <h3 class="text-2xl font-semibold">4. ${answers[3]}</h3>
        <ul class="list-disc ml-6">
            <li>귀여운 디자인으로는 하트, 리본, 꽃 큐빅을 추천합니다.</li>
            <li>파스텔 컬러 스톤으로 러블리한 느낌을 낼 수 있습니다.</li>
        </ul>
    `;
    resultContainer.appendChild(styleSelection);
}

// 페이지 로드 시 결과 표시
window.onload = displayResult;
