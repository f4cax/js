document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const value = document.querySelector('.value');

    function updateValue() {
        const sliderValue = slider.value;
        value.textContent = sliderValue;
        
        const percent = (sliderValue - slider.min) / (slider.max - slider.min);
        const thumbWidth = 16;
        const sliderWidth = slider.offsetWidth;
        const position = percent * (sliderWidth - thumbWidth) + thumbWidth / 2;
        value.style.left = `${position}px`;

        const percentValue = (sliderValue / slider.max) * 100;
        slider.style.backgroundImage = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${percentValue}%, #e0e0e0 ${percentValue}%, #e0e0e0 100%)`;
    }

    slider.addEventListener('input', updateValue);
    slider.addEventListener('change', updateValue);

    updateValue();
}); 