function updateBackground(url) {
    const bgElement = document.querySelector('.bg-image');
    if (url.trim() !== "") {
        bgElement.style.backgroundImage = `url('${url}')`;
        localStorage.setItem('customBG', url);
    } else {
        // Reset to default gradient if empty
        bgElement.style.backgroundImage = '';
        localStorage.removeItem('customBG');
    }
}

// Add this line inside your window.onload function to load saved backgrounds
const savedBG = localStorage.getItem('customBG');
if (savedBG) {
    document.getElementById('bg-input').value = savedBG;
    updateBackground(savedBG);
}