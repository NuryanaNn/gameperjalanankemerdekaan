const dialogText = document.querySelector(".dialog-text");
const choicesContainer = document.querySelector(".choices");
const choiceButtons = document.querySelectorAll(".choice-button");
const resultText = document.querySelector(".result-text");
const resultContainer = document.querySelector(".result");
const nextButton = document.querySelector(".next-button");
const dialogContainer = document.querySelector(".dialog");
const backButton = document.querySelector(".back-button");

const dialogData = [
    {
        dialog: 'Soekarno bertemu dengan tokoh nasionalis:<br> "Selamat siang, Bung Karno. Bagaimana kabarmu?"',
        choices: [
            'Baik, terima kasih!',
            'Sangat buruk...',
            'Tidak ada kabar baru.'
        ],
        correctIndex: 0,
        wrongResponse: 'Sayang sekali, jawaban Anda salah.'
    },

    {
        dialog: 'Soekarno berbicara kepada tokoh nasionalis:<br> "Apa rencanamu untuk perjuangan kita?"',
        choices: [
            'Kita harus bersatu demi kemerdekaan Indonesia!',
            'Kita tidak perlu berjuang...',
            'Aku tidak tahu'
        ],
        correctIndex: 0,
        wrongResponse: 'Sayang sekali, jawaban Anda salah.'
    },

    {
        dialog: 'Hatta, saatnya kita menghimpun kekuatan rakyat untuk mewujudkan cita-cita kemerdekaan',
        choices: [
            'Kita harus berdamai dengan penjajah!',
            'Betul, Bung Karno. Mari kita susun rencana langkah-langkah strategis yang tepat',
            'Aku tidak tahu'
        ],
        correctIndex: 0,
        wrongResponse: 'Sayang sekali, jawaban Anda salah.'
    },
    
    {
        dialog: 'Dialog dengan Mohammad Yamin : <br> Yamin, perlu ada semangat kebangsaan dalam naskah proklamasi kita',
        choices: [
            'Saya sepakat, Bung Karno. Kata-kata yang dipilih harus membara dan menginspirasi',
            'Betul, Bung Karno. Mari kita ambil senjata kita',
            'Aku tidak tahu'
        ],
        correctIndex: 0,
        wrongResponse: 'Sayang sekali, jawaban Anda salah.'
    },
    
    {
        dialog: 'Dialog dengan Sutan Sjahrir: <br> Sjahrir, bagaimana cara terbaik untuk menyampaikan pesan persatuan dalam proklamasi?',
        choices: [
            'Saya Sangat Semangat',
            'Kita harus menciptakan kata-kata yang menyatukan berbagai suku dan agama, Bung Karno',
            'Aku tidak tahu'
        ],
        correctIndex: 0,
        wrongResponse: 'Sayang sekali, jawaban Anda salah.'
    },
    
    
    {
        dialog: 'Dialog Dengan Tan Malaka : <br> Malaka, bagaimana kita bisa memastikan bahwa perjuangan ini tidak berakhir sia-sia?',
        choices: [
            'Kita perlu mempersiapkan langkah-langkah lanjutan setelah proklamasi, Bung Karno.',
            'Kita harus membuat sebuah tindakan dalam melakukan sebuah penyerangan',
            'Aku tidak tahu'
        ],
        correctIndex: 0,
        wrongResponse: 'Sayang sekali, jawaban Anda salah.'
    },
    
    {
        dialog: 'Dialog Dengan KI Hajar Dewantara : <br> Ki Hajar, pendidikan akan memainkan peran besar dalam membangun bangsa ini.',
        choices: [
            'Kita perlu mempersiapkan langkah-langkah lanjutan setelah proklamasi, Bung Karno.',
            'Mari Kita Kumpulkan Kekuatan menghimpun',
            'Benar sekali, Bung Karno. Pendidikan yang baik akan membentuk generasi penerus yang tangguh'
        ],
        correctIndex: 0,
        wrongResponse: 'Sayang sekali, jawaban Anda salah.'
    },
    
    
    {
        dialog: 'Dialog dengan Agus Salim : <br> Agus Salim, peran diplomatik kita sangat penting dalam memperoleh pengakuan internasional',
        choices: [
            'Membacakan Naskah Proklamasi',
            'Kita harus menjalin hubungan baik dengan negara-negara lain, Bung Karno.',
            'Melakukan Perjalanan ke Luar Negeri'
        ],
        correctIndex: 0,
        wrongResponse: 'Sayang sekali, jawaban Anda salah.'
    },
    
    {
        dialog: 'Dialog dengan Tjipto Mangunkusumo : <br> Tjipto, apa strategi terbaik dalam menggalang dukungan rakyat untuk perjuangan ini?',
        choices: [
            'Mari kita ciptakan organisasi yang kuat untuk mempersatukan semangat perjuangan, Bung Karno',
            'Kita Harus Menghubungi Sekutu Kita Luar Negeri.',
            'Melakukan Perjalanan ke Jakarta'
        ],
        correctIndex: 0,
        wrongResponse: 'Sayang sekali, jawaban Anda salah.'
    },
    
    // Tambahkan lebih banyak data dialog
];

let currentDialogIndex = 0;

choiceButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        checkAnswer(index);
    });
});

nextButton.addEventListener("click", () => {
    currentDialogIndex++;
    if (currentDialogIndex < dialogData.length) {
        loadDialog(dialogData[currentDialogIndex]);
    } else {
        dialogContainer.style.display = "none";
        nextButton.style.display = "none";
        backButton.style.display = "block";
        resultText.textContent = "Anda telah menyelesaikan dialog dengan tokoh nasionalis!";
        resultContainer.style.display = "block";
    }
});

backButton.addEventListener("click", () => {
    window.location.href = "../index.html"; // Ganti dengan URL halaman lain
});

function loadDialog(dialog) {
    dialogText.innerHTML = dialog.dialog;
    resultContainer.style.display = "none";
    choicesContainer.style.display = "block";
    choiceButtons.forEach(button => {
        button.disabled = false;
    });
    dialog.choices.forEach((choice, index) => {
        choiceButtons[index].textContent = choice;
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = dialogData[currentDialogIndex].correctIndex;
    if (selectedIndex === correctIndex) {
        resultText.textContent = "Jawaban Anda benar!";
    } else {
        resultText.textContent = dialogData[currentDialogIndex].wrongResponse;
    }

    choicesContainer.style.display = "none";
    resultContainer.style.display = "block";
}