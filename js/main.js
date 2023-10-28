
let booksButton = document.getElementById('booksButton');
let thrillerButton = document.getElementById('thrillerButton');
let magicButton = document.getElementById('magicButton');
let scienceButton = document.getElementById('scienceButton');
let fantasyButton = document.getElementById('fantasyButton');
let detectiveButton = document.getElementById('detectiveButton');

booksButton.addEventListener('click',function(){
    window.location.href = 'index.html';
})
thrillerButton.addEventListener('click',function(){
    window.location.href = 'thriller.html'
})
magicButton.addEventListener('click',function(){
    window.location.href = 'magic.html'
})
scienceButton.addEventListener('click',function(){
    window.location.href = 'science.html'
})
fantasyButton.addEventListener('click',function(){
    window.location.href = 'fantasy.html'
})
detectiveButton.addEventListener('click',function(){
    window.location.href = 'detective.html';
});

let currentURL = window.location.href;
let activeButtons = document.querySelectorAll('.active-button');

activeButtons.forEach(button => {
    let buttonURL = button.getAttribute('data-target-url');
    if (currentURL === buttonURL) {
        button.classList.add('active-button');
    } else {
        button.classList.remove('active-button');
    }
});