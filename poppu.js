const arc = document.querySelector("svg path");
const temperature = document.querySelector("#temperature");
const range = document.querySelector("#range");
range.addEventListener('input', (e) => {
    temperature.textContent = e.target.value;

    const arcLength = arc.getTotalLength();
    const step = arcLength / (range.max - range.min);
    const value = (e.target.value - range.min) * step;

    // Corrected property name and added 'px' unit
    arc.style.strokeDasharray =` ${value}px${arcLength - value}px`;
});

console.log(arc.getTotalLength());