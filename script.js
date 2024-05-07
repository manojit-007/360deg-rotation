function slider() {
    let sliderValue = document.getElementById('slider').value;
    let imageContainer = document.getElementById('main');
    let imageUrl = `./assets/${sliderValue < 10 ? '0' + sliderValue : sliderValue}.png`;
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="">`;
}

// document.getElementById('slider').addEventListener('input', slider);

setInterval(slider,100)