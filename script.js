// Initialize particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        }
    },
    retina_detect: true
});

// Countdown Timer
function updateCountdown() {
    const newYear = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = newYear - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = d.toString().padStart(2, '0');
    document.getElementById('hours').innerText = h.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = s.toString().padStart(2, '0');

    if (gap < 0) {
        document.querySelector('.countdown-container').style.display = 'none';
        document.querySelector('.wishes-container').style.display = 'block';
    }
}

setInterval(updateCountdown, 1000);

// Resolutions List
function addResolution() {
    const input = document.getElementById('resolution-input');
    const resolution = input.value.trim();
    
    if (resolution) {
        const list = document.getElementById('resolutions-list');
        const li = document.createElement('li');
        li.textContent = resolution;
        list.appendChild(li);
        input.value = '';
        
        // Save to localStorage
        const resolutions = JSON.parse(localStorage.getItem('resolutions') || '[]');
        resolutions.push(resolution);
        localStorage.setItem('resolutions', JSON.stringify(resolutions));
    }
}

// Load saved resolutions
window.addEventListener('load', () => {
    const resolutions = JSON.parse(localStorage.getItem('resolutions') || '[]');
    const list = document.getElementById('resolutions-list');
    resolutions.forEach(resolution => {
        const li = document.createElement('li');
        li.textContent = resolution;
        list.appendChild(li);
    });
    
    // Initialize countdown
    updateCountdown();
});