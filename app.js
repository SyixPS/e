// Particle.js config
particlesJS('particles-js', {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        opacity: { value: 0.5 },
        size: { value: 2 },
        move: { enable: true, speed: 1.5 }
    }
});

// Dynamic content loading
const projects = [
    { title: "Enterprise Platform", tech: "SwiftUI · CloudKit" },
    { title: "AI Interface", tech: "TensorFlow · CoreML" },
    { title: "AR Experience", tech: "ARKit · Reality Composer" }
];

const projectGrid = document.querySelector('.project-grid');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p class="tech-stack">${project.tech}</p>
    `;
    projectGrid.appendChild(card);
});

// Skills grid
const skills = [
    { icon: 'fa-apple', name: 'Apple Ecosystem' },
    { icon: 'fa-swift', name: 'Swift Development' },
    { icon: 'fa-react', name: 'React Native' },
    { icon: 'fa-unity', name: 'AR/VR Development' }
];

const skillGrid = document.querySelector('.skill-grid');
skills.forEach(skill => {
    const item = document.createElement('div');
    item.className = 'skill-item';
    item.innerHTML = `
        <i class="fab ${skill.icon}"></i>
        <h4>${skill.name}</h4>
    `;
    skillGrid.appendChild(item);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
