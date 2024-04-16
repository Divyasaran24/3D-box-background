
const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');
const nextBtn = document.getElementById('nextBtn');

//? Background images to cycle through
const boxImages = ['./pikachu.gif', './demon-slayer.gif','./naruto.gif', './eye.gif', './jujutsu-kaisen.gif', './madara.gif', 'zoro.gif','./luffy-walk.gif', './blue-lock.gif' ,'./luffy-laugh.gif'];
let currentImageIndex = 0;

//? Function to change background image of the 3D box
function changeBoxBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % boxImages.length;
    const newBackgroundImage = boxImages[currentImageIndex];
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundImage = `url('${newBackgroundImage}')`;
    });
}

//? Event listeners
btn.addEventListener('click', function() {
    boxesContainer.classList.toggle('big');
});
nextBtn.addEventListener('click', function() {
    changeBoxBackgroundImage();
});

//? Function to create boxes
function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
            box.style.backgroundImage = `url('${boxImages[currentImageIndex]}')`; 
            boxesContainer.appendChild(box);
        }
    }
}

createBoxes();
