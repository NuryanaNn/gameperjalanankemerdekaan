const questionText = document.querySelector(".question-text");
        const answerInput = document.querySelector(".answer-input");
        const submitButton = document.querySelector(".submit-button");
        const resultText = document.querySelector(".result-text");
        const nextButton = document.querySelector(".next-button");
        const questionContainer = document.querySelector(".question");
        const resultContainer = document.querySelector(".result");
        const endContainer = document.querySelector(".end-container");
        const backButton = document.querySelector(".back-button");
        
        const questions = [
            {
                question: "Siapakah Proklamator Kemerdekaan Indonesia?",
                answer: "Soekarno"
            },
            {
                question: "Apa ibu kota Indonesia?",
                answer: "Jakarta"
            },
            {
                question: "Di Universitas Mana Soekarno Kuliah",
                answer: "Universitas Indonesia"
            },
            {
                question: "Jurusan Apa Yang Di Pilih Soekarno?",
                answer: "Arsitektur"
            },
            {
                question: "Tahun Aktif Di ISC?",
                answer: "1923"
            },
            {
                question:"Posisi Soekarno DI ISC",
                answer: "Ketua"
            },
            {
                question:"Editor Majalah.?",
                answer:"Pandji"
            },
            {
                question:"Kongres Pemuda II Tahun",
                answer:"1928"
            },
            {
                question:"Peran Di Kongres Pemuda II",
                answer:"Pemimpin"
            },
            {
                question:"Landasan Perjuangan",
                answer:"Pendidikan"
            },
            {
                question:"Peran Dalam Kemerdekaan.?",
                answer:"Pemimpin"
            }
        ];
        
        let currentQuestionIndex = 0;
        
        submitButton.addEventListener("click", () => {
            const userAnswer = answerInput.value.trim().toLowerCase();
            const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
        
            if (userAnswer === correctAnswer) {
                resultText.textContent = "Jawaban Anda benar!";
            } else {
                resultText.textContent = "Jawaban Anda salah. Jawaban yang benar adalah: " + correctAnswer;
            }
        
            questionContainer.style.display = "none";
            resultContainer.style.display = "block";
        });
        
        nextButton.addEventListener("click", () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                questionText.textContent = questions[currentQuestionIndex].question;
                answerInput.value = "";
                questionContainer.style.display = "block";
                resultContainer.style.display = "none";
            } else {
                questionContainer.style.display = "none";
                resultText.textContent = "Anda telah menyelesaikan semua pertanyaan!";
                nextButton.style.display = "none";
                backButton.style.display = "block"
                resultContainer.style.display = "block";
            }
        });

        backButton.addEventListener("click", () => {
            window.location.href = "soekarno.html"; // Ganti "halaman-lain.html" dengan URL halaman tujuan Anda
        });
        