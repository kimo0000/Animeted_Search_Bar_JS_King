const container = document.querySelector('.container');
const inputEl = document.querySelector('.inp');
const searchEl = document.querySelector('.search');
const microEl = document.querySelector('.micro');

searchEl.addEventListener('click', (e) => {
    inputEl.classList.toggle('active');

    if (inputEl.classList.contains('active')) {
        inputEl.placeholder = "Enter text";
        searchEl.classList.add('active');
        microEl.classList.add('active');
    } else {
        inputEl.placeholder = "";
        searchEl.classList.remove('active');
         microEl.classList.remove("active");
    }
})