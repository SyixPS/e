// Projects Data
const projects = [
    { title: "Enterprise Platform", tech: "SwiftUI · CloudKit", description: "A full-stack enterprise solution with real-time synchronization across Apple devices." },
    { title: "AI Interface", tech: "TensorFlow · CoreML", description: "An AI-powered interface for natural language processing and image recognition." },
    { title: "AR Experience", tech: "ARKit · Reality Composer", description: "An immersive AR experience for interactive storytelling." }
];

// Skills Data
const skills = [
    { icon: 'fa-apple', name: 'Apple Ecosystem', level: 85, hours: 1200 },
    { icon: 'fa-swift', name: 'Swift Development', level: 90, hours: 1500 },
    { icon: 'fa-react', name: 'React Native', level: 75, hours: 800 },
    { icon: 'fa-unity', name: 'AR/VR Development', level: 70, hours: 600 }
];

// Load Projects
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p class="tech-stack">${project.tech}</p>
        `;
        card.addEventListener('click', () => openProjectModal(project));
        projectGrid.appendChild(card);
    });
}

// Load Skills
function loadSkills() {
    const skillGrid = document.querySelector('.skill-grid');
    skills.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'skill-item';
        item.innerHTML = `
            <i class="fab ${skill.icon}"></i>
            <h4>${skill.name}</h4>
        `;
        item.addEventListener('click', () => openSkillModal(skill));
        skillGrid.appendChild(item);
    });
}

// Open Project Modal
function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-tech').textContent = project.tech;
    modal.querySelector('.modal-description').textContent = project.description;
    
    modal.classList.remove('closing');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);
}

// Open Skill Modal
function openSkillModal(skill) {
    const modal = document.getElementById('skill-modal');
    const progressLevel = modal.querySelector('#progress-level');
    const skillHours = modal.querySelector('#skill-hours');

    // Reset animations
    modal.classList.remove('closing');
    progressLevel.style.width = '0%';
    skillHours.textContent = '0';

    // Set content
    modal.querySelector('#modal-title').textContent = skill.name;
    modal.querySelector('#skill-level').textContent = skill.level;

    // Show modal with animation
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('show'), 10);

    // Animate elements
    setTimeout(() => {
        progressLevel.style.width = `${skill.level}%`;
        animateHours(skillHours, skill.hours, 1200);
    }, 50);
}

// Function to animate hours count-up
function animateHours(target, finalValue, duration) {
    let start = 0;
    let current = start;
    let increment = Math.ceil(finalValue / (duration / 20));
    
    clearInterval(target.countInterval); // Clear previous animation
    target.countInterval = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
            current = finalValue;
            clearInterval(target.countInterval);
        }
        target.textContent = current;
    }, 20);
}

// Close Modals
document.querySelectorAll('.modal .close').forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.classList.remove('show');
        modal.classList.add('closing');
        
        setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('closing');
        }, 300);
    });
});

// Improved Loading Screen Interaction
document.getElementById('loader').addEventListener('click', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    
    // Add ripple effect
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        width: 100px;
        height: 100px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: ripple 0.6s ease-out;
    `;
    
    loader.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    setTimeout(() => {
        loader.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('particles-js').style.opacity = '1';
        initializePage();
    }, 800);
});

// Initialize Page
function initializePage() {
    loadProjects();
    loadSkills();

    const projectCards = document.querySelectorAll('.project-card');
    const skillItems = document.querySelectorAll('.skill-item');
    addTiltEffect([...projectCards, ...skillItems]);

    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 600 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.7, random: true },
            size: { value: 2.5, random: true },
            move: {
                enable: true,
                speed: 2.5,
                direction: "none",
                random: false,
                out_mode: "out",
                attract: { enable: true, rotateX: 800, rotateY: 1600 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            }
        }
    });
}
