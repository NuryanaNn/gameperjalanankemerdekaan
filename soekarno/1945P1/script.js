const words = ["Kami", "Bangsa", "Indonesia", "Dengan", "Ini", "Menjatakan", "Kemerdekaan", "Indonesia", "Hal - Hal", "jang", "Mengenai", "Pemindahan", "Kekoeasaan", "Dll", "Diselenggarakan", "Dengan", "Tjara", "Seksama", "Dan", "Dalam", "Tempo", "Jang", "Sesingkat", "Singkatnya"]; // List of words
const wordContainer = document.querySelector(".word-container");
const arrangementBtn = document.querySelector(".arrange-btn");
const proclamation = document.querySelector(".proclamation");
const selectedWords = [];

// Shuffle the words
shuffleArray(words);

// Create word elements and add event listeners
words.forEach(word => {
    const wordElement = document.createElement("div");
    wordElement.classList.add("word");
    wordElement.textContent = word;
    wordContainer.appendChild(wordElement);

    wordElement.addEventListener("click", () => {
        if (!wordElement.classList.contains("selected")) {
            wordElement.classList.add("selected");
            selectedWords.push(wordElement.textContent);
            updateProclamation();
        }
    });
});

arrangementBtn.addEventListener("click", () => {
    shuffleArray(words);
    updateWordElements();
    selectedWords.length = 0; // Clear selected words array
    updateProclamation();
});

function updateWordElements() {
    const wordElements = document.querySelectorAll(".word");
    wordElements.forEach((wordElement, index) => {
        wordElement.textContent = words[index];
        wordElement.classList.remove("selected");
    });
}

function updateProclamation() {
    proclamation.textContent = selectedWords.join(" ");
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const submitBtn = document.querySelector(".submit-btn");
const correctProclamation = "Kami Bangsa Indonesia Dengan Ini Menjatakan Kemerdekaan Indonesia Hal - Hal Jang Mengenai Pemindahan Kekoeasaan Dll Diselenggarakan Dengan Tjara Seksama Dan Dalam Tempo Jang Sesingkat Singkatnya"; // Naskah yang benar

submitBtn.addEventListener("click", () => {
    const currentProclamation = proclamation.textContent;
    if (currentProclamation === correctProclamation) {
        alert("Jawaban Anda benar! Selamat!");
    } else {
        alert("Jawaban Anda salah. Coba lagi!");
    }
});