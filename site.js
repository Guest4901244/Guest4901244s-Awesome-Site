function updateBackground(url) {
    const bgElement = document.querySelector('.bg-image');
    if (url.trim() !== "") {
        bgElement.style.backgroundImage = `url('${url}')`;
        localStorage.setItem('customBG', url);
    } else {
        bgElement.style.backgroundImage = '';
        localStorage.removeItem('customBG');
    }
}

const savedBG = localStorage.getItem('customBG');
if (savedBG) {
    document.getElementById('bg-input').value = savedBG;
    updateBackground(savedBG);
}