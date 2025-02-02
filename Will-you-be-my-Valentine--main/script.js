const messages = [
    "Are you sure?",
    "Really sure??",
    "Em bé chắc chắn không zạaa?",
    "Năn nỉ em bé íiii",
    "Cân nhắc đi màaaa!",
    "Vợ nói không ủn buồn á.",
    "Chị sẽ siu siu buồn luôn...",
    "Không phải sẽ mà chắc chắn bùn í...",
    "Hức ủn không hỏi nữa ạ...",
    "Giỡn á nói có đi mà :((())) ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}