function toggleText() {
    const textContainer = document.querySelector('.text - container');
    if (textContainer.classList.contains('hidden')) {
        textContainer.classList.remove('hidden');
        textContainer.classList.add('visible');
    } else {
        textContainer.classList.remove('visible');
        textContainer.classList.add('hidden');
    }
}